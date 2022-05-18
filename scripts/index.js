const profileButtonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const popupEditButtonClose = document.querySelector('.popup-edit__close-btn');
const popupEditForm = document.querySelector('.popup-edit__form'); 
const popupEditInputName = document.querySelector('.popup-edit__input_name');
const popupEditInputDesc = document.querySelector('.popup-edit__input_desc');
const popupEditSubBtn = document.querySelector('.popup-edit__sub-btn');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const popupAddButtonClose = document.querySelector('.popup-add__close-btn');
const popupAddForm = document.querySelector('.popup-add__form');
const elementNew = document.querySelector('.elements');
const popupAddInputName = document.querySelector('.popup-add__input_name');
const popupAddInputDesc = document.querySelector('.popup-add__input_desc');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoCloseBtn = document.querySelector('.popup-photo__close-btn');
const popupPhotoImage = document.querySelector('.popup-photo__image');
const popupPhotoSubtitle = document.querySelector('.popup-photo__subtitle');
const template = document.querySelector('.temp');
const body = document.querySelector('.body');
// функция toogle вертикальной прокрутки
function popupOverflow() { 
    body.classList.toggle('body_overflow'); 
};
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
  openPopup(popupEdit);
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
  openPopup(popupPhoto);
};
// функция открытия popup
function openPopup(popup) {
  popup.classList.add('popup-hidden', true);
  popupOverflow();
  subBtnDisable();
};
// функция закрытия popup
function closePopup(popup, event) {
  if (event.target === event.currentTarget) {
    popup.classList.remove('popup-hidden');
    popupOverflow();
  }
};





function subBtnDisable() { 
  popupEditSubBtn.setAttribute('disabled', true); 
  popupEditSubBtn.classList.add('popup-edit__sub-btn_disable'); 
};

function subBtnEnable() { 
  popupEditSubBtn.removeAttribute('disabled'); 
  popupEditSubBtn.classList.remove('popup-edit__sub-btn_disable'); 
};

function subBtnActive() { 
  if (((popupEditInputName.value === profileTitle.textContent) && (popupEditInputDesc.value === profileSubtitle.textContent)) || ((!popupEditInputName.validity.valid) || (!popupEditInputDesc.validity.valid))) { 
    subBtnDisable(); 
  } else { 
    subBtnEnable(); 
  }
};




// слушатели popup-edit
popupEdit.addEventListener('click', () => closePopup(popupEdit, event));
profileButtonEdit.addEventListener('click', popupEditOpen);
popupEditButtonClose.addEventListener('click', () => closePopup(popupEdit, event));
popupEditForm.addEventListener('submit', formEditSubmitHandler);
popupEditInputName.addEventListener('input', subBtnActive); 
popupEditInputDesc.addEventListener('input', subBtnActive); 
// слушатели popup-add
popupAdd.addEventListener('click', () => closePopup(popupAdd, event));
buttonAdd.addEventListener('click', () => openPopup(popupAdd));
popupAddButtonClose.addEventListener('click', () => closePopup(popupAdd, event));
popupAddForm.addEventListener('submit', formAddSubmitHandler);
// слушатели popup-photo
popupPhoto.addEventListener('click', () => closePopup(popupPhoto, event));
popupPhotoCloseBtn.addEventListener('click', () => closePopup(popupPhoto, event));