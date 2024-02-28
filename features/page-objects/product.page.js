import { Page } from './page.js';
import { browser } from '@wdio/globals';


class productPage extends Page {
    get firstSizeButton() { return $('//*[@id="group_1"]/option[1]'); }
    get firstColorButton() { return $('//*[@id="color_8"]'); }
    get addToCartButton() { return $('//*[@id="add_to_cart"]/button/span'); }
    get ProceedToCheckoutButton() { return $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span'); }
}

export default new productPage();
