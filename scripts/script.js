const qs = (selector) => document.querySelector(selector);
const editButton = qs('.profile__edit-button');
const popupEdit = qs('.popup');
const closeButton = qs('.popup__close-btn');
const formElement = qs('.popup__form'); 
const nameInput = qs('.popup__input_name');
const descInput = qs('.popup__input_desc');
const nameProfile = qs('.profile__title');
const descProfile = qs('.profile__subtitle');
const image = document.querySelectorAll('.element__photo');
const title = document.querySelectorAll('.element__title');
const initialCards = [
  {
    name: 'Карачаевск',
    link: 'https://i.yapx.ru/R2wZU.jpg'
  },
  {
    name: 'Алтай',
    link: 'https://i.yapx.ru/R2wZQ.jpg'
  },
  {
    name: 'Якутия',
    link: 'https://i.yapx.ru/R2wZR.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://i.yapx.ru/R2wZS.jpg'
  },
  {
    name: 'Карелия',
    link: 'https://i.yapx.ru/R2wZT.jpg'
  },
  {
    name: 'Республика Коми',
    link: 'https://i.yapx.ru/R2wZV.jpg'
  }
];

function ready() {
  for (let i = 0; i < image.length; i++) {
    image[i].src = initialCards[i].link;
    title[i].textContent = initialCards[i].name;
  }
}

function popupEditOpen() {
  nameInput.value = nameProfile.textContent;
  descInput.value = descProfile.textContent;
  popupEdit.classList.add('popup_hidden', true);
};

function popupEditClose() {
  popupEdit.classList.remove('popup_hidden');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  descProfile.textContent = descInput.value;
  popupEditClose();
}

document.addEventListener("DOMContentLoaded", ready);
editButton.addEventListener('click', popupEditOpen);
closeButton.addEventListener('click', popupEditClose);
formElement.addEventListener('submit', formSubmitHandler);