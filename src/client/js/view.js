import { nav as navMock } from './mocks/nav.js';
import { navButton as navButtonMock } from './mocks/button-nav.js';

import Page from './views/page.js';
import Loader from './views/loader.js';
import Slider from './views/slider.js';
import Nav from './views/nav.js';
import ButtonNav from './views/button-nav.js';

const TypeNav = {
  QUICK: 'quick',
  MAIN: 'main',
}
export default class View {
  constructor() {
    setTimeout(() => {
      this._loader.hide();
      this._page.hideLoader();
    }, 100);

    this._page = new Page();
    this._loader = new Loader();
    this._slider = new Slider();

    this._quickNav = new Nav(navMock[TypeNav.QUICK].menu, ButtonNav, TypeNav.QUICK);
    this._mainNav = new Nav(navMock[TypeNav.MAIN].menu, ButtonNav, TypeNav.MAIN);

    this._controlList = new controlList(controlListMock, ButtonControl, )
    this._quickNav.render(this._page.getNavElement());
  }
}
