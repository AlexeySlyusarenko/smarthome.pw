const PageType = {
  LEFT: 'left',
  RIGHT: 'right',
}

export default class Slider {
  constructor() {
    this._element = null;

    this._elementPage = null;
    this._elementPageLeft = null;
    this._elementPageRight = null;
  }

  _getTemplate() {
    return this._template = `<div class="slider">
                                <div class="slider__page"></div>
                              </div>`;
  }
  _createPage(element, type = '') {
    const page = document.createElement('div');
    page.classList.add('slider__page');
    page.append(element);

    switch (type) {
      case PageType.LEFT:
        page.classList.add('slider__page--left');
        this._elementPageLeft = page;
        break;
      case PageType.RIGHT:
        page.classList.add('slider__page--right');
        this._elementPageRight = page;
        break;
      default:
        this._elementPage = page;
    }

    this._element.append(page);
  }

  getPageElement() {
    return this._element.querySelector('.slider__page');
  }

  showLeftPage(element) {
    this._createPage(element, PageType.LEFT);
    this._element.classList.add('slider__page--to-right');
    this._element.classList.remove('slider__page--left');
  }

  showRightPage(element) {
    this._createPage(element, PageType.RIGHT);
    this._element.classList.add('slider__page--to-left');
    this._element.classList.remove('slider__page--right');
  }
}
