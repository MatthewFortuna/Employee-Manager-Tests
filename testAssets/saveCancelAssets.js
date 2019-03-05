module.exports = (ePage, testEmployee, returnEmployee, entryField, fieldValue, button, fieldValue2) => {
    ePage
    .click(testEmployee)
    .clearValue(entryField)
    .setValue(entryField, fieldValue)
    .click(button)
    .click(returnEmployee)
    .click(testEmployee)
    ePage.expect.element(entryField).value.to.equal(fieldValue2).before(5000)
 }