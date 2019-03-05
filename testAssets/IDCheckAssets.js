module.exports = (ePage, {Employee, employeeNumber, IDSelector, ExpectedID} ) => {
    ePage.click(Employee)
    ePage.click(employeeNumber)
    ePage.expect.element(IDSelector).text.to.contain(ExpectedID).before(5000)
}