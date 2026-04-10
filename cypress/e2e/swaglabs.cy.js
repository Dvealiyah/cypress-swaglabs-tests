import LoginPage from '../Pages/loginPage'
import ProductsPage from '../Pages/productsPage'
import CheckoutPage from '../Pages/checkoutPage'

describe('Swag Labs Tests', () => {

  const login = new LoginPage()
  const products = new ProductsPage()
  const checkout = new CheckoutPage()

  beforeEach(() => {
    login.visit()
    login.login('standard_user', 'secret_sauce')
  })

  it('Add product to cart', () => {
    products.addToCart('sauce-labs-backpack')
    products.verifyCartCount()
  })

  it('Remove product from cart', () => {
    products.addToCart('sauce-labs-backpack')
    products.removeFromCart()
  })

  it('Verify products are displayed', () => {
    products.verifyProductsVisible()
  })

  it('Login with wrong password', () => {
    login.visit()
    login.login('standard_user', 'wrong_password')

    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Complete checkout process', () => {

    cy.fixture('userData').then((data) => {

      products.addToCart('sauce-labs-backpack')

      checkout.goToCart()
      checkout.clickCheckout()

      checkout.enterInformation(data.firstName, data.lastName, data.zip)
      checkout.clickContinue()
      checkout.clickFinish()

      checkout.verifyOrderComplete()

    })

  })

})