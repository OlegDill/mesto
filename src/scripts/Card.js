export class Card {
  constructor({ item }, cardSelector, openPopupImage) {
    this._name = item.name;
    this._link = item.link;
    this.__cardSelector = cardSelector;
    this._openPopupImage = openPopupImage;
  }

  _getTemplate() {
    const cardElement = this.__cardSelector.cloneNode(true);
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
    this._element.remove();
  }

  _handleOpenPhoto() {
    popupPhotoImage.src = this._link;
    popupPhotoImage.alt = `Фото ${this._link}`;
    popupPhotoSubtitle.textContent = this._name;
    openPopup(popupPhoto);
  }

  _removeImage = () => {
    this._element.remove();
  }

  _handleImageClick = () => {
    this._openPopupImage({ name: this._name, link: this._link });
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', this._handleLikeButtonClick);
    this._element.querySelector('.element__delete').addEventListener('click', this._handleDeleteButtonClick);
    this._element.querySelector('.element__photo').addEventListener('click', this._handleImageClick);
  }
}