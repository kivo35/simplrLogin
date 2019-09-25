import { Page } from '../pages/page'

export class Login extends Page {
  constructor () {
    super()
    this.username = "[name='email']"
    this.password = "[name='password']"
    this.loginBtn = "[value='Sign in']"
  }
  login(username, password) {
    cy.get(this.username)
      .click().clear().type(username)
    cy.get(this.password)
      .click().clear().type(password)
    cy.get(this.loginBtn).click()
    cy.wait(2000)
  }
}
export const login = new Login()