describe("Create, Modify and Delete Product", () => {
  const productName = "Test Product";

  beforeEach(() => {
    cy.fixture("user.json").then((userData) => {
      cy.login(userData.validEmail, userData.validPassword);
    });
    cy.wait(5000);
    cy.get('[data-cy="menu-button"]').click();
  });

  it("creates product successfully", () => {
    cy.get('[data-cy="create-product-link"]').click();

    cy.get('[data-cy="product-name-input-en"]').type(productName);
    cy.get('[data-cy="product-name-input-ka"]').type(productName);
    cy.get('[data-cy="product-price-input"]').type("45.99");
    cy.get('[data-cy="product-description-input-en"]').type(
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    );
    cy.get('[data-cy="product-description-input-ka"]').type(
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    );

    cy.get('[data-cy="product-category-select"]').select("necklaces");
    cy.get('[data-cy="product-image-input"]').selectFile(
      "cypress/fixtures/image.jpg",
      { force: true }
    );

    cy.get('[data-cy="create-product-button"]').click({ force: true });
    cy.wait(3000);
    cy.get('[data-cy="product-creation-success-message"]').should("be.visible");
  });

  it("edits product successfully", () => {
    cy.get('[data-cy="account-link"]').click();
    cy.get('[data-cy="my-listings-link"]').click({ force: true });

    cy.get('[data-cy="product-card"]')
      .contains(productName)
      .parents('[data-cy="product-card"]')
      .within(() => {
        cy.get('[data-cy="edit-product-button"]').click();
      });

    cy.get('[data-cy="product-description-input"]')
      .clear()
      .type("Elegant silver ring design");

    cy.get('[data-cy="edit-product-button"]').click({ force: true });
    cy.wait(3000);
    cy.get('[data-cy="product-description-input"]').should(
      "have.value",
      "Elegant silver ring design"
    );
  });

  it("deletes product successfully", () => {
    cy.get('[data-cy="account-link"]').click();
    cy.get('[data-cy="my-listings-link"]').click({ force: true });

    cy.get('[data-cy="product-card"]')
      .contains(productName)
      .parents('[data-cy="product-card"]')
      .within(() => {
        cy.get('[data-cy="delete-product-button"]').click();
      });

    cy.get('[data-cy="delete-button"]').click();

    cy.wait(3000);

    cy.get('[data-cy="product-card"]')
      .contains(productName)
      .should("not.exist");
  });
});
