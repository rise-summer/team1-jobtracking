import axios from "axios";
import cheerio from "cheerio";

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
    .text();
  console.log(title, company, location);
}

async function glassdoor(link) {
  const response = await axios.get(link);
  const $ = await cheerio.load(response.data);
  const title = $("div.css-16nw49e").text()
  const company = $("div.css-17x2pwl").text()
  const location = $("div.css-1v5elnn").text()
  console.log(title, company, location);
}

async function scraper(link) {
  switch (true) {
    case link.includes("indeed"):
      indeed(link);
      break;
    case link.includes("glassdoor"):
      glassdoor(link);
      break;
    default:
      console.log("sad");
  }
}

scraper("https://www.glassdoor.com/partner/jobListing.htm?pos=102&ao=1131390&s=149&guid=000001775b1deceda447b637b77e9163&src=GD_JOB_AD&t=SRFJ&vt=w&cs=1_e0fed718&cb=1612141425414&jobListingId=3601132350");


