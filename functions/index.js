const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

exports.indeedScraper = functions
  .runWith({ memory: "1GB" })
  .https.onCall(async (req, context) => {
    const link = req.link;
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
    };
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
    );
    await page.goto(req.link);
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
  .region("us-central1")
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
    };
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
    );

    await page.goto(req.link);
    await page.waitForSelector(".topcard__title");
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
exports.monsterScraper = functions
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
    };
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
    );
    await page.goto(req.link);
    await page.waitForSelector(".headerstyle__JobViewHeaderTitle-sc-1ijq9nh-5");

    const result = await page.evaluate(() => {
      let title = document.querySelector(
        ".headerstyle__JobViewHeaderTitle-sc-1ijq9nh-5"
      ).innerHTML;
      let company = document.querySelector(
        ".headerstyle__JobViewHeaderCompany-sc-1ijq9nh-6"
      ).innerHTML;
      let place = document.querySelector(
        ".headerstyle__JobViewHeaderLocation-sc-1ijq9nh-4"
      ).innerHTML;
      let desc = document.querySelector(
        ".descriptionstyles__DescriptionBody-sc-13ve12b-4"
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

exports.zipRecruiterScraper = functions
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
    };
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
    );
    await page.goto(req.link);
    await page.waitForSelector(".job_title");
    const result = await page.evaluate(() => {
      let title = document.querySelector(".job_title").innerText;
      let company = document.querySelector(
        ".job_sub>.sub_item:nth-child(1)"
      ).innerHTML;
      let place = document.querySelector(
        ".job_sub>.sub_item:nth-child(2)"
      ).innerHTML;
      let desc = document.querySelector(".job_description").innerHTML;
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

exports.googleScraper = functions
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
    };
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
    );

    await page.goto(req.link);

    await page.waitForSelector(".KLsYvd");

    const result = await page.evaluate(() => {
      let title = document.querySelector(".KLsYvd").innerHTML;
      let company = document.querySelector(".nJlQNd ").innerHTML;
      let place = document.querySelectorAll(".sMzDkb")[1].innerHTML;
      let desc = document.querySelector(".HBvzbc").innerHTML;
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
