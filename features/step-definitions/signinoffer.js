import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';


When(`I click on the "Best sellers" button`, async function() {
    await selectionPage.BestSellersButton.click();

});

When(`I click on a product`, async function() {
    await productPage.firstProductPhoto.click();

});

When(`I select size and colour`, async function() {
    const sizeElement = await productPage.firstSizeButton;
    await sizeElement.click();
    this.sizeText = await sizeElement.getText();

    const colorElement = await productPage.firstColorButton;
    await colorElement.click();
    this.color = await colorElement.getAttribute('option-label');
});


When('I click on the Add to Cart button', async function() {
    await productPage.addToCartButton.click();

});

When('I click on the Proceed to checkout button', async function() {
     await productPage.ProceedToCheckoutButton.click();

});

Then(`I click on the Proceed to checkout button on summary page`, async function() {
    await productPage.ProceedToCheckoutButton.click();

});


Then(`I see two forms displayed to Create an account or Sign in`, async function() {
    await expect.toHaveText(this.signInOffer);
    await expect.toHaveText(this.logInOffer);
});


Given('I am on the home page', async function() {
    await homePage.open();
});



