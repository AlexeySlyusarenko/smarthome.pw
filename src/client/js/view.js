import { nav as navMock } from './mocks/nav.js';
import { navButton as navButtonMock } from './mocks/button-nav.js';

import Page from './views/page.js';
import Loader from './views/loader.js';
import Nav from './views/nav.js';
import ButtonNav from './views/button-nav.js';

export default class View {
  constructor() {
    setTimeout(() => {
      this._loader.hide();
      this._page.hideLoader();
    }, 2000);

    this._page = new Page();
    this._loader = new Loader();

    this._navButtons = {};
    for (const key in navButtonMock) {
      this._navButtons[key] = new ButtonNav(key, navButtonMock[key]);
    }

    for (const key in navMock) {
      switch (key) {
        case 'quick':
          this._quickNav = new Nav(navMock[key].menu, this._navButtons, key);
          this._quickNav.render(this._page.getNavElement());
          break;
        case 'main':
          this._mainNav = new Nav(navMock[key].menu, this._navButtons, key);
          break;
      }
    }
  }
}
