import { openPopup, popupPhoto, popupPhotoImage, popupPhotoSubtitle} from "./index.js";

export class Card {
  constructor(data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector('.temp').content.cloneNode(true);;
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeBtn = this._element.querySelector('.element__like');
    this._image = this._element.querySelector('.element__photo');
    this._setEventListeners();
    this._image.src = this._link;
    this._image.alt = `Фото ${this._link}`;
    this._element.querySelector('.element__title').textContent = this._name;
    return this._element;
  }

  _handleLikeButtonClick() {
    this._likeBtn.classList.toggle('element__like_active');
  }

  _handleDeleteButtonClick(evt) {
    evt.target.closest('.element').remove();
  }

  _handleOpenPhoto() {
    popupPhotoImage.src = this._link;
    popupPhotoImage.alt = `Фото ${this._link}`;
    popupPhotoSubtitle.textContent = this._name;
    openPopup(popupPhoto);
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => {
      this._handleLikeButtonClick();
    });
    this._element.querySelector('.element__delete').addEventListener('click', (evt) => {
      this._handleDeleteButtonClick(evt);
    });
    this._image.addEventListener('click', () => {
      this._handleOpenPhoto();
    });
  }
}