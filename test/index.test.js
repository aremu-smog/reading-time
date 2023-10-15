const puppeteer = require("puppeteer");

const EXTENSION_PATH = "../";
const EXTENSION_ID = "nbmbmdbbofmlehnmabhckabpmonajpek";

let browser;

beforeEach(async () => {
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

test("popup renders correctly", async function () {
  const page = await browser.newPage();
  await page.goto(`chrome-extension://${EXTENSION_ID}/popup.html`);

  const textareaInput = await page.$("#textarea");

  expect(textareaInput.value).toEqual("");
});
