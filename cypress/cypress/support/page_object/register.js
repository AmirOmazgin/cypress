export class Register {
    constructor() {
      this.registerButton = 'Register';
      this.firstNameInput = '[name="customer.firstName"]';
      this.lastNameInput = '[name="customer.lastName"]';
      this.addressStreetInput = '[name="customer.address.street"]';
      this.addressCityInput = '[name="customer.address.city"]';
      this.addressStateInput = '[name="customer.address.state"]';
      this.zipCodeInput = '[name="customer.address.zipCode"]';
      this.phoneNumberInput = '[name="customer.phoneNumber"]';
      this.ssnInput = '#customer\\.ssn';
      this.usernameInput = '[name="customer.username"]';
      this.passwordInput = '[name="customer.password"]';
      this.repeatedPasswordInput = '[name="repeatedPassword"]';
      this.bodyPanel = '#bodyPanel';
      this.logoutButton = 'Log Out';
    }
  
    registerUser(username, password) {
      cy.visit('/');
      cy.contains(this.registerButton).click();
      cy.get(this.firstNameInput).type('testName');
      cy.get(this.lastNameInput).type('testLastName');
      cy.get(this.addressStreetInput).type('testAddress');
      cy.get(this.addressCityInput).type('testCity');
      cy.get(this.addressStateInput).type('testState');
      cy.get(this.zipCodeInput).type('123');
      cy.get(this.phoneNumberInput).type('123456');
      cy.get(this.ssnInput).type('456');
      cy.get(this.usernameInput).type(username);
      cy.get(this.passwordInput).type(password);
      cy.get(this.repeatedPasswordInput).type(password);
      cy.get('[value="Register"]').click();
      cy.get(this.bodyPanel).should('contain', `Welcome ${username}`);
      cy.contains(this.logoutButton).click();
    }
  }
  
  export const register = new Register();
  