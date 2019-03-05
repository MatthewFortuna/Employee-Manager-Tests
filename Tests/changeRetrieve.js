var ePage = {}
let clickByText = require('../testAssets/changeRetrieveAssets')
module.exports = {
    beforeEach: browser => {
        ePage = browser.page.employeeManagerPage()
        ePage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Change Retrieve': browser => { 
        clickByText(ePage, "Teresa Osborne")
        ePage
        .clearValue('@nameEntry')
        .setValue('@nameEntry', 'Jenny Walker')
        .clearValue('@phoneEntry')
        .setValue('@phoneEntry', '7431307734')
        .clearValue('@titleEntry')
        .setValue('@titleEntry', 'Speaker of Words')
        .click('@save')
        clickByText(ePage, "Bernice Ortiz")
        clickByText(ePage, "Jenny Walker")
        ePage.expect.element('@nameEntry').value.to.equal('Jenny Walker').before(5000)
        ePage.expect.element('@phoneEntry').value.to.equal('7431307734').before(5000)
        ePage.expect.element('@titleEntry').value.to.equal('Speaker of Words').before(5000)
    },
}   