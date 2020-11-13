Feature: Login

   As an admin, I want to login into Portal SA Loyalty

   Background:
        Given I am on the SA-Portal homepage

   Scenario: As an admin, I canlogin with success
        When I go to Login Okta page
        And I direct to new window Sign In page
        And I input admin username and password sa portal
        Then I can see SA-Portal Dashboard page

