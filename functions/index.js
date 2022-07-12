const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const puppeteer = require("puppeteer");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     functions.logger.info("Hello logs!", {structuredData: true});
//     response.send("Hello from Firebase!");
// });

exports.scrape = functions
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
  
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.goto(link, { waitUntil: "networkidle0" });
    // let data = await page.evaluate((link_id) => {
    //   const title = document.querySelector('h1.top-card-layout__title.topcard__title').innerHTML
    //   // const company = document.querySelector('a.topcard__org-name-link.topcard__flavor--black-link').innerHTML
    //   // const place = document.querySelector('span.topcard__flavor.topcard__flavor--bullet').innerHTML;
    //   // let desc = document.querySelector('div.show-more-less-html__markup').innerHTML;
    //   // desc = desc.replace(/(<.*>)/g, "");
  
    //   return { title};
    // }, link);
  
    await browser.close();
    return { data: link };
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
