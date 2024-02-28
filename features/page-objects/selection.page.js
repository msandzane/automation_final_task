import { Page } from './page.js';
import { browser } from '@wdio/globals';

class selectionPage extends Page {
    get firstProductPhoto() { return $('//*[@id="blockbestsellers"]/li[1]'); }
}

export default new selectionPage();
