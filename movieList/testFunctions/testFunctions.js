const { By } = require("selenium-webdriver")

const movie = "Dune"

const addMovie = async (driver) => {
    await driver.findElement(By.xpath("//input")).sendKeys(movie + "\n")
    const newMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))

    expect(newMovie.isDisplayed()).toBeTruthy()

}

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath(`//span[text()='${movie}']`)).click()
    const crossedOff = await driver.findElements(By.className("checked"))

    expect(crossedOff.length).toBe(1)
}   


module.exports = {
    addMovie,
    crossOffMovie
}