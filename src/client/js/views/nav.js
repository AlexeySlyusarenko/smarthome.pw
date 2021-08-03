import Abstract from './abstract.js';

export default class Nav extends Abstract {
  constructor(data, navButtons, type) {
    if(!Array.isArray(navButtons)) {
      new Error('Data error.');
    }

    super();
    console.log(data, navButtons, type);

    this._data = data;
    this._navButtons = navButtons.filter(navButton => navButton);
    this._type = type;
  }

  _getTemplate() {
    return this._template = `<nav class="nav nav--${this._type}">
                                <ul class="nav__list"></ul>
                              </nav>`;
  }

  _create() {
    super._create();

    const navList = this._element.querySelector('.nav__list')
    for (const navButton of this._navButtons) {
      navList.append(navButton.getElement());
    }
  }
}
