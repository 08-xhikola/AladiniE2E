// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add("selectProduct", () => { 
    cy.get('.tree li').should('be.visible');

    cy.get('.tree li').each(($el, index, $list) => {
        if($el.text().includes('Kompjuter & Kancelari'))
        {
            cy.wrap($el).click()

        }
        
        })
  })

  Cypress.Commands.add("findItem", (value, attempt) => {
    let currAttempt = attempt ?? 0;
    const maxAttempts = 20;
  
    if (attempt < maxAttempts) {
      let found = false;
      cy.get("#product_list li div.produkti h5")
        .each(($item) => {
          const itemText = $item.text();
          console.log(itemText);
          if (itemText === value) {
            found = true;
            return false;
          }
        })
        .then(() => {
          if (!found) {
            cy.get("#pagination_next_bottom").click();
            cy.wait(5000);
            cy.findItem(value, currAttempt++);
          } else {
            cy.wrap($item).should("be.visible").click(); // Click the parent element of the product
          }
        });
    } else {
      expect(true === false); // placeholder assertion to fail if too many attempts are made
    }
  });
  

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })