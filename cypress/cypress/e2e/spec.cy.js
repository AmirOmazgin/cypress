const { openNewAccount } = require("../support/functions");
const { loan } = require("../support/page_object/loan");
const { login } = require("../support/page_object/login");
const { payment } = require("../support/page_object/payment");
const { register } = require("../support/page_object/register");
const { update } = require("../support/page_object/update");

describe('Login Page Tests', () => {
  let username = Cypress.env("userName");
  let password = Cypress.env("password");

  before(() => {
    register.registerUser(username, password);
  });

  beforeEach(() => {
    cy.login(username, password);
  });

  it('Validate login', () => {
    login.validateLogin();
  });

  it('Validate payment submission', () => {
    openNewAccount();
    payment.paymentSubmission();
  });


  it('Validate loan taking', () => {
    loan.takeLoan();
  });

  it('Validate update contact information', () => {
    update.updateInfo();
  });
});
