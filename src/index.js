import './pages/index.css';
import { Card } from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";

import Section from './scripts/Section.js';
import { PopupWithForm } from './scripts/PopupWithForm.js';
import { PopupWithImage } from './scripts/PopupWithImage.js';
import { UserInfo } from './scripts/UserInfo.js';

import {
  profileButtonEdit,
  buttonAdd,
  cardSelector,
  initialCards,
  validConfig,
  formValidators,
  formConfiguration,
  popupConfiguration,
  cardsContainerSelector,
  newPlacePopupSelector,
  newPlaceFormName,
  profileFormName,
  profileConfiguration,
  profilePopupSelector,
  viewPopupConfiguration,
  imagePopupSelector,
} from "./scripts/cards.js";

export const popupPhoto = document.querySelector('.popup-photo');
export const popupPhotoImage = document.querySelector('.popup-photo__image');
export const popupPhotoSubtitle = document.querySelector('.popup-photo__subtitle');

Array.from(document.forms).forEach(formElement => {
  formValidators[formElement.name] = new FormValidator(validConfig, formElement);
  formValidators[formElement.name].enableValidation();
});

const imagePopup = new PopupWithImage(imagePopupSelector, popupConfiguration, viewPopupConfiguration);
imagePopup.setEventListeners();

const createCard = (item) => {
  const card = new Card({ item }, cardSelector, viewPopup.open.bind(viewPopup));
  return card.generateCard();
}

const cardsContainer = new Section({
  items: initialCards.reverse(),
  renderer: createCard,
}, cardsContainerSelector);

cardsContainer.renderItems();

const handleCardSubmit = (item) => {
  cardsContainer.addItem(item);
};

const newCardPopup = new PopupWithForm(
  newPlacePopupSelector,
  newPlaceFormName,
  popupConfiguration,
  formConfiguration,
  formValidators[newPlaceFormName].deleteError,
  handleCardSubmit,
);
newCardPopup.setEventListeners();

const addCardSubmitHandler = () => {
  newCardPopup.open();
};

function handleProfileFormSubmit(data) {
  user.setUserInfo(data);
};

const user = new UserInfo(profileConfiguration);

const profilePopup = new PopupWithForm(
  profilePopupSelector,
  profileFormName,
  popupConfiguration,
  formConfiguration,
  formValidators[profileFormName].deleteError,
  handleProfileFormSubmit,
  user.getUserInfo,
);

profilePopup.setEventListeners();

const handleProfilePopupOpen = () => {
  profilePopup.open();
};

// // функция открытия popup-edit
// function openPopupEdit() {
//   popupEditInputName.value = profileTitle.textContent;
//   popupEditInputDesc.value = profileSubtitle.textContent;
//   openPopup(popupEdit);
//   formValidators[popupEditForm.name].deleteError();
// };
// // функция сохранения данных с popup-edit
// function handleFormEditSubmit(evt) {
//   evt.preventDefault();
//   profileTitle.textContent = popupEditInputName.value;
//   profileSubtitle.textContent = popupEditInputDesc.value;
//   closePopup();
// };
// // функция добавление карточки 
// function handleFormAddSubmit(event) {
//   event.preventDefault();
//   renderItem(elementNew, popupAddInputName.value, popupAddInputDesc.value)
//   event.target.reset();
//   closePopup();
//   formValidators[popupAddForm.name].disableButtonSubmit();
//   formValidators[popupAddForm.name].deleteError();
// };
// // функция открытия popup
// export function openPopup(popup) {
//   popup.classList.add('popup_opened', true);
//   togglePopupOverflow();
//   document.addEventListener('keydown', pressEscapeKey);
// };
// // функция закрытия popup
// function closePopup() {
//   const openedPopup = document.querySelector('.popup_opened');
//   openedPopup.classList.remove('popup_opened');
//   togglePopupOverflow();
//   document.removeEventListener('keydown', pressEscapeKey);
// };
// // функция toogle вертикального скролла
// function togglePopupOverflow() { 
//   body.classList.toggle('body_overflow');
// };
// // функция закрытия popup по кнопке Escape
// const pressEscapeKey = (evt) => {
//   if (evt.key === 'Escape') {
//     closePopup();
//   }
// };

profileButtonEdit.addEventListener('click', handleProfilePopupOpen);
buttonAdd.addEventListener('click', addCardSubmitHandler);