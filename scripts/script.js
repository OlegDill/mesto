const qs = (selector) => document.querySelector(selector);
const editButton = qs('.profile__edit-button');
const popupEdit = qs('.popup');
const closeButton = qs('.popup-edit__close-btn');
const formElement = qs('.popup-edit'); 
const nameInput = qs('.popup-edit__input-name');
const descInput = qs('.popup-edit__input-desc');
const nameProfile = qs('.profile__title');
const descProfile = qs('.profile__subtitle');

function popupEditOpen() {
  nameInput.value = nameProfile.textContent;
  descInput.value = descProfile.textContent;
  popupEdit.classList.add('hidden');
};

function popupEditClose() {
  popupEdit.classList.remove('hidden');
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