'use strict';

import Page from './page';

class SimplePage extends Page {
    get title() { return browser.getTitle() }

    open() {
        super.open('http://google.com');
    }
}

export default new SimplePage();