module.exports = (ePage, employeeSelect, nameValue, numberValue, titleValue, employeeTransition, ID) => {
    ePage
    .click('@addEmployee')
    .click(employeeSelect)
    .clearValue('@nameEntry')
    .setValue('@nameEntry', nameValue)
    .clearValue('@phoneEntry')
    .setValue('@phoneEntry', numberValue)
    .clearValue('@titleEntry')
    .setValue('@titleEntry', titleValue)
    .click('@save')
    .click(employeeTransition)
    .click(employeeSelect)
    ePage.expect.element('@nameEntry').value.to.equal(nameValue).before(5000)
    ePage.expect.element('@phoneEntry').value.to.equal(numberValue).before(5000)
    ePage.expect.element('@titleEntry').value.to.equal(titleValue).before(5000)
    ePage.expect.element('@ID').text.to.contain(ID).before(5000)
 }