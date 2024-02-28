import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HomePage extends Page {
    get bestSellersButton() { return $(`//*[@id="home-page-tabs"]/li[2]/a`);}
    
    
}
export default new HomePage();
