import { icon } from '../const/icon.js';

import Abstract from './abstract.js';

export default class ButtonNav extends Abstract {
  constructor(id = undefined, { icon: iconId } = undefined) {
    if(id && iconId) {
      new Error('Data error.');
    }

    super();

    this._id = id;
    this._title = icon[iconId].title;
    this._svg = icon[iconId].svg;
    this._color = icon[iconId].color;
  }

  _getTemplate() {
    return this._template = `<a href="#" class="button-nav">
                              <svg class="button-nav__icon" width="24" height="24" viewBox="0 0 24 24">
                                ${this._svg}
                              </svg>
                              <span class="button-nav__title">
                                ${this._title}
                              </span>
                            </a>`;
  }

  _create() {
    super._create();

    this._element.style.setProperty('--button-nav-active-color', this._color);
    this.setHandlers();
  }

  getId() {
    return this._id;
  }

  setActive() {
    this._element.classList.add('.button-nav--active');
  }
  setNormal() {
    this._element.classList.remove('.button-nav--active');
  }

  setHandlers() {
    this._element.addEventListener('click', (evt) => {
      this._clickHandle(evt);
    });
  }
  _clickHandle(evt) {
    evt.preventDefault();
    this._element.classList.toggle('button-nav--active');
  }
}
