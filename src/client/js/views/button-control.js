import { icon } from '../const/icon.js';

import Abstract from './abstract.js';

export default class ButtonControl extends Abstract {
  constructor(
    {
      id = undefined,
      title = undefined,
      icon = undefined,
      type = undefined,
      value = undefined,
    }
  ) {
    if(id && title && icon && type && value) {
      new Error('Data error.');
    }

    super();

    this._id = id;
    this._title = title;
    this._svg = icon.svg;
    this._color = icon.color;
    this._type = type;
    this._value = value;
  }

  _getTemplate() {
    // this._element.style.setProperty('--button-nav-active-color', this._color);

    return this._template = `<button class="button-control button-control--${this._type}" type="button">
                              <span class="button-control__title">
                                ${this._title}
                              </span>
                              ${this._svg}
                              <span class="button-control__value">
                                ${this._value}
                              </span>
                            </button>`;
  }

  setValue(value) {
    this._element.querySelector('.button-control__value').textContent = value;
    this._value;
  }
}
