export default class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.querySelector('.body').classList.toggle('body_overflow');
    document.addEventListener('keydown', this._handleEscOrOverlayClick);
  }

  close() {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    document.querySelector('.body').classList.toggle('body_overflow');
    document.removeEventListener('keydown', this._handleEscOrOverlayClick);
  }

  _handleEscOrOverlayClick = (event) => {
    if (event.key === 'Escape' || event.target === event.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleEscOrOverlayClick);
    document.querySelector('.popup__close').addEventListener('click', this.close);
  }
}

