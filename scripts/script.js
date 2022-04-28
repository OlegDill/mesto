const qs = (selector) => document.querySelector(selector);
const editButton = qs('.profile__edit-button');
const popupEdit = qs('.popup');
const closeButton = qs('.popup-edit__close-btn');
const formElement = qs('.popup-edit'); 
const nameInput = qs('.popup-edit__input-name');
const descInput = qs('.popup-edit__input-desc');
const nameProfile = qs('.profile__title');
const descProfile = qs('.profile__subtitle');

function inputText() {
  nameInput.value = nameProfile.textContent;
  descInput.value = descProfile.textContent;
};

function popupToogle() {
  popupEdit.classList.toggle('hidden');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  descProfile.textContent = descInput.value;
  popupToogle();
}

editButton.addEventListener('click', inputText);
editButton.addEventListener('click', popupToogle);
closeButton.addEventListener('click', popupToogle);
formElement.addEventListener('submit', formSubmitHandler);