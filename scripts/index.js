const profileButtonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const popupEditInputName = document.querySelector('.popup-edit__input_name');
const popupEditInputDesc = document.querySelector('.popup-edit__input_desc');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const elementNew = document.querySelector('.elements');
const popupAddInputName = document.querySelector('.popup-add__input_name');
const popupAddInputDesc = document.querySelector('.popup-add__input_desc');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoImage = document.querySelector('.popup-photo__image');
const popupPhotoSubtitle = document.querySelector('.popup-photo__subtitle');
const template = document.querySelector('.temp');
const body = document.querySelector('.body');
const popups = document.querySelectorAll('.popup')
// обработчики клика по оверлею и крестику
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup()
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup()
      }
  })
});
// функция создания новой карточки
const getItemElement = (title, photo) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemPhoto = newItemElement.querySelector('.element__photo');
  const newItemTitle = newItemElement.querySelector('.element__title');
  newItemTitle.textContent = title;
  newItemPhoto.src = photo;
  newItemPhoto.alt = 'Фото ' + title;
  const elementButtonLike = newItemElement.querySelector('.element__like');
  const elementButtonDelete = newItemElement.querySelector('.element__delete');
  const elementPhoto = newItemElement.querySelector('.element__photo');
  elementButtonLike.addEventListener('mousedown', likeCard);
  elementButtonDelete.addEventListener('mousedown', deleteCard);
  elementPhoto.addEventListener('mousedown', () => openCard(title, photo));
  return newItemElement;
};
// функция добавления карточек
const renderItem = (wrap, title, photo) => {
  wrap.prepend(getItemElement(title, photo));
};
// добавления стартовых карточек
initialCards.forEach((title) => {
  renderItem(elementNew, title.name, title.link)
});
// функция открытия popup-edit
function openPopupEdit() {
  popupEditInputName.value = profileTitle.textContent;
  popupEditInputDesc.value = profileSubtitle.textContent;
  openPopup(popupEdit);
};
// функция сохранения данных с popup-edit
function handlerFormEditSubmit() {
  profileTitle.textContent = popupEditInputName.value;
  profileSubtitle.textContent = popupEditInputDesc.value;
  closePopup();
};
// функция добавление карточки 
function handlerFormAddSubmit() {
  renderItem(elementNew, popupAddInputName.value, popupAddInputDesc.value)
  event.target.reset();
  closePopup();
};
// функция лайков карточкам
function likeCard(evt) { 
  evt.target.classList.toggle('element__like_active');
};
// функция удаления карточек
function deleteCard(evt) { 
  evt.target.closest('.element').remove();
};
// функция открытия popup-photo
function openCard(title, photo) {
  popupPhotoImage.src = photo;
  popupPhotoSubtitle.textContent = title;
  openPopup(popupPhoto);
};
// функция открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened', true);
  popupOverflow();
  document.addEventListener('keydown', pressEscapeKey);
};
// функция закрытия popup
function closePopup() {
  const openedPopup = document.querySelector('.popup_opened');
  openedPopup.classList.remove('popup_opened');
  popupOverflow();
  document.removeEventListener('keydown', pressEscapeKey);
};
// функция toogle вертикального скролла
function popupOverflow() { 
  body.classList.toggle('body_overflow');
};
// функция закрытия popup по кнопке Escape
const pressEscapeKey = (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
  }
};
// слушатели
profileButtonEdit.addEventListener('mousedown', openPopupEdit);
buttonAdd.addEventListener('mousedown', () => openPopup(popupAdd));