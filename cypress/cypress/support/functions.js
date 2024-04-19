// utils.js
const generateRandomString = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      randomString += chars.charAt(randomIndex);
    }
  
    return randomString;
  };

  const openNewAccount = () => {
    cy.contains('Open New Account').click();
    cy.get('div input.button[value="Open New Account"]')
      .should('be.visible')
      .then(() => {
        cy.wait(500)
        cy.get('div input.button[value="Open New Account"]').click({ force: true })
      });
      
  }

//   cy.contains('Open New Account').click();
//   cy.get('div input.button[value="Open New Account"]')
//     .should('be.visible')
//     .then(() => {
//       cy.wait(500)
//       cy.get('div input.button[value="Open New Account"]').click({ force: true })
//     });
  
  module.exports = { generateRandomString, openNewAccount };
  