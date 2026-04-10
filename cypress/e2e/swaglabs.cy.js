import '@shelex/cypress-allure-plugin';

import LoginPage from '../Pages/loginPage'
import ProductsPage from '../Pages/productsPage'
import CheckoutPage from '../Pages/checkoutPage'

describe('Swag Labs Tests', () => {

  const login = new LoginPage()
  const products = new ProductsPage()
  const checkout = new CheckoutPage()

  beforeEach(() => {
    cy.allure().step('Open login page');
    login.visit()

    cy.allure().step('Login with valid user');
    login.login('standard_user', 'secret_sauce')
  })

  it('Add product to cart', () => {
    cy.allure().feature('Cart');
    cy.allure().severity('normal');

    cy.allure().step('Add product to cart');
    products.addToCart('sauce-labs-backpack')

    cy.allure().step('Verify cart count');
    products.verifyCartCount()
    expect(true).to.equal(false)
  })

  it('Remove product from cart', () => {
    cy.allure().feature('Cart');
    cy.allure().severity('normal');

    cy.allure().step('Add product');
    products.addToCart('sauce-labs-backpack')

    cy.allure().step('Remove product');
    products.removeFromCart()
  })

  it('Verify products are displayed', () => {
    cy.allure().feature('Products');
    cy.allure().severity('minor');

    cy.allure().step('Check products visibility');
    products.verifyProductsVisible()
  })

  it('Login with wrong password', () => {
    cy.allure().feature('Login');
    cy.allure().severity('critical');

    cy.allure().step('Open login page');
    login.visit()

    cy.allure().step('Login with wrong password');
    login.login('standard_user', 'wrong_password')

    cy.allure().step('Verify error message');
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Complete checkout process', () => {
    cy.allure().feature('Checkout');
    cy.allure().severity('critical');

    cy.fixture('userData').then((data) => {

      cy.allure().step('Add product');
      products.addToCart('sauce-labs-backpack')

      cy.allure().step('Go to cart');
      checkout.goToCart()

      cy.allure().step('Click checkout');
      checkout.clickCheckout()

      cy.allure().step('Enter user info');
      checkout.enterInformation(data.firstName, data.lastName, data.zip)

      cy.allure().step('Continue checkout');
      checkout.clickContinue()

      cy.allure().step('Finish order');
      checkout.clickFinish()

      cy.allure().step('Verify order complete');
      checkout.verifyOrderComplete()
    })
  })

})