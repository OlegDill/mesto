export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItems() {
    this._items.forEach(item => {
      this.addItem(item);
    });
  }

  addItem(item) {
    this._container.prepend(this._renderer(item));
  }
}