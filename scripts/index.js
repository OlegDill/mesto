const profileButtonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const popupEditButtonClose = document.querySelector('.popup-edit__close-btn');
const popupEditForm = document.querySelector('.popup-edit__form'); 
const popupEditInputName = document.querySelector('.popup-edit__input_name');
const popupEditInputDesc = document.querySelector('.popup-edit__input_desc');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const popupAddButtonClose = document.querySelector('.popup-add__close-btn');
const popupAddForm = document.querySelector('.popup-add__form');
const elementTitle = document.querySelectorAll('.element__title');
const elementNew = document.querySelector('.elements');
const elementItem = document.querySelectorAll('.element');
const popupAddInputName = document.querySelector('.popup-add__input_name');
const popupAddInputDesc = document.querySelector('.popup-add__input_desc');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoCloseBtn = document.querySelector('.popup-photo__close-btn');
const popupPhotoImage = document.querySelector('.popup-photo__image');
const popupPhotoSubtitle = document.querySelector('.popup-photo__subtitle');
const template = document.querySelector('.temp');

const getItemElement = (title, photo) => {
  const newItemElement = template.content.cloneNode(true);
  const newItemPhoto = newItemElement.querySelector('.element__photo');
  const newItemTitle = newItemElement.querySelector('.element__title');
  newItemTitle.textContent = title;
  newItemPhoto.src = photo;
  const elementButtonLike = newItemElement.querySelector('.element__like');
  const elementButtonDelete = newItemElement.querySelector('.element__delete');
  const elementPhoto = newItemElement.querySelector('.element__photo');
  elementButtonLike.addEventListener('click', likeCard);
  elementButtonDelete.addEventListener('click', deleteCard);
  elementPhoto.addEventListener('click', openCard);
  return newItemElement;
}
// функция добавления карточек
const renderItem = (wrap, title, photo) => {
  wrap.prepend(getItemElement(title, photo));
}
// добавления стартовых карточек
initialCards.forEach((title) => {
  renderItem(elementNew, title.name, title.link)
})
// функция открытия popup-edit
function popupEditOpen() {
  popupEditInputName.value = profileTitle.textContent;
  popupEditInputDesc.value = profileSubtitle.textContent;
  openPopup(popupEdit);
};
// функция сохранения данных с popup-edit
function formEditSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupEditInputName.value;
  profileSubtitle.textContent = popupEditInputDesc.value;
  closePopup(popupEdit);
}
// функция добавление карточки 
function formAddSubmitHandler(evt) {
  evt.preventDefault();
  renderItem(elementNew, popupAddInputName.value, popupAddInputDesc.value)
  // очистка input и закрытие формы
  popupAddInputDesc.value = '';
  popupAddInputName.value = '';
  closePopup(popupAdd);
}
// функция лайков карточкам
function likeCard(evt) { 
  evt.target.classList.toggle('element__like_active');
}
// функция удаления карточек
function deleteCard(evt) { 
  evt.target.closest('.element').remove();
};
// открытие popup-photo
function openCard(evt) {
  popupPhotoImage.src = evt.target.closest('.element__photo').src;
  popupPhotoSubtitle.textContent = evt.target.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.textContent;
  openPopup(popupPhoto);
}
// функция открытия popup
function openPopup(popup) {
  popup.classList.add('popup-hidden', true);
}
// функция закрытия popup
function closePopup(popup) {
  popup.classList.remove('popup-hidden');
}
// слушатели popup-edit
profileButtonEdit.addEventListener('click', popupEditOpen);
popupEditButtonClose.addEventListener('click', () => closePopup(popupEdit));
popupEditForm.addEventListener('submit', formEditSubmitHandler);
// слушатели popup-add
buttonAdd.addEventListener('click', () => openPopup(popupAdd));
popupAddButtonClose.addEventListener('click', () => closePopup(popupAdd));
popupAddForm.addEventListener('submit', formAddSubmitHandler);
// слушатели popup-photo
popupPhotoCloseBtn.addEventListener('click', () => closePopup(popupPhoto));