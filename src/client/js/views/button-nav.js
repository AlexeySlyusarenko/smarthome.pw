import { icon } from '../const/icon.js';

export default class ButtonNav {
  constructor(id = undefined) {
    this._id = id;
    this._title = icon[id].title;
    this._svg = icon[id].svg;
    this._color = icon[id].color;

    this._element = null;
  }

  _create() {
    this._element = document.createElement('a');
    this._element.classList.add('button-nav');
    this._element.style.setProperty('--button-nav-active-color', this._color);
    this._element.innerHTML = `<svg class="button-nav__icon" width="24" height="24" viewBox="0 0 24 24">
                                  ${this._svg}
                                </svg>
                                <span class="button-nav__title">
                                  ${this._title}
                                </span>`;
    this.setHandlers();
  }

  render(container) {
    if (!this._element) {
      this._create();
    }

    container.append(this._element);
  }

  getElement() {
    if (!this._element) {
      this._create();
    }

    return this._element;
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
