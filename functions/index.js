// need firebase creds first to upload.
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// currently blocked. must find workarounds
/*
exports.angelScraper = functions
  .runWith({ memory: "1GB" })
  .https.onCall(async (req, context) => {
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
      headless: false,
      ignoreHTTPSErrors: true,
      // userDataDir: "./tmp",
    };
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36"
    );

    await page.goto(req.link);
    const html = await page.content();
    console.log(html);
    await page.waitForSelector("[class^='styles_characteristic']");
    //await page.waitForSelector(".topcard__flavor-row");
    //await page.waitForSelector(".description__text");
    const result = await page.evaluate(() => {
      let title = document.querySelector(
        "h4.text-slate-900,  h1.text-4xl"
      ).innerHTML;
      let company = document.querySelectorAll(
        "[class^='styles_detail'] > dd, h3 > a"
      ).innerHTML;
      let place = document.querySelector(
        "[class^='styles_characteristic']:first-child > dd"
      ).textContent;
      let desc = document.querySelector(
        "[class^='styles_description']"
      ).innerHTML;
      desc = desc.replace(/<br>|<br\/>|<br \/>/gi, "\n");
      desc = desc.replace(/(<([^>]+)>)/gi, "").trim();
      company = company.replace("[\\n]", "").trim();
      place = place.replace("[\\n]", "").trim();
      return {
        title: title,
        company: company,
        place: place,
        description: desc,
      };
    });
    console.log(result);
    await browser.close();
    return { data: result };
  });
*/
exports.indeedScraper = functions
  .runWith({ memory: "1GB" })
  .https.onCall(async (req, context) => {
    // if (!req.link.includes("www.google.com/search?q=google+jobs")) {
    //   return req;
    // }
    // if (req.link.includes("www.google.com/search?q=google+jobs")) {
    //   return await google(req.link);
    // }
    // if (req.link.includes("www.linkedin.com")){
    //   return await linkedin(req.link)
    // }
    const link = req.link
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
      // userDataDir: "./tmp",
    };
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
    );
    await page.goto(req.link);
    const html = await page.content();
    console.log(html);
    await page.waitForSelector(".jobsearch-JobInfoHeader-title");
    const result = await page.evaluate(() => {
      let title = document.querySelector(
        ".jobsearch-JobInfoHeader-title"
      ).innerHTML;
      let company = document.querySelector(
        ".jobsearch-JobInfoHeader-subtitle :nth-child(2)"
      ).textContent;
      let place = document.querySelector(
        ".jobsearch-JobInfoHeader-subtitle > div:nth-child(2) > div"
      ).innerHTML;
      let desc = document.querySelector("#jobDescriptionText").innerHTML;
      desc = desc.replace(/<br>|<br\/>|<br \/>/gi, "\n");
      desc = desc.replace(/(<([^>]+)>)/gi, "").trim();
      company = company.replace("[\\n]", "").trim();
      place = place.replace("[\\n]", "").trim();
      return {
        title: title,
        company: company,
        place: place,
        description: desc,
      };
    });
    console.log(result);
    await browser.close();
    return { data: result };
  });

exports.linkedInScraper = functions
  .runWith({ memory: "1GB" })
  .https.onCall(async (req, context) => {
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
      // userDataDir: "./tmp",
    };
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
    );
    //const split = link.split("=");
    //console.log(2, split);
    //const link_id = split[split.length - 2].split("%")[0] + "==";
    // const parms = { id: link_id };

    //await page.goto(link, { waitUntil: "networkidle0" });
    // const html = await page.evaluate(
    //   () => document.querySelector("*").outerHTML
    // );
    //let data = await page.evaluate((link_id) => {
    await page.goto(req.link);
    await page.waitForSelector(".topcard__title");
    //await page.waitForSelector(".topcard__flavor-row");
    //await page.waitForSelector(".description__text");
    const result = await page.evaluate(() => {
      let title = document.querySelector(".topcard__title").innerHTML;
      let company = document.querySelector(".topcard__org-name-link").innerHTML;
      let place = document.querySelector(
        ".topcard__flavor--bullet"
      ).textContent;
      let desc = document.querySelector(
        ".show-more-less-html__markup"
      ).innerHTML;
      desc = desc.replace(/<br>|<br\/>|<br \/>/gi, "\n");
      desc = desc.replace(/(<([^>]+)>)/gi, "").trim();
      company = company.replace("[\\n]", "").trim();
      place = place.replace("[\\n]", "").trim();
      return {
        title: title,
        company: company,
        place: place,
        description: desc,
      };
    });
    console.log(result);
    await browser.close();
    return { data: result };
  });

async function linkedin(link){
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
    // userDataDir: "./tmp",
  };

  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.goto(link, { waitUntil: "networkidle0" });
  let data = await page.evaluate((link_id) => {
    const title = document.querySelector('h1.top-card-layout__title.topcard__title').innerText
    const company = document.querySelector('a.topcard__org-name-link.topcard__flavor--black-link').innerText
    const place = document.querySelector('span.topcard__flavor.topcard__flavor--bullet').innerText;
    let desc = document.querySelector('div.show-more-less-html__markup').innerText;
    desc = desc.replace(/(<.*>)/g, "");

    return { title, company, place, desc };
  }, link);

  await browser.close();
  return { data: data };
}

async function google(link) {
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
    // userDataDir: "./tmp",
  };

  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  const split = link.split("=");
  console.log("link", link);
  const link_id = split[split.length - 2].split("%")[0] + "==";
  console.log("link_id", link_id);
  // const parms = { id: link_id };

  await page.goto(link, { waitUntil: "networkidle0" });
  // const html = await page.evaluate(
  //   () => document.querySelector("*").outerHTML
  // );
  let data = await page.evaluate((link_id) => {
    const parent = document.querySelector(
      "[data-encoded-doc-id=" + "'" + link_id + "'" + "]"
    );
    const title = parent.querySelector("h2.KLsYvd").innerHTML;
    const company = parent.querySelector("div.sMzDkb").innerHTML;
    // const place = parent.querySelectorAll("div.sMzDkb")[1].innerHTML;
    // let desc = parent.querySelector("span.HBvzbc").innerHTML;
    // desc = desc.replace(/(<.*>)/g, "");

    return { title };
  }, link_id);
  console.log(3, "hel");
  await browser.close();
  return { data: data };
}
