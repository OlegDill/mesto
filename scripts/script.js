const qs = (selector) => document.querySelector(selector);
const editButton = qs('.profile-info__edit-button');
const popupEdit = qs('.popup-edit');
const closeButton = qs('.popup-edit__form_close-btn');
const bodyOverflow = qs('.body');

editButton.addEventListener('click', function (event) {
  event.preventDefault();
  popupToogle(popupEdit);
  popupOverflow()
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

function popupToogle(popupObject) {
  popupObject.classList.toggle('hidden');
}

function popupOverflow() {
  bodyOverflow.classList.toggle('body__overflow');
}