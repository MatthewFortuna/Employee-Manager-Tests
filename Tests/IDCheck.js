var ePage = {}
let IDCheck = require('../testAssets/IDCheckAssets')
let IDList = require('../testAssets/IDListAssets')

module.exports = {
    beforeEach: browser => {
        ePage = browser.page.employeeManagerPage()
        ePage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'IDCheck': browser => { 
        IDList.forEach(ID => {
            IDCheck(ePage, ID)
        })
    },
}   