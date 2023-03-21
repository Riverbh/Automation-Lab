const { Builder, Capabilities } = require("selenium-webdriver");
require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addMovie, crossOffMovie } = require("../testFunctions/testFunctions")

beforeAll(async () => {
    await driver.get("http://127.0.0.1:5500/movieList/index.html")
})

afterAll(async () => {
    await driver.quit()
})

test("adds a movie", async () => {
    await addMovie(driver)
})

test("cross off list movie", async () => {
    await crossOffMovie(driver)
})