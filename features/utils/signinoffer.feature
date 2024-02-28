Feature: sign in request 
Scenario: create an account or sign in offer, before finishing order



Given I am on the home page
When I click on the "Best sellers" button
And I click on a product
And I select size and colour
And I click on the Add to Cart button
And I click on the Proceed to checkout button 
Then I click on the Proceed to checkout button on summary page
And I see two forms displayed to Create an account or Sign in 
