///<reference types='cypress' />

describe("Login Test", () => {
  it("Failed Login", () => {
    cy.visit("/")
    cy.get('[name="email"]').type("shsh.zhao@gmail.com")
    cy.get('[name="password"]').type("wrongpwd")
    cy.get("button").should("be.disabled")
  })
})
