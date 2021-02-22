import { chromium } from "playwright";
describe('Launch Browser', () => {

    test('Open Orange HRM', async () => {
        const browser = await chromium.launch({
            headless: true
        })
        const context = await browser.newContext({ recordVideo: { dir: 'results/videos/',size: { width: 1920, height: 1080 } } });
        const page = await context.newPage();
        await page.goto('https://opensource-demo.orangehrmlive.com/');
        await page.fill("input[id='txtUsername']", 'Admin');
        await page.fill("input[id='txtPassword']", 'admin123');
        await page.click("input[id='btnLogin']")
        await browser.close()
        //await context.close()
    })

})