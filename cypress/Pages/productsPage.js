class ProductsPage {
 addToCart(productName) {
  cy.get(`[data-test="add-to-cart-${productName}"]`).click()
}

  removeFromCart() {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
  }

  verifyCartCount() {
    cy.get('.shopping_cart_badge').should('contain', '1')
  }

  verifyProductsVisible() {
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  }
}

export default ProductsPage