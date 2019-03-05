var ePage = {}
let createEmployee = require('../testAssets/createEmployeeAssets')


module.exports = {
    beforeEach: browser => {
        ePage = browser.page.employeeManagerPage()
        ePage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Create Employee': browser => { 
        createEmployee(ePage, '@employee11', 'Jenny Walker', '7431307734', 'Speaker of Words', '@employee10', 'ID: 11')
        createEmployee(ePage, '@employee12', 'Jenny Walker', '7431307734', 'Speaker of Words', '@employee11', 'ID: 12')
        createEmployee(ePage, '@employee13', 'Jenny Walker', '7431307734', 'Speaker of Words', '@employee12', 'ID: 13')
        createEmployee(ePage, '@employee14', 'Jenny Walker', '7431307734', 'Speaker of Words', '@employee13', 'ID: 14')
        createEmployee(ePage, '@employee15', 'Jenny Walker', '7431307734', 'Speaker of Words', '@employee14', 'ID: 15')
        createEmployee(ePage, '@employee16', 'Jenny Walker', '7431307734', 'Speaker of Words', '@employee15', 'ID: 16')
        createEmployee(ePage, '@employee17', 'Jenny Walker', '7431307734', 'Speaker of Words', '@employee16', 'ID: 17')
        createEmployee(ePage, '@employee18', 'Jenny Walker', '7431307734', 'Speaker of Words', '@employee17', 'ID: 18')
        createEmployee(ePage, '@employee19', 'Jenny Walker', '7431307734', 'Speaker of Words', '@employee18', 'ID: 19')
        createEmployee(ePage, '@employee20', 'Jenny Walker', '7431307734', 'Speaker of Words', '@employee19', 'ID: 20')
    },
}   