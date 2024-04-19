export class Update {
    constructor() {
      this.updateButton = 'Update Contact Info';
      this.addressCityInput = '#customer\\.address\\.city';
      this.addressStreetInput = '[name="customer.address.street"]';
      this.updateProfileButton = 'td[colspan="2"] input.button[value="Update Profile"]';
      this.resultMessage = 'div[ng-if="showResult"]';
      this.newCity = 'testAddressNew'
    }
  
    updateInfo() {
      cy.contains(this.updateButton).click();
      cy.get('table.form2').should('be.visible');
      cy.get(this.addressCityInput).should('have.value', 'testCity');
      cy.get(this.addressStreetInput).clear().type(this.newCity);
      cy.get(this.updateProfileButton).click();
      cy.get(this.resultMessage).should('contain', 'Your updated address and phone number have been added to the system.');
      cy.contains(this.updateButton).click();
      cy.get('#customer\\.address\\.street').should('have.value', this.newCity);
    }
  }
  
  export const update = new Update();
  