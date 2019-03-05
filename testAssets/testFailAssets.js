module.exports = (ePage, testEmployee, returnEmployee, nameEntry, phoneEntry, titleEntry, nameValue, nameValue2, phoneValue, phoneValue2, titleValue, titleValue2, save, nameEntry2, phoneEntry2, titleEntry2) => {
    ePage
    .click(testEmployee)
    .clearValue(nameEntry)
    .clearValue(phoneEntry)
    .clearValue(titleEntry)
    .setValue(nameEntry, nameValue)
    .setValue(phoneEntry, phoneValue)
    .setValue(titleEntry, titleValue)
    .click(save)
    .click(returnEmployee)
    .click(testEmployee)
    ePage.expect.element(nameEntry2).value.to.equal(nameValue2).before(5000)
    ePage.expect.element(phoneEntry2).value.to.equal(phoneValue2).before(5000)
    ePage.expect.element(titleEntry2).value.to.equal(titleValue2).before(5000)
 }