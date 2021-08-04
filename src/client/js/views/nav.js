import Abstract from './abstract.js';

const TypeMenu = {
  QUICK: 'quick',
  MAIN: 'main',
};

export default class Nav extends Abstract {
  constructor(data, navButtons, type) {
    if(!Array.isArray(navButtons)) {
      new Error('Data error.');
    }

    super();

    this._data = data;
    this._navButtons = navButtons;
    this._type = type;
  }

  _getTemplate() {
    this._template = '';

    for (const data of this._data) {
      const { buttons, title } = data;

      const navHeader = this._type === TypeMenu.MAIN ?
        `<h3 class="nav__header">
          ${title}
        </h3>`:
        '';

      const navList = `<ul class="nav__list">
                        ${buttons.reduce((accum, id) => {
                          return accum = `${accum}
                                  <li class="nav__item">
                                    ${this._navButtons[id].getElement().outerHTML}
                                  </li>`
                        }, '')}
                      </ul>`

      this._template = `${this._template}
                        ${navHeader}
                        ${navList}`
    }

    return this._template = `<nav class="nav nav--${this._type}">
                              ${this._template}
                            </nav>`;
  }
}
