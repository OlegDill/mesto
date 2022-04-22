let editButton = document.querySelector('.profile-info__edit-button');
let popupEdit = document.querySelector('.popup-edit');
let closeButton = document.querySelector('.popup-edit__form_close-btn')

function popupOpen() {
  popupEdit.classList.toggle('hidden');
 }

 function popupClose() {
  popupEdit.classList.toggle('hidden');
 }

editButton.addEventListener('click', popupOpen); 
closeButton.addEventListener('click', popupClose); 