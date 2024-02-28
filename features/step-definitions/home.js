import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import authenticationPage  from `../page-objects/authentication.page.js`;


Given('I am on the home page', async function() {
    await homePage.open();
});

When(`I click on the "Best sellers" button`, async function() {
    await homePage.bestSellersButton.click();
});

Then(`I see two forms displayed to Create an account or Sign in`, async function() {
    await expect.toHaveText(this.signInOffer);
    await expect.toHaveText(this.logInOffer);
});
