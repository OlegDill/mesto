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
const popups = document.querySelectorAll('.popup')
// обработчики клика по оверлею и крестику
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
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
  hideInputError(popupEditInputName, popupEditNameError);
  hideInputError(popupEditInputDesc, popupEditDescError);
  popupEditInputName.value = profileTitle.textContent;
  popupEditInputDesc.value = profileSubtitle.textContent;
  openPopup(popupEdit, popupEditSubBtn);
};
// функция сохранения данных с popup-edit
function handlerFormEditSubmit(popup) {
  event.preventDefault();
  profileTitle.textContent = popupEditInputName.value;
  profileSubtitle.textContent = popupEditInputDesc.value;
  closePopup(popup);
};
// функция добавление карточки 
function handlerFormAddSubmit(popup) {
  event.preventDefault();
  renderItem(elementNew, popupAddInputName.value, popupAddInputDesc.value)
  event.target.reset();
  closePopup(popup);
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
  popupPhoto.classList.add('popup_opened', true);
  popupOverflow();
  document.addEventListener('keydown', pressEscapeKey);
};
// функция закрытия popup-photo
function closeCard(popup, event) {
  if (event.target === event.currentTarget || event.key === 'Escape') {
    popup.classList.remove('popup_opened');
    popupOverflow();
    document.removeEventListener('keydown', pressEscapeKey);
  }
};
// функция открытия popup
function openPopup(popup, elementBtn) {
  popup.classList.add('popup_opened', true);
  popupOverflow();
  subBtnDisable(elementBtn);
  document.addEventListener('keydown', pressEscapeKey);
};
// функция закрытия popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
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
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};
// слушатели popup-edit
profileButtonEdit.addEventListener('mousedown', openPopupEdit);
popupEditForm.addEventListener('submit', () => handlerFormEditSubmit(popupEdit));
popupEditInputName.addEventListener('input', () => isValid(popupEditInputName, popupEditNameError, popupEditSubBtn, popupEditInputDesc));
popupEditInputDesc.addEventListener('input', () => isValid(popupEditInputDesc, popupEditDescError, popupEditSubBtn, popupEditInputName));
// слушатели popup-add
buttonAdd.addEventListener('mousedown', () => openPopup(popupAdd, popupAddSubBtn));
popupAddForm.addEventListener('submit', () => handlerFormAddSubmit(popupAdd));
popupAddInputName.addEventListener('input', () => isValid(popupAddInputName, popupAddNameError, popupAddSubBtn, popupAddInputDesc));
popupAddInputDesc.addEventListener('input', () => isValid(popupAddInputDesc, popupAddDescError, popupAddSubBtn, popupAddInputName));