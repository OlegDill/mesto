import Popup from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector, popupConfig, { imageSelector, captionSelector }) {
    super(popupSelector, popupConfig);
    this._imageSelector = imageSelector;
    this._captionSelector = captionSelector;
    this._imageElement = this._popup.querySelector(`.${this._imageSelector}`);
    this._captionElement = this._popup.querySelector(`.${this._captionSelector}`);
    this.open = this.open.bind(this);
  }

  open({ name, link }) {
    super.open();
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._captionElement.textContent = name;
  }
}