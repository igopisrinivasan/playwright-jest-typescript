import { chromium } from "playwright";
describe('Launch Browser', () => {

    test('Open Orange HRM', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://opensource-demo.orangehrmlive.com/');
        await page.fill("input[id='txtUsername']", 'Admin');
        await page.fill("input[id='txtPassword']", 'admin123');
        await page.click("input[id='btnLogin']")
        await browser.close()
    })

})