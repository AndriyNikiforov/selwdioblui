'use strict';

import GooglePage from '../pageobjects/googlePage';

describe('webdriver.io page', () => {

    it('should have the right title - the fancy generator way', ()=> {
        GooglePage.open();

        GooglePage.title
          .should
          .be
          .equal('Google');

        GooglePage.putSearch('golang');

        GooglePage.search();
        GooglePage.linkClick();

        GooglePage.title
          .should
          .be
          .equal('The Go Programming Language');
    });
});
