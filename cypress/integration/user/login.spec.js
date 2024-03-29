import {login} from '../../pages/login' 
import {url} from '../../fixtures/url'
import { user } from '../../fixtures/user/types'

describe('User sign in', () => {
  beforeEach(() => {
    login.navigate(url.loginPage)
  })

  it.skip('Verify that user can login to the app', () => {
    login.login(user.customer.email, user.customer.password)
    login.verifyUrlNotContains(url.loginPage)
  })
  it('Verify that invalid credentials message is shown', () => {
    login.login(user.customer.email, user.customer.password)
    login.verifyItemVisibleAndContainsText(login.invalidCredentialsMsg, 'Invalid username/password.')
  })
})
