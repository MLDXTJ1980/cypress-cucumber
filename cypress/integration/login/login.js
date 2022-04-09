import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
const loginPage = require("../../pages/loginPage")
const forgotPwdPage = require("../../pages/forgotPwdPage")

// Failed Login

Given("I open the login page", () => {
  cy.visit("/")
})

When("I enter the email {string}", (email) => {
  loginPage.typeEmail(email)
})
And(
  "I enter a wrong password {string} which meets the requirements",
  (password) => {
    loginPage.typePassword(password)
  }
)

And("I click on the login button", () => {
  loginPage.clickLogin()
})

Then("The message {string} will be displayed", (errorMsg) => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  loginPage.getMsgWrongPwd().should((items) => {
    // but no worries, we will retry until these pass or until timeout
    expect(items).to.have.length(2)

    expect(items[1]).to.have.text(errorMsg)
  })

  When("I clear the password field", () => {
    loginPage.clearPassword()
  })
  And("I enter a password {string} without capital symbol", (password) => {
    loginPage.typePassword(password)
  })

  And("I click input email field", () => {
    loginPage.clickEmail()
  })
  Then("The message {string} will be displayed", (errorMsg) => {
    loginPage.getMsgWrongPwd().should((items) => {
      expect(items[1]).to.have.text(errorMsg)
    })
  })

  When("I clear the password field", () => {
    loginPage.clearPassword()
  })
  And("I enter a password {string} less than 8 characters", (password) => {
    loginPage.typePassword(password)
  })

  And("I click input email field", () => {
    loginPage.clickEmail()
  })
  Then("The message {string} will be displayed", (errorMsg) => {
    loginPage.getMsgWrongPwd().should((items) => {
      expect(items[1]).to.have.text(errorMsg)
    })
  })
  // forgot password
  Given("I open the login page", () => {
    cy.visit("/")
  })

  When("I click on the forgot password button", () => {
    loginPage.clickForgotpwd()
  })

  And("I go to the forgot password page", () => {
    cy.location("pathname", { timeout: 1000 }).should(
      "include",
      "/forgot-password"
    )
  })
  When("I fill in Email with {string}", (email) => {
    forgotPwdPage.typeEmail(email)
  })
  And("I press Restore button", () => {
    forgotPwdPage.clickRestoreBtn()
  })
  Then("Password is restored", () => {
    console.log("Password is restored")
  })

  // visit Terms and Conditions
  Given("I open the login page", () => {
    cy.visit("/")
  })
  When("I click on the link Our Terms  and  Conditions", () => {
    loginPage.clickTerms()
  })

  And("I go to the Terms and Conditions page", () => {
    cy.location("pathname", { timeout: 2000 }).should("include", "/conditions")
  })
})
