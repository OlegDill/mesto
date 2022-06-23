import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const profileButtonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const popupEditForm = document.querySelector('.popup-edit__form');
const popupEditInputName = document.querySelector('.popup-edit__input-name');
const popupEditInputDesc = document.querySelector('.popup-edit__input-desc');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const popupAddForm = document.querySelector('.popup-add__form');
const popupAddSubBtn = document.querySelector('.popup-add__sub-btn');
const elementNew = document.querySelector('.elements');
const popupAddInputName = document.querySelector('.popup-add__input-name');
const popupAddInputDesc = document.querySelector('.popup-add__input-desc');
export const popupPhoto = document.querySelector('.popup-photo');
export const popupPhotoImage = document.querySelector('.popup-photo__image');
export const popupPhotoSubtitle = document.querySelector('.popup-photo__subtitle');
const body = document.querySelector('.body');
const popups = document.querySelectorAll('.popup')

const initialCards = [
  {
    name: 'Республика Коми',
    link: 'https://www.russiadiscovery.ru/upload/files/files/Puteshestvie-na-Ural%281%29.jpg'
  },
  {
    name: 'Алтай',
    link: 'https://www.russiadiscovery.ru/upload/files/files/%D0%90%D0%BB%D1%82%D0%B0%D0%B8%CC%86-%281%29%281%29.jpg'
  },
  {
    name: 'Якутия',
    link: 'https://www.russiadiscovery.ru/upload/files/files/%D0%9B%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B5_%D1%81%D1%82%D0%BE%D0%BB%D0%B1%D1%8B.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://www.russiadiscovery.ru/upload/files/files/Trekking-na-Kamchatke%281%29.jpg'
  },
  {
    name: 'Карелия',
    link: 'https://www.russiadiscovery.ru/upload/files/files/%D0%A0%D1%83%D1%81%D0%BA%D0%B5%D0%B0%D0%BB%D0%B0.jpg'
  },
  {
    name: 'Карачаевск',
    link: 'https://i.yapx.ru/R2zrO.png'
  }
];

const validConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__sub-btn',
  inactiveButtonClass: 'popup__sub-btn_disabled',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__error_visible'
};

const formValidators = {};

Array.from(document.forms).forEach(formElement => {
  formValidators[formElement.name] = new FormValidator(validConfig, formElement);
  formValidators[formElement.name].enableValidation();
});

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
// // функция создания новой карточки
// const getItemElement = (title, photo) => {
//   const newItemElement = template.content.cloneNode(true);
//   const newItemPhoto = newItemElement.querySelector('.element__photo');
//   const newItemTitle = newItemElement.querySelector('.element__title');
//   newItemTitle.textContent = title;
//   newItemPhoto.src = photo;
//   newItemPhoto.alt = 'Фото ' + title;
//   const elementButtonLike = newItemElement.querySelector('.element__like');
//   const elementButtonDelete = newItemElement.querySelector('.element__delete');
//   elementButtonLike.addEventListener('click', likeCard);
//   elementButtonDelete.addEventListener('click', deleteCard);
//   newItemPhoto.addEventListener('click', () => openCard(title, photo));
//   return newItemElement;
// };
// функция добавления карточек
const renderItem = (wrap, title, photo) => {
  const card = new Card(title, photo, '.temp');
  wrap.prepend(card.generateCard());
};
// добавление стартовых карточек
initialCards.forEach((name, link) => {
  const card = new Card(name, link, '.element');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
  // renderItem(elementNew, title.name, title.link)
});
// функция открытия popup-edit
function openPopupEdit() {
  popupEditInputName.value = profileTitle.textContent;
  popupEditInputDesc.value = profileSubtitle.textContent;
  openPopup(popupEdit);
  formValidators[popupEditForm.name].deleteError();
};
// функция сохранения данных с popup-edit
function handleFormEditSubmit() {
  profileTitle.textContent = popupEditInputName.value;
  profileSubtitle.textContent = popupEditInputDesc.value;
  closePopup();
};
// функция добавление карточки 
function handleFormAddSubmit(event) {
  renderItem(elementNew, popupAddInputName.value, popupAddInputDesc.value)
  event.target.reset();
  closePopup();
  popupAddSubBtn.disabled = true; 
  popupAddSubBtn.classList.add('popup__sub-btn_disabled');   
};
// функция лайков карточкам
// function likeCard(evt) { 
//   evt.target.classList.toggle('element__like_active');
// };
// функция удаления карточек
// function deleteCard(evt) { 
//   evt.target.closest('.element').remove();
// };
// функция открытия popup-photo
// function openCard(title, photo) {
//   popupPhotoImage.src = photo;
//   popupPhotoImage.alt = 'Фото ' + title;
//   popupPhotoSubtitle.textContent = title;
//   openPopup(popupPhoto);
// };
// функция открытия popup
export function openPopup(popup) {
  popup.classList.add('popup_opened', true);
  togglePopupOverflow();
  document.addEventListener('keydown', pressEscapeKey);
};
// функция закрытия popup
function closePopup() {
  const openedPopup = document.querySelector('.popup_opened');
  openedPopup.classList.remove('popup_opened');
  togglePopupOverflow();
  document.removeEventListener('keydown', pressEscapeKey);
};
// функция toogle вертикального скролла
function togglePopupOverflow() { 
  body.classList.toggle('body_overflow');
};
// функция закрытия popup по кнопке Escape
const pressEscapeKey = (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
  }
};
// слушатели
profileButtonEdit.addEventListener('click', openPopupEdit);
buttonAdd.addEventListener('click', () => openPopup(popupAdd));
popupEditForm.addEventListener('submit', handleFormEditSubmit);
popupAddForm.addEventListener('submit', handleFormAddSubmit);

// enableValidation(config);