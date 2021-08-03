export default class Page {
  constructor() {
    this._element = document.querySelector('.page');
    this._bodyElement = document.querySelector('.page__body');
    this._loaderElement = document.querySelector('.page__loader');
    this._planElement = document.querySelector('.page__plan');
    this._controlElement = document.querySelector('.page__control');
    this._navElement = document.querySelector('.page__nav');
  }

  getNavElement() {
    return this._navElement;
  }

  showLoader() {
    this._loaderElement.classList.remove('page__loader--hidden');
  }

  hideLoader() {
    this._loaderElement.classList.add('page__loader--hidden');
  }
}
