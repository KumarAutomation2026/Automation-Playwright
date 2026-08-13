const {test} = require('playwright@test');

    test('My first Playwright tesst', async function ({ browser }) {
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto("https://playwright.dev/");
            /*Expect a title "to contain" a substring.*/
            await expect(page).toHaveTitle(/Playwright/);

        })