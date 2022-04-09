Feature: Login Feature

  This feature is required for a user to log in
Scenario: Failed Login 
Given I open the login page
When I enter the email 'shsh.zhao@gmail.com'
And I enter a wrong password 'Z!123456' which meets the requirements
And I click on the login button
Then The message 'The password field is required.' will be displayed

When I clear the password field
And I enter a password 'Z1234567' without capital symbol
And I click input email field
Then The message 'Password must contains 1 capital and 1 special symbol' will be displayed

When I clear the password field
And I enter a password 'Z!1234' less than 8 characters 
And I click input email field
Then The message 'The password must be at least 8 characters.' will be displayed


Scenario: Forgot password and restroe
Given I open the login page
When I click on the forgot password button
And I go to the forgot password page
When I fill in Email with 'shsh.zhao@gmail.com'
And I press Restore button
Then Password is restored

Scenario: Click Terms  and  Conditions
Given I open the login page
When I click on the link Our Terms  and  Conditions
Then I go to the Terms and Conditions page