const qs = (selector) => document.querySelector(selector);
const editButton = qs('.profile-info__edit-button');
const popupEdit = qs('.popup-edit');
const closeButton = qs('.popup-edit__form_close-btn');
const bodyOverflow = qs('.body');
const like = document.querySelector('.element__item_like');
const nameInput = qs('.popup-edit__form_input-name');
const descInput = qs('.popup-edit__form_input-desc');
const subBtn = qs('.popup-edit__form_sub-btn');
const nameProfile = qs('.profile-info__caption_title');
const descProfile = qs('.profile-info__caption_subtitle');

editButton.addEventListener('click', function (event) {
  event.preventDefault();
  popupToogle(popupEdit);
  popupOverflow()
  nameInput.value = nameProfile.textContent;
  descInput.value = descProfile.textContent;
  subBtnDisable()
});

closeButton.addEventListener('click', function (event) {
  const currentPopup = event.target.closest('.popup-edit');
  currentPopup.classList.toggle('hidden');
  popupOverflow()
});

popupEdit.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    popupToogle(popupEdit);
    popupOverflow()
  }
});

like.addEventListener('click', function (event) {
  console.log('все ок');
  const likeActive = event.target.closest('.element__item_like');
  likeActive.classList.toggle('element__item_like-active');
});

subBtn.addEventListener('click', formSubmitHandler);

function test() {
  console.log('test');
}

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
    popupOverflow()
}

nameInput.addEventListener('input', subBtnActive);
descInput.addEventListener('input', subBtnActive);

function subBtnActive() {
  if (nameInput.value.length > 1 && descInput.value.length > 1) {
    subBtnEnable();
  } else {
    subBtnDisable()
  }
  if (nameInput.value === nameProfile.textContent && descInput.value === descProfile.textContent) {
    subBtnDisable()
  } else {
    subBtnEnable();
  }
}

function subBtnDisable() {
  console.log('кнопка выключена');
  subBtn.setAttribute('disabled', true);
  subBtn.classList.add('popup-edit__form_sub-btn_disable');
}

function subBtnEnable() {
  console.log('кнопка включена');
  subBtn.removeAttribute('disabled');
  subBtn.classList.remove('popup-edit__form_sub-btn_disable');
}