
const { Builder, By, until } = require('selenium-webdriver');

async function testRegistrationForm() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000');

        await driver.findElement(By.name('username'))
            .sendKeys('student1');

        await driver.findElement(By.name('email'))
            .sendKeys('student1@example.com');

        await driver.findElement(By.name('password'))
            .sendKeys('password123');

        await driver.findElement(By.css('button[type="submit"]')).click();

        await driver.wait(until.elementLocated(By.css('body')), 5000);

        let result = await driver.findElement(By.css('body')).getText();

        console.log('Test Result:', result);

        if (result.includes('Registration successful!')) {
            console.log('Test Passed');
        } else {
            console.log('Test Failed');
        }
    } finally {
        await driver.quit();
    }
}

testRegistrationForm();
