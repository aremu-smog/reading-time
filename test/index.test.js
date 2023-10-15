const puppeteer = require("puppeteer");

const EXTENSION_PATH = "./";
const EXTENSION_ID = "nbmbmdbbofmlehnmabhckabpmonajpek";

let browser;

beforeEach(async function () {
  // Launch the browser
  browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${EXTENSION_PATH}`,
      `--load-extension=${EXTENSION_PATH}`,
    ],
  });
});

afterEach(async function () {
  // Close the browser
  await browser.close();
  browser = undefined;
});
