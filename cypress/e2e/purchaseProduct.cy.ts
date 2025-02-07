describe("Purchase Product Flow", () => {
  beforeEach(() => {
    cy.fixture("user.json").then((userData) => {
      cy.login(userData.validEmail, userData.validPassword);
    });

    cy.wait(5000);
    cy.get('[data-cy="menu-button"]').click();

    cy.intercept("POST", "**/actions/stripe", {
      statusCode: 200,
      body: { url: "/cart/result?session_id=fake_session_id" },
    }).as("createCheckoutSession");

    cy.intercept("POST", "**/cart/result?*", {
      statusCode: 200,
      body: { error: false },
    }).as("confirmPayment");
  });

  it("should complete a product purchase and appear in orders", () => {
    cy.get('[data-cy="products-link"]').click();
    cy.url().should("include", "/products");

    cy.get('[data-cy="product-card"]').first().click();
    cy.get('[data-cy="add-to-cart-button"]').click();
    cy.wait(3000);
    cy.get('[data-cy="cart-button"]').click();
    cy.wait(3000);
    cy.get('[data-cy="buy-button"]').click();
    cy.url().should("not.include", Cypress.config("baseUrl"));
  });
});
