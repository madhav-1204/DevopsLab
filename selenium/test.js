const { Builder, By } = require("selenium-webdriver");

async function example() {
    let driver = await new Builder()
        .forBrowser("chrome")
        .build();

    try {
        await driver.get("https://cmrtc.ac.in/");

        console.log("Title:", await driver.getTitle());

    } finally {
        await driver.quit();
    }
}

example();