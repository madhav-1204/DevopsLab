
const { Builder, By, Key } = require('selenium-webdriver');

async function test() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.google.com');

    await driver.findElement(By.name('q'))
        .sendKeys('Selenium WebDriver', Key.RETURN);

    await driver.sleep(50000);

    console.log('Page Title:', await driver.getTitle());

    await driver.quit();
}

test();
