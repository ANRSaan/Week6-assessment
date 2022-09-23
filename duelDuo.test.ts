
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    await driver.sleep(1000)

    driver.quit()
})

test('Title shows up when page loads', async () => {
    await driver.sleep(2000)
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

// THIS TEST SHOULD FAIL, SINCE IT'S ONE OF THE BROKEN ELEMENTS IN THE CODE PROVIDED**
// It does work when the code is fixed (changing botsArr to bots in the app.get('/api/robots' call in server.js)
test('"See All Bots" button displays bots', async () => {
    await driver.sleep(2000)

    await driver.findElement(By.id('see-all')).click()
    await driver.sleep(2000)

    const div = await driver.findElement(By.id('all-bots'))
    const displayed = await div.isDisplayed()

    expect(displayed).toBe(true)
})

test('"Add to Duo" button displays a bot', async () => {
    await driver.sleep(2000)

    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(1000)


    const div = await driver.findElement(By.id('player-duo'))
    const displayed = await div.isDisplayed()

    expect(displayed).toBe(true)
})