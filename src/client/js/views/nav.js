const TypeMenu = {
  QUICK: 'quick',
  MAIN: 'main',
};

export default class Nav {
  constructor(data, ButtonNav, type) {
    this._data = data;
    this._ButtonNav = ButtonNav;
    this._type = type;

    this._element = null;
    this._buttons = {};
    this._activeButtonId;

    this._create();
  }

  _create() {
    this._element = document.createElement('nav');
    this._element.classList.add('nav');
  }

  setContent() {
    for (const data of this._data) {
      const { buttons, title } = data;

      if (this._type === TypeMenu.MAIN) {
        const header = document.createElement('h3');
        header.classList.add('nav__header');
        header.textContent = title;
        this._element.append(header);
      }

      const list = document.createElement('ul');
      list.classList.add('nav__list');

      buttons.map((buttonId) => {
        const item = document.createElement('li');
        item.classList.add('nav__item');
        this._buttons.push(new this._ButtonNav(buttonId))
        item.append(this._buttons[this._buttons.length - 1].getElement());
        list.append(item);
      });

      this._element.append(list);
    }
  }

  render(container) {
    if (!this._element) {
      this._create();
    }

    container.append(this._element);
  }
}
