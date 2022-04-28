const qs = (selector) => document.querySelector(selector);
const likes = document.querySelectorAll('.element__like');
const editButton = qs('.profile__edit-button');
const popupEdit = qs('.popup');
const closeButton = qs('.popup-edit__close-btn');
const bodyOverflow = qs('.body');
const nameInput = qs('.popup-edit__input-name');
const descInput = qs('.popup-edit__input-desc');
const subBtn = qs('.popup-edit__sub-btn');
const nameProfile = qs('.profile__title');
const descProfile = qs('.profile__subtitle');

editButton.addEventListener('click', function (event) {
  event.preventDefault();
  popupToogle(popupEdit);
  popupOverflow();
  nameInput.value = nameProfile.textContent;
  descInput.value = descProfile.textContent;
  subBtnDisable();
});

closeButton.addEventListener('click', function (event) {
  const currentPopup = event.target.closest('.popup');
  currentPopup.classList.toggle('hidden');
  popupOverflow();
});

popupEdit.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    popupToogle(popupEdit);
    popupOverflow();
  }
});

subBtn.addEventListener('click', formSubmitHandler);
nameInput.addEventListener('input', subBtnActive);
descInput.addEventListener('input', subBtnActive);

function popupToogle(popupObject) {
  popupObject.classList.toggle('hidden');
}

function popupOverflow() {
  bodyOverflow.classList.toggle('body__overflow');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    descProfile.textContent = descInput.value;
    popupToogle(popupEdit);
}

function subBtnActive() {
  if (((nameInput.value.length < 2) || (descInput.value.length < 2)) || ((nameInput.value === nameProfile.textContent) && (descInput.value === descProfile.textContent)) || (nameInput.value[nameInput.value.length - 1] === ' ')) {
    subBtnDisable();
  } else {
    subBtnEnable();
  }
}

function subBtnDisable() {
  console.log('btn disable');
  subBtn.setAttribute('disabled', true);
  subBtn.classList.add('popup-edit__sub-btn_disable');
}

function subBtnEnable() {
  console.log('btn enable');
  subBtn.removeAttribute('disabled');
  subBtn.classList.remove('popup-edit__sub-btn_disable');
}

for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", function() {
    likes[i].classList.toggle('element__like_active');
  });
}