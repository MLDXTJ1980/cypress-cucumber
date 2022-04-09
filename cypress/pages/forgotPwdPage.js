class forgotPwdPage {
  elements = {
    emailInput: () => cy.get("input"),

    restoreBtn: () => cy.get("button"),
  }

  typeEmail(email) {
    this.elements.emailInput().type(email)
  }

  clickRestoreBtn() {
    this.elements.restoreBtn().click()
  }
}

module.exports = new forgotPwdPage()
