class loginPage {
  elements = {
    emailInput: () => cy.get('[name="email"]'),
    passwordInput: () => cy.get('[name="password"]'),

    msgWrongPwd: () => cy.get("li"),
    loginBtn: () => cy.get("button"),
    forgotPwd: () => cy.get("[href='/auth/forgot-password']"),
    terms: () => cy.wait(2000).get(".custom-container .p-t-15:last-child"),
  }

  typeEmail(email) {
    this.elements.emailInput().type(email)
  }

  clickEmail() {
    this.elements.emailInput().click()
  }

  typePassword(password) {
    this.elements.passwordInput().type(password)
  }
  clearPassword() {
    this.elements.passwordInput().clear()
  }

  clickLogin() {
    this.elements.loginBtn().click()
  }

  clickForgotpwd() {
    this.elements.forgotPwd().click()
  }
  clickTerms() {
    this.elements.terms().click()
  }
  getMsgWrongPwd() {
    return this.elements.msgWrongPwd()
  }
  getBtn() {
    return this.elements.loginBtn()
  }
}

module.exports = new loginPage()
