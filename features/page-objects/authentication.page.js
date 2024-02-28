import { Page } from './page.js';
import { browser } from '@wdio/globals';

class AuthenticationPage extends Page {
    get signInOffer() { return $('//*[@id="create-account_form"]/h3'); }
    get logInOffer() { return $('//*[@id="login_form"]/h3'); }

}

export default new AuthenticationPage();
