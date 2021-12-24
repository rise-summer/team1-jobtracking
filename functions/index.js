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
    var link = req.link;
    console.log(1, req);

    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    const split = link.split("=");
    console.log(2, split);
    const link_id = split[split.length - 2].split("%")[0] + "==";
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
      const place = parent.querySelectorAll("div.sMzDkb")[1].innerHTML;
      let desc = parent.querySelector("span.HBvzbc").innerHTML;
      desc = desc.replace(/(<.*>)/g, "");

      return { title, company, place, desc };
    }, link_id);
    console.log(3, "hel");
    await browser.close();
    return { data: data };
  });
