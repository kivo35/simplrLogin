/* eslint-disable no-undef */
export class Page {
  constructor () {
    // common elements will go here
  }
  navigate (url) {
    cy.visit(url)
    cy.wait(2000)
  }
  verifyUrlNotContains (url) {
    cy.url().should('not.contain', url)
  }
}
