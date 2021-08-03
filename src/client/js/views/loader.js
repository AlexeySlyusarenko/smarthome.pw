export default class Loader {
  constructor() {
    this._element = document.querySelector('.loader');
    this._titleElement = document.querySelector('.loader__title');
  }

  show(title = 'loading') {
    this._titleElement.textContent = title;
    this._element.classList.remove('loader--hidden');
  }

  hide() {
    this._element.classList.add('loader--hidden');
  }
}
