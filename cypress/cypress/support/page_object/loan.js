export class Loan {
    constructor() {
      this.requestLoanButton = 'Request Loan';
      this.amountInput = '#amount';
      this.downPaymentInput = '#downPayment';
      this.applyNowButton = 'td[colspan="2"] input.button[value="Apply Now"]';
      this.successMessage = '[class="ng-scope"]';
      this.responseDateElement = '#responseDate';
    }
  
    takeLoan() {
      cy.contains(this.requestLoanButton).click();
      cy.get(this.amountInput).type('20');
      cy.get(this.downPaymentInput).type('1');
      cy.get(this.applyNowButton).click();
      cy.get(this.successMessage).should('contain', 'Congratulations, your loan has been approved.');
      cy.get(this.responseDateElement).invoke('text').then((text) => {
        const responseDate = text.trim();
        cy.log('Response Date:', responseDate);
      });
    }
  }
  
  export const loan = new Loan();
  