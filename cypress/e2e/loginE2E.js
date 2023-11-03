/// <reference types="Cypress" />
import LoginPage from "../support/PageObjects/loginPage";
import HomePage from "../support/PageObjects/homePages";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/register';
import '../support/commands';

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('I visit the Aladini website', () => {
  cy.visit('https://aladini.al/');
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

Then('I should be logged in successfully', () => {
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
    cy.get('#onesignal-slidedown-dialog #onesignal-slidedown-cancel-button').click();
  });
});