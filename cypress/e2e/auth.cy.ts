describe("Auth", () => {
  let email: string;
  let password: string;
  let invalidPassword: string;
  beforeEach(() => {
    cy.visit(`${Cypress.config("baseUrl")}/en/sign-in`);
    cy.fixture("user.json").then((userData) => {
      email = userData.validEmail;
      password = userData.validPassword;
      invalidPassword = userData.invalidPassword;
    });
  });

  it("signs up successfully", () => {
    cy.get('[data-cy="sign-up-link"]').click();
    cy.get('[data-cy="signup-email-input"]').type(
      "elene.tskitishvili504@gmail.com"
    );
    cy.get('[data-cy="signup-password-input"]').type(password);
    cy.get('[data-cy="sign-up-button"]').click();
    cy.get('[data-cy="sign-in-link"]').click();
    cy.visit(`${Cypress.config("baseUrl")}/en/sign-in`);
    cy.get('[data-cy="email-input"]').type(email);
    cy.get('[data-cy="password-input"]').type(password);
    cy.get('[data-cy="sign-in-button"]').click();
    cy.get('[data-cy="sign-in-link"]').should("not.exist");
  });

  it("Logs in successfully", () => {
    cy.login(email, password);
    cy.get('[data-cy="sign-in-link"]').should("not.exist");
  });

  it("Fails to log in", () => {
    cy.login(email, invalidPassword);
    cy.url().should("not.eq", `${Cypress.config("baseUrl")}/en`);
  });

  it("Logs out successfully", () => {
    cy.login(email, password);
    cy.wait(5000);
    cy.get('[data-cy="menu-button"]').click();
    cy.get('[data-cy="account-link"]').click();
    cy.get('[data-cy="log-out-button"]').click({ force: true });
    cy.url().should("match", /\/(en|ka)\/sign-in/);
  });
});
