import { Page } from './page.js';
import { browser } from '@wdio/globals';


class summaryPage extends Page {
    get ProceedToCheckoutButton() { return $('//*[@id="center_column"]/p[2]/a[1]/span'); }
}

export default new summaryPage();
