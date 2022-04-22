const editButton = document.querySelector('.profile-info__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const closeButton = document.querySelector('.popup-edit__form_close-btn');

function popupToogle(popupObject) {
  popupObject.classList.toggle('hidden');
}

editButton.addEventListener('click', function (event) {
  event.preventDefault();
  popupToogle(popupEdit);
});

closeButton.addEventListener('click', function (event) {
  const currentPopup = event.target.closest('.popup-edit');
  currentPopup.classList.toggle('hidden');
});

popupEdit.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    popupToogle(popupEdit);
  }
});