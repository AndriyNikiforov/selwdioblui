'use strict';

import SimplePage from '../pageobjects/simplePage';

describe('webdriver.io page', () => {

    it('should have the right title - the fancy generator way', ()=> {
        SimplePage.open();
        SimplePage.title
          .should
          .be
          .equal('Google');
    });
});
