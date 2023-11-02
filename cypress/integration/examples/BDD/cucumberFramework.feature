Feature: E2E test - Aladini

    @Login
    Scenario: Should Login with Valid Credentials
        Given I visit the Aladini website
        When I log in with valid credentials
        Then I should be logged in successfully and handle alert
        Then I select a random element from the list
        When I select the items properties

    @Shopping
    Scenario: Should Select the Correct Element
        Given I visit the Aladini website for shopping
        When I search for a product
        Then I select the correct from the list