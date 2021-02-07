// import axios from "axios";
// import cheerio from "cheerio";
// import puppeteer from "puppeteer";
let axios = require("axios");
let cheerio = require("cheerio");
let puppeteer = require("puppeteer");

async function indeed(link) {
  const response = await axios.get(link);
  const $ = await cheerio.load(response.data);
  const title = $("h1").text();
  const company = $("div.icl-u-lg-mr--sm").text();
  const location = $("div.icl-u-lg-mr--sm")
    .parent()
    .parent()
    .children()
    .eq(1)
    .html();
  // var description = "";
  // $("#jobDescriptionText")
  //   .children()
  //   .each(function () {
  //     var $this = $(this);
  //     description += $this.text() + "\n";
  //   });
  const description = $("#jobDescriptionText").html();
  const data = { title, company, location, description };
  console.log(data);
  return data;
}

async function glassdoor(link) {
  const response = await axios.get(link);
  const $ = await cheerio.load(response.data);
  const company = $("div.css-16nw49e").text();
  const title = $("div.css-17x2pwl").text();
  const location = $("div.css-1v5elnn").text();
  // var description = "";
  // $("div.desc")
  //   .children()
  //   .first()
  //   .children()
  //   .each(function () {
  //     var $this = $(this);
  //     description += $this.text() + "\n";
  //   });
  const description = $("div.desc").html();
  const data = { title, company, location, description };
  console.log(data);
  return data;
}

//use phantom.js
async function monster(link) {
  // require("html-to-text")
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(link, { waitUntil: "networkidle0" });
    await page.screenshot({ path: "screenshot.png" });
    const html = await page.evaluate(
      () => document.querySelector("*").outerHTML
    );
    const data = await page.evaluate(() => {
      const title = document.querySelector("h1.job_title").innerHTML;
      const company = document.querySelector("div.job_company_name").innerHTML;
      const place = document.querySelector("div.location").innerHTML;
      const description = document.querySelector("div[name='sanitizedHtml']")
        .innerHTML;
      // formatted_desc = htmlToText(description);
      return { title, company, place, description };
    });
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

    await page.goto(link, { waitUntil: "networkidle0" });
    await page.screenshot({ path: "screenshot.png" });
    const html = await page.evaluate(
      () => document.querySelector("*").outerHTML
    );
    const data = await page.evaluate(() => {
      const title = document.querySelector("h2.KLsYvd").innerHTML;
      const company = document.querySelector("div.nJlQNd").innerHTML;
      const place = document.querySelectorAll("div.sMzDkb")[1].innerHTML;
      const description = document.querySelector("span.HBvzbc").innerHTML;
      return { title, company, place, description };
    });
    console.log(data);
    await browser.close();
    return data;
  } catch (error) {
    console.log(error);
  }
}

exports.scrape = async (req, res) => {
  console.log(req.body);
  // try {
  //   switch (true) {
  //     case link.includes("indeed"):
  //       return indeed(link);
  //     case link.includes("glassdoor"):
  //       return glassdoor(link);
  //     case link.includes("monster"):
  //       return monster(link);
  //     case link.includes("google"):
  //       return google(link);
  //     default:
  //       return undefined;
  //   }
  // } catch (error) {
  //   return undefined;
  // }
};

// //indeed
// await scraper(
//   "https://www.indeed.com/viewjob?cmp=Torch-Technology&t=Software+Engineer&jk=630b5d9e466a40e7&sjdu=QwrRXKrqZ3CNX5W-O9jEvRFd8FQI4DEv5V74lSpSnHYdryHake8eXm15gakPcq7mB_Lpuz1rFZFbWL7WfWmsuw&tk=1etf4gke4t5go802&adid=212222344&ad=-6NYlbfkN0B-hoXP66gOHEcN_9ojcpQNQGm1W4MjyqzRFCb8elUr95IM3vspBHmC6Icma3FhklSt1GvnvDUbuT2sRP2OPAaUaz9jKRaVFATRmQGsSwSBEiGqSPNE-V510Nrwsh8JHZiILNIKH685b1Mgj81Yz4FOszjGtq8vPgTxbkspO76tkrmTD2IvvlOzyICgJh7JN5TUcWw-HvyXgMuKo9pLm5vc79xXyMjrss_bV0BjeGENeyb8muGIb4fGckrAFWnfm-d2k0nCYdMBQSTno1knzslmJGo-yBZUC5exOWO6PtFSpC672n9TdNntOCWyPLgIEy2s4YyptttdeXLzkEt584kj&pub=4a1b367933fd867b19b072952f68dceb&vjs=3"
// );
// //glassdoor
// await scraper(
//   "https://www.glassdoor.com/job-listing/software-engineer-tyler-technologies-JV_IC1131702_KO0,17_KE18,36.htm?jl=3773797430&pos=102&ao=1044074&s=149&guid=000001775e3fe4899a69aaaff9e0a0ea&src=GD_JOB_AD&t=SRFJ&vt=w&cs=1_7cba3bd2&cb=1612193983313&jobListingId=3773797430&ctt=1612194270605"
// );
// monster;
// await scraper(
//   "https://job-openings.monster.com/java-software-engineer-westlake-tx-us-fidelity-talentsource/b94a66e5-0926-429c-b300-8d3c344c4275"
// );
// //google
// await scraper(
//   "https://www.google.com/search?q=google+jobs+software+engineer&oq=google+jobs+so&aqs=chrome.1.69i57j0i20i263j0l5.6749j0j1&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwi3_Y-Ei8nuAhWRMVkFHcI8C2sQutcGKAB6BAgFEAQ&sxsrf=ALeKk01iBO-EmFgoLLU6dArdsfZ0_zQElQ:1612196245417#htivrt=jobs&htidocid=VWAy68E986TmS0BWAAAAAA%3D%3D&fpstate=tldetail"
// );
// await scraper(
//   "https://www.google.com/search?q=google+jobs+software+engineer&oq=google+jobs+so&aqs=chrome.1.69i57j0i20i263j0l5.6749j0j1&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwi3_Y-Ei8nuAhWRMVkFHcI8C2sQutcGKAB6BAgFEAQ&sxsrf=ALeKk01iBO-EmFgoLLU6dArdsfZ0_zQElQ:1612196245417#htivrt=jobs&htidocid=iW_kIY_AjOullS9gAAAAAA%3D%3D&fpstate=tldetail"
// );
