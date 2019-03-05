var ePage = {}
let buttonTest = require('../testAssets/saveCancelAssets')


module.exports = {
    beforeEach: browser => {
        ePage = browser.page.employeeManagerPage()
        ePage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Save': browser => { 
        buttonTest(ePage, '@employee4', '@employee1', '@nameEntry', 'JoeJoe Banana', '@save', 'JoeJoe Banana')
        buttonTest(ePage, '@employee4', '@employee1', '@phoneEntry', '4804567986', '@save', '4804567986')
        buttonTest(ePage, '@employee4', '@employee1', '@titleEntry', 'Digger of Ditches', '@save', 'Digger of Ditches')
    },
    'Cancel': browser => { 
        buttonTest(ePage, '@employee4', '@employee1', '@nameEntry', 'JoeJoe Banana', '@cancel', 'Teresa Osborne')
        buttonTest(ePage, '@employee4', '@employee1', '@phoneEntry', '4804567986', '@cancel', '3841238745')
        buttonTest(ePage, '@employee4', '@employee1', '@titleEntry', 'Digger of Ditches', '@cancel', 'Director of Engineering')

        


    },
}