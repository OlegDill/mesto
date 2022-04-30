const qs = (selector) => document.querySelector(selector);
const editButton = qs('.profile__edit-button');
const popupEdit = qs('.popup');
const closeButton = qs('.popup__close-btn');
const formElement = qs('.popup__form'); 
const nameInput = qs('.popup__input_name');
const descInput = qs('.popup__input_desc');
const nameProfile = qs('.profile__title');
const descProfile = qs('.profile__subtitle');

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

editButton.addEventListener('click', popupEditOpen);
closeButton.addEventListener('click', popupEditClose);
formElement.addEventListener('submit', formSubmitHandler);