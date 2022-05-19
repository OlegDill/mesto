const profileButtonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const popupEditButtonClose = document.querySelector('.popup-edit__close-btn');
const popupEditForm = document.querySelector('.popup-edit__form'); 
const popupEditInputName = document.querySelector('.popup-edit__input_name');
const popupEditInputDesc = document.querySelector('.popup-edit__input_desc');
const popupEditSubBtn = document.querySelector('.popup-edit__sub-btn');
const popupEditNameError = document.querySelector('.popup-edit__name-error');
const popupEditDescError = document.querySelector('.popup-edit__desc-error');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const popupAddButtonClose = document.querySelector('.popup-add__close-btn');
const popupAddForm = document.querySelector('.popup-add__form');
const popupAddSubBtn = document.querySelector('.popup-add__sub-btn');
const popupAddNameError = document.querySelector('.popup-add__name-error');
const popupAddDescError = document.querySelector('.popup-add__desc-error');
const elementNew = document.querySelector('.elements');
const popupAddInputName = document.querySelector('.popup-add__input_name');
const popupAddInputDesc = document.querySelector('.popup-add__input_desc');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoCloseBtn = document.querySelector('.popup-photo__close-btn');
const popupPhotoImage = document.querySelector('.popup-photo__image');
const popupPhotoSubtitle = document.querySelector('.popup-photo__subtitle');
const template = document.querySelector('.temp');
const body = document.querySelector('.body');
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
function popupEditOpen() {
  popupEditInputName.value = profileTitle.textContent;
  popupEditInputDesc.value = profileSubtitle.textContent;
  openPopup(popupEdit, popupEditSubBtn, event, popupEditInputName, popupEditNameError, popupEditInputDesc, popupEditDescError);
  // isValid();
};
// функция сохранения данных с popup-edit
function formEditSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupEditInputName.value;
  profileSubtitle.textContent = popupEditInputDesc.value;
  closePopup(popupEdit, event);
};
// функция добавление карточки 
function formAddSubmitHandler(evt) {
  evt.preventDefault();
  renderItem(elementNew, popupAddInputName.value, popupAddInputDesc.value)
  // очистка input и закрытие формы
  popupAddInputDesc.value = '';
  popupAddInputName.value = '';
  closePopup(popupAdd, event);
};
// функция лайков карточкам
function likeCard(evt) { 
  evt.target.classList.toggle('element__like_active');
};
// функция удаления карточек
function deleteCard(evt) { 
  evt.target.closest('.element').remove();
};
// открытие popup-photo
function openCard(evt) {
  popupPhotoImage.src = evt.target.closest('.element__photo').src;
  popupPhotoSubtitle.textContent = evt.target.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.textContent;
  popupPhoto.classList.add('popup-hidden', true);
  popupOverflow();
};
// закрытие popup-photo
function closeCard(popup, event) {
  if (event.target === event.currentTarget) {
    popup.classList.remove('popup-hidden');
    popupOverflow();
  }
}
// функция открытия popup
function openPopup(popup, elementBtn, event, elementInputOne, errorOne, elementInputTwo, errorTwo) {
  popup.classList.add('popup-hidden', true);
  popupOverflow();
  subBtnDisable(elementBtn);
  document.addEventListener('keydown', () => escPopup(event, elementInputOne, errorOne, elementInputTwo, errorTwo));
};
// функция закрытия popup
function closePopup(popup, event, elementInputOne, errorOne, elementInputTwo, errorTwo) {
  console.log('close')
  if (event.target === event.currentTarget) {
    console.log('close if')
    popup.classList.remove('popup-hidden');
    popupOverflow();
    hideInputError(elementInputOne, errorOne);
    hideInputError(elementInputTwo, errorTwo);
    document.removeEventListener('keydown', () => escPopup(event, elementInputOne, errorOne, elementInputTwo, errorTwo));
  }
};
// функция toogle вертикальной прокрутки
function popupOverflow() { 
  body.classList.toggle('body_overflow'); 
};
// функция disable submit button
function subBtnDisable(elementBtn) { 
  elementBtn.setAttribute('disabled', true); 
  elementBtn.classList.add('btn-disable'); 
};
// функция enable submit button
function subBtnEnable(elementBtn) { 
  elementBtn.removeAttribute('disabled'); 
  elementBtn.classList.remove('btn-disable'); 
};
// функция активности submit button
function subBtnActive(elementInputOne, elementInputTwo, elementBtn) { 
  if ((!elementInputOne.validity.valid) || (!elementInputTwo.validity.valid)) { 
    subBtnDisable(elementBtn); 
  } else {
    subBtnEnable(elementBtn); 
  }
};
// Функция добавления ошибки валидности
const showInputError = (elementInput, error) => {
  elementInput.classList.add('input_error');
  error.textContent = elementInput.validationMessage;
  error.classList.add('error-hidden');
};
// Функция удаления ошибки валидности
const hideInputError = (elementInput, error) => {
  elementInput.classList.remove('input_error');
  error.textContent = '';
  error.classList.remove('error-hidden', true);
};
// Функция проверки валидности поля
const isValid = (elementInputOne, error, elementBtn, elementInputTwo) => {
  subBtnActive(elementInputOne, elementInputTwo, elementBtn);
  if (!elementInputOne.validity.valid) {
    showInputError(elementInputOne, error);
  } else {
    hideInputError(elementInputOne, error);
  }
};







const escPopup = (evt, elementInputOne, errorOne, elementInputTwo, errorTwo) => {
  console.log(event.key)
  if (event.key === 'Escape') {
    console.log('esc')
    const popup = document.querySelector('.popup-hidden');
    closePopup(popup, evt, elementInputOne, errorOne, elementInputTwo, errorTwo);
  }
};





// слушатели popup-edit
popupEdit.addEventListener('click', () => closePopup(popupEdit, event, popupEditInputName, popupEditNameError, popupEditInputDesc, popupEditDescError));
profileButtonEdit.addEventListener('click', popupEditOpen);
popupEditButtonClose.addEventListener('click', () => closePopup(popupEdit, event, popupEditInputName, popupEditNameError, popupEditInputDesc, popupEditDescError));
popupEditForm.addEventListener('submit', formEditSubmitHandler);
popupEditInputName.addEventListener('input', () => isValid(popupEditInputName, popupEditNameError, popupEditSubBtn, popupEditInputDesc));
popupEditInputDesc.addEventListener('input', () => isValid(popupEditInputDesc, popupEditDescError, popupEditSubBtn, popupEditInputName));
// слушатели popup-add
popupAdd.addEventListener('click', () => closePopup(popupAdd, event, popupAddInputName, popupAddNameError, popupAddInputDesc, popupAddDescError));
buttonAdd.addEventListener('click', () => openPopup(popupAdd, popupAddSubBtn));
popupAddButtonClose.addEventListener('click', () => closePopup(popupAdd, event, popupAddInputName, popupAddNameError, popupAddInputDesc, popupAddDescError));
popupAddForm.addEventListener('submit', formAddSubmitHandler);
popupAddInputName.addEventListener('input', () => isValid(popupAddInputName, popupAddNameError, popupAddSubBtn, popupAddInputDesc));
popupAddInputDesc.addEventListener('input', () => isValid(popupAddInputDesc, popupAddDescError, popupAddSubBtn, popupAddInputName));
// слушатели popup-photo
popupPhoto.addEventListener('click', () => closeCard(popupPhoto, event));
popupPhotoCloseBtn.addEventListener('click', () => closeCard(popupPhoto, event));
// слушатель ESC