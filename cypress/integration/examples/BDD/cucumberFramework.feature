Feature: E2E test - Aladini

    Scenario: Should Login with Valid Credentials
        Given I visit the Aladini website
        When I log in with valid credentials
        Then I should be logged in successfully and handle alert
        Then I select a random element from the list
        When I select the items properties


