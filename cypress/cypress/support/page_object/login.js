export class Login {
    constructor() {
      this.rightPanel = '#rightPanel';
      this.accountsOverviewText = 'Accounts Overview';
    }
  
    validateLogin() {
      cy.get(this.rightPanel).should('contain', this.accountsOverviewText);
    }
  }
  
  export const login = new Login();
  