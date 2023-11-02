/// <reference types="Cypress" />
import LoginPage from "../../../../support/PageObjects/loginPage";
import HomePage from "../../../../support/PageObjects/homePages";
import ProductPage from "../../../../support/PageObjects/productPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import '../../../../support/commands';
import { recurse } from 'cypress-recurse'

const loginPage = new LoginPage();
const homePage = new HomePage();
const productPage = new ProductPage();

Given('I visit the Aladini website', () => {
    cy.visit(Cypress.env('url'));
  cy.wait(4000);
});

When('I log in with valid credentials', () => {
  cy.fixture('example').then((data) => {
    const { email, password } = data;
    loginPage.getLoginHoverMenu().trigger('mouseover');
    loginPage.getMenuCredentials().invoke('css', 'display', 'block');
    loginPage.getEmailField().should('be.visible').type(email);
    loginPage.getPasswordField().should('be.visible').type(password);
    loginPage.getLoginBtn().click();
  });
});

Then('I should be logged in successfully and handle alert', () => {
  cy.fixture('example').then((data) => {
    const { password } = data;
    if (password === 'Desara2001') {
      loginPage.getErrorModule().should('not.exist');
    } else {
      loginPage.getErrorModule().should('be.visible').and('contain.text', 'Authentication failed');
    }
    cy.wait(3000);
    homePage.getNewElements().as('newElements');
    cy.get('@newElements').click();
    cy.wait(5000);
    cy.selectProduct();
  })


    cy.wait(5000)
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // To prevent Cypress from failing the test
      });

            homePage.getAlertDismiss().click();

    });
  

    Then('I select a random element from the list', () => {  
    //get one item from the whole list by pagination
    const itemsSelector = '#product_list li div.produkti h5'  
    const nextPageSelector = '#pagination_next_bottom'
    const value = 'Printer Brother MFP Laser HL1222WEYJ1'
    
    recurse(
      () => cy.get(itemsSelector),
      (items) => expect(items).to.contain(value),
      {
        post: () => cy.get(nextPageSelector).click(),
        timeout: 10000, // timeout 10 seconds

      }
    )
    .contains(value)   // filter down to one item
    .click()

    })

    When("I select the items properties", ()=> {
      productPage.getGrayColor().click()

      expect(productPage.getTransportPlace().should('be.visible').and('contain.text', 'Transporti Tiranë'))

    })

    Given('I visit the Aladini website for shopping', () => {
      cy.visit(Cypress.env('url'));
    cy.wait(4000);
  });

    When('I search for a product', () => {
      homePage.getSearchBar().click()
      homePage.getNewSearch().type("laptop")
      cy.wait(4000)
      
    });
    
    Then('I select the correct from the list', () => {
        homePage.getSearchResults().eq(0).click()
        expect(homePage.getElementName().should('contain', 'Lenovo'))
      
      })
  
