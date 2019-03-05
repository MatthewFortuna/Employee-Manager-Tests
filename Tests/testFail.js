var ePage = {}
let failTest = require('../testAssets/testFailAssets')
module.exports = {
    beforeEach: browser => {
        ePage = browser.page.employeeManagerPage()
        ePage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Under Fill All': browser => { 
        failTest(ePage, '@employee4', '@employee1', '@nameEntry', '@phoneEntry', '@titleEntry', '', 'Teresa Osborne', '0567', '3841238745', '', 'Director of Engineering', '@save', '@nameEntry', '@phoneEntry', '@titleEntry')

    },
    'Under Fill Sequential': browser => { 
        failTest(ePage, '@employee4', '@employee1', '@nameEntry', '@nameEntry', '@nameEntry', '', 'Teresa Osborne', '', '3841238745', '', 'Director of Engineering', '@save', '@nameEntry', '@phoneEntry', '@titleEntry')
        failTest(ePage, '@employee4', '@employee1', '@phoneEntry', '@phoneEntry', '@phoneEntry', '', 'Teresa Osborne', '253', '3841238745', '', 'Director of Engineering', '@save', '@nameEntry', '@phoneEntry', '@titleEntry')
        failTest(ePage, '@employee4', '@employee1', '@titleEntry', '@titleEntry', '@titleEntry', '', 'Teresa Osborne', '', '3841238745', '', 'Director of Engineering', '@save', '@nameEntry', '@phoneEntry', '@titleEntry')
    },
    'Over Fill All': browser => { 
        ePage
        failTest(ePage, '@employee4', '@employee1', '@nameEntry', '@phoneEntry', '@titleEntry', 'al;skdjfalskdjfl;aksdjf;laksjdf;lkajsdf;lajsdf;laksjdf;lkajsdf;lkajsdf;lkads', 'Teresa Osborne', '79324058237405834098573049857240938572039485', '3841238745', 'asdjfiulasdbnfluiausndfliuasdnflausdnfklausdnflkausdfnaklsdfuandsflkasudnfaklsudfnalksdf', 'Director of Engineering', '@save', '@nameEntry', '@phoneEntry', '@titleEntry')
    },
    'Over Fill Sequential': browser => { 
        failTest(ePage, '@employee4', '@employee1', '@nameEntry', '@nameEntry', '@nameEntry', 'al;skdjfalskdjfl;aksdjf;laksjdf;lkajsdf;lajsdf;laksjdf;lkajsdf;lkajsdf;lkads', 'Teresa Osborne', '', '3841238745', '', 'Director of Engineering', '@save', '@nameEntry', '@phoneEntry', '@titleEntry')
        failTest(ePage, '@employee4', '@employee1', '@phoneEntry', '@phoneEntry', '@phoneEntry', '', 'Teresa Osborne', '79324058237405834098573049857240938572039485', '3841238745', '', 'Director of Engineering', '@save', '@nameEntry', '@phoneEntry', '@titleEntry')
        failTest(ePage, '@employee4', '@employee1', '@titleEntry', '@titleEntry', '@titleEntry', '', 'Teresa Osborne', '', '3841238745', 'asdjfiulasdbnfluiausndfliuasdnflausdnfklausdnflkausdfnaklsdfuandsflkasudnfaklsudfnalksdf', 'Director of Engineering', '@save', '@nameEntry', '@phoneEntry', '@titleEntry')
    },
}   