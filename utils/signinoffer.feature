Feature: sign in request 
Scenario: create an account or sign in offer, before finishing order

Given I am on the home page
When i select “Women -> Tops -> T-shirts” menu item 
And I click on the product
And select size and colour 
And I click on the cart
And I click on the Add to cart button 
And I click on the Proceed to checkout button 
Then I am directed to cart summary page 
And I click on the Proceed to checkout button 
Then I get directed to authetification page 
And I see two forms displayed to Create an account or Sign in 
