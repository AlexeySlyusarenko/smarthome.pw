export default class Abstract {
  constructor() {
    this._template = null;
    this._element = null;
  }

  _getTemplate() {
    new Error('Element template not created.');
  }

  _create() {
    const element = document.createElement('div');

    if(!this._template) this._getTemplate();

    element.innerHTML = this._template;
    this._element = element.firstChild;
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
