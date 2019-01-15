'use strict';

import Page from './page';

class GooglePage extends Page {
    get title() { return browser.getTitle(); }

    get searchRow() { return $('[name="q"]'); }

    get buttonSearch() { return $('div[jsname="VlcLAe"]'); }

    get link() { return $('.LC20lb:nth-child(1)'); }

    putSearch(data) {
      this.searchRow.setValue(data);
    }

    search() {
      this.buttonSearch.waitForVisible(1000);

      if(this.buttonSearch.isVisible('[name="btnK"]:nth-child(1)')) {
        $('[name="btnK"]:nth-child(1)').click();
      } else {
        console.error('Not found');
        browser.closeApp();
      }
    }

    linkClick() {
      this.link.click();
    }

    open() {
        super.open('http://google.com');
    }
}

export default new GooglePage();