class CheckoutPage {

  goToCart() {
    cy.get('.shopping_cart_link').click()
  }

  clickCheckout() {
    cy.get('[data-test="checkout"]').click()
  }

  enterInformation(firstName, lastName, zip) {
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(zip)
  }

  clickContinue() {
    cy.get('[data-test="continue"]').click()
  }

  clickFinish() {
    cy.get('[data-test="finish"]').click()
  }

  verifyOrderComplete() {
   cy.get('.complete-header').should('contain', 'Thank you for your order!')
  }

}

export default CheckoutPage