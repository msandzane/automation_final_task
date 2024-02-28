import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import productPage from `../page-objects/product.page.js`;
import authentication from `../page-objects/authentication.page.js`;
import selectionPage from `../page-objects/selection.page.js`;
import summaryPage from `../page-objects/summary.page.js`;

When(`I click on the "Best sellers" button`, async function() {
    await homePage.bestSellersButton.click();

});

When(`I click on a product`, async function() {
    await selectionPage.firstProductPhoto.click();

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
    await summaryPage.ProceedToCheckoutButton.click();

});

Then(`I see two forms displayed to Create an account or Sign in`, async function() {
    await expect.toHaveText(this.signInOffer);
    await expect.toHaveText(this.logInOffer);
    await authentificationPage.getText();
});

Given('I am on the home page', async function() {
    await homePage.open();
});


