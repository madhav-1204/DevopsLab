
const { Builder, By, until } = require('selenium-webdriver');

async function test() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://127.0.0.1:8081');

    await driver.findElement(By.id('username')).sendKeys('student1');
    await driver.findElement(By.id('email')).sendKeys('student1@example.com');
    await driver.findElement(By.id('password')).sendKeys('password123');

    await driver.findElement(By.css('button[type="submit"]')).click();

    let message = await driver.wait(
        until.elementLocated(By.id('message')),
        5000
    );

    console.log('Test Result:', await message.getText());
    console.log('Test Passed');

    await driver.quit();
}

test();
