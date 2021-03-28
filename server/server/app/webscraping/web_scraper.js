let axios = require("axios");
let cheerio = require("cheerio");
let puppeteer = require("puppeteer");
var { htmlToText } = require("html-to-text");

async function simplyhired(link) {
  try {
    const args = [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-infobars",
      "--window-position=0,0",
      "--ignore-certifcate-errors",
      "--ignore-certifcate-errors-spki-list",
      '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
    ];

    const options = {
      args,
      headless: true,
      ignoreHTTPSErrors: true
    };

    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.goto(link, { waitUntil: "networkidle0" });
    const html = await page.evaluate(
      () => document.querySelector("*").outerHTML
    );
    console.log(html);
    const split = link.split("=");
    const key = split[split.length - 1];
    const data = await page.evaluate(() => {
      const title = document.querySelector("div.viewjob-jobTitle").innerHTML;
      var company = document.querySelectorAll("div.viewjob-labelWithIcon")[0].cloneNode(true)
      company.querySelectorAll("span").forEach(e => e.remove())
      company = company.innerText
      const place = document.querySelectorAll("div.viewjob-labelWithIcon")[1].innerText;
      const desc = document.querySelector("div.viewjob-jobDescription")
        .outerHTML;

      return { title, company, place, desc };
    });
    data.desc = htmlToText(data.desc);
    console.log(data);
    await browser.close();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function ziprecruiter(link) {
  const response = await axios.get(link);
  const $ = await cheerio.load(response.data);
  const title = $("h1").text();
  const place = $("span.sub_item").eq(1).text();
  const description = $("div.job_description").html();
  const desc = htmlToText(description);
  const company = "";
  console.log(desc);
  const data = { title, company, place, desc };
  return data;
}

async function indeed(link) {
  const response = await axios.get(link);
  const $ = await cheerio.load(response.data);
  const title = $("h1").text();
  let company = "";
  if ($("div.icl-u-lg-mr--sm").children().length > 0) {
    company = $("div.icl-u-lg-mr--sm").children().eq(0).text();
  } else {
    company = $("div.icl-u-lg-mr--sm").text();
  }
  const place = $("div.icl-u-lg-mr--sm")
    .parent()
    .parent()
    .children()
    .eq(1)
    .text();
  const description = $("#jobDescriptionText").html();
  let desc = htmlToText(description);
  desc = desc.replace(/\n+/g, "\n\n");
  const data = { title, company, place, desc };
  // console.log(typeof desc);
  return data;
}

async function glassdoor(link) {
  const response = await axios.get(link);
  const $ = await cheerio.load(response.data);
  const company = $("div.css-16nw49e").clone().children().remove().end().text();
  const title = $("div.css-17x2pwl").text();
  const place = $("div.css-1v5elnn").html();
  const description = $("div.desc").html();
  const desc = htmlToText(description);
  console.log("location", place);
  const data = { title, company, place, desc };
  console.log(data);
  return data;
}

//use phantom.js
async function monster(link) {
  // require("html-to-text")
  try {
    const args = [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-infobars",
      "--window-position=0,0",
      "--ignore-certifcate-errors",
      "--ignore-certifcate-errors-spki-list",
      '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
    ];

    const options = {
      args,
      headless: true,
      ignoreHTTPSErrors: true,
      userDataDir: "./tmp",
    };

    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.goto(link, { waitUntil: "networkidle0" });
    const html = await page.evaluate(
      () => document.querySelector("*").outerHTML
    );
    console.log(html);
    const data = await page.evaluate(() => {
      const title = document.querySelector("h1.job_title").innerHTML;
      const company = document.querySelector("div.job_company_name").innerHTML;
      const place = document.querySelector("div.location").innerHTML;
      const desc = document.querySelector("div[name='sanitizedHtml']")
        .outerHTML;

      return { title, company, place, desc };
    });
    data.desc = htmlToText(data.desc);
    console.log(data);
    await browser.close();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function google(link) {
  try {
    const args = [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-infobars",
      "--window-position=0,0",
      "--ignore-certifcate-errors",
      "--ignore-certifcate-errors-spki-list",
      '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
    ];

    const options = {
      args,
      headless: true,
      ignoreHTTPSErrors: true,
      userDataDir: "./tmp",
    };

    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    const split = link.split("=");
    console.log(split);
    const link_id = split[split.length - 2].split("%")[0] + "==";
    // const parms = { id: link_id };

    await page.goto(link, { waitUntil: "networkidle0" });
    const html = await page.evaluate(
      () => document.querySelector("*").outerHTML
    );
    let data = await page.evaluate((link_id) => {
      const parent = document.querySelector(
        "[data-encoded-doc-id=" + "'" + link_id + "'" + "]"
      );
      const title = parent.querySelector("h2.KLsYvd").innerHTML;
      const company = parent.querySelector("div.sMzDkb").innerHTML;
      const place = parent.querySelectorAll("div.sMzDkb")[1].innerHTML;
      let desc = parent.querySelector("span.HBvzbc").innerHTML;
      desc = desc.replace(/(<.*>)/g, "");

      return { title, company, place, desc };
    }, link_id);
    console.log("hel");
    await browser.close();
    return data;
  } catch (error) {
    console.log(error);
  }
}

exports.scrape = async (req, res) => {
  console.log(req.body.link);
  const link = req.body.link;
  var data = undefined;
  try {
    switch (true) {
      case link.includes("indeed"):
        data = await indeed(link);
        break;
      case link.includes("glassdoor"):
        data = await glassdoor(link);
        break;
      case link.includes("monster"):
        data = await monster(link);
        break;
      case link.includes("google"):
        data = await google(link);
        break;
      case link.includes("ziprecruiter"):
        data = await ziprecruiter(link);
        break;
      case link.includes("simplyhired"):
        data = await simplyhired(link);
        break;
      default:
        data = {};
    }
    console.log(data);
    res.status(200).send({
      error: false,
      data: JSON.stringify(data),
      message: "Scrape successful",
    });
    return;
  } catch (error) {
    return undefined;
  }
};
