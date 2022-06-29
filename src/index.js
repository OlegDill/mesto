import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { initialCards } from "../scripts/cards.js"

// // теперь картинки можно импортировать,
// // вебпак добавит в переменные правильные пути
// import addSmallSvg from '../images/add_16px.svg';
// import addBigSvg from '../images/add.svg';
// import closeSmallSvg from '../images/Close-Icon_20px.svg';
// import closeBigSvg from '../images/Close-Icon_32px.svg';
// import deleteSvg from '../images/delete.svg';
// import editLitle from '../images/edit_litle.svg';
// import edit from '../images/edit.svg';
// import likeActive from '../images/like_active.svg';
// import like from '../images/like.svg';
// import logo from '../images/logo.svg';
// import profilePhoto from '../images/profile-photo.jpg';
// import vector from '../images/Vector.svg';

// const whoIsTheGoat = [
//   // меняем исходные пути на переменные
//   { name: 'Michael Jordan', image: jordanImage },
//   { name: 'Lebron James', link: jamesImage },
//   { name: 'Kobe Bryant', link: bryantImage },
// ];

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
// функция создания карточек
const renderItem = (wrap, title, photo) => { 
  const card = new Card({name: title, link: photo}, '.temp');
  wrap.prepend(card.generateCard()); 
};
// добавление стартовых карточек
initialCards.forEach(({name, link}) => {
  renderItem(elementNew, name, link);
});
// функция открытия popup-edit
function openPopupEdit() {
  popupEditInputName.value = profileTitle.textContent;
  popupEditInputDesc.value = profileSubtitle.textContent;
  openPopup(popupEdit);
  formValidators[popupEditForm.name].deleteError();
};
// функция сохранения данных с popup-edit
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupEditInputName.value;
  profileSubtitle.textContent = popupEditInputDesc.value;
  closePopup();
};
// функция добавление карточки 
function handleFormAddSubmit(event) {
  event.preventDefault();
  renderItem(elementNew, popupAddInputName.value, popupAddInputDesc.value)
  event.target.reset();
  closePopup();
  formValidators[popupAddForm.name].disableButtonSubmit();
  formValidators[popupAddForm.name].deleteError();
};
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