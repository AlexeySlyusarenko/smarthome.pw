export default class Abstract {
  constructor() {
    this._element = null;
  }

  _create() {
    const container = document.createElement('div');

    if(!this._template) this._getTemplate();

    container.innerHTML = this._template;
    this._element = container.firstChild;
  }

  getElement() {
    if(!this._element) this._create();

    return this._element;
  }

  render(container) {
    if (!this._element) {
      this._create();
    }

    container.append(this._element);
  }

  remove() {
    this._element = null;
  }
}
