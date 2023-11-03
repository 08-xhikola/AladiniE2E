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

When('I search for a product', () => {
  homePage.getSearchBar().click()
  homePage.getNewSearch().type("laptop")
  
});

Then('I select the correct from the list', () => {
    homePage.getSearchResults().scrollTo.contain('Lenovo')
  
  })


    