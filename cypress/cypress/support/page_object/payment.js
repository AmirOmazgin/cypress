export class Payment {
    constructor() {
      this.newAccountIdLink = 'a#newAccountId';
      this.billPayButton = 'Bill Pay';
      this.payeeNameInput = '[name="payee.name"]';
      this.payeeAddressStreetInput = '[name="payee.address.street"]';
      this.payeeAddressCityInput = '[name="payee.address.city"]';
      this.payeeAddressStateInput = '[name="payee.address.state"]';
      this.payeeAddressZipCodeInput = '[name="payee.address.zipCode"]';
      this.payeePhoneNumberInput = '[name="payee.phoneNumber"]';
      this.payeeAccountNumberInput = '[name="payee.accountNumber"]';
      this.verifyAccountInput = '[name="verifyAccount"]';
      this.amountInput = '[name="amount"]';
      this.fromAccountIdSelect = '[name="fromAccountId"]';
      this.sendPaymentButton = 'td input.button[value="Send Payment"]';
      this.billPayAppContainer = '[ng-app="BillPayApp"]';
    }
  
    paymentSubmission() {
      return cy.get(this.newAccountIdLink).invoke('text').then((text) => {
        const accountId = text.trim();
        cy.log('Account ID:', accountId);
  
        cy.contains(this.billPayButton).click();
        cy.get(this.payeeNameInput).type('payName');
        cy.get(this.payeeAddressStreetInput).type('payAddress');
        cy.get(this.payeeAddressCityInput).type('payCity');
        cy.get(this.payeeAddressStateInput).type('payState');
        cy.get(this.payeeAddressZipCodeInput).type('123');
        cy.get(this.payeePhoneNumberInput).type('054788778');
        cy.get(this.payeeAccountNumberInput).type('789');
        cy.get(this.verifyAccountInput).type('789');
        cy.get(this.amountInput).type('200');
        cy.get(this.fromAccountIdSelect).select(accountId);
        cy.get(this.sendPaymentButton).click();
        cy.get(this.billPayAppContainer).should('contain', 'Bill Payment Complete');
      });
    }
  }
  
  export const payment = new Payment();
  