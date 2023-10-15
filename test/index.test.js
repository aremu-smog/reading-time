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

  const page = await browser.newPage();
  await page.goto(`chrome-extension://${EXTENSION_ID}/popup.html`);

});

afterEach(async function () {
  // Close the browser
  await browser.close();
  browser = undefined;
});

test("textarea is empty onload", async function () {

  const textareaInput = await page.$("#textarea");

  const textareaInputValue = await page.evaluate(e => el.value, textareaInput)

  expect(textareaInputValue).toBe("");
});

test("button exists on page ", async function() {
  const submitButton = await page.$("input[type='submit']");

  expect(submitButton).not.toBe(undefined);
})