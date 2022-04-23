const qs = (selector) => document.querySelector(selector);
const editButton = qs('.profile-info__edit-button');
const popupEdit = qs('.popup-edit');
const closeButton = qs('.popup-edit__form_close-btn');
const bodyOverflow = qs('.body');
const like = document.querySelector('.element__item_like');

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

console.log(like);

like.addEventListener('click', function (event) {
  console.log('все ок');
  const likeActive = event.target.closest('.element__item_like');
  likeActive.classList.toggle('element__item_like-active');
});

function test() {
  console.log('test');
}

function popupToogle(popupObject) {
  popupObject.classList.toggle('hidden');
}

function popupOverflow() {
  bodyOverflow.classList.toggle('body__overflow');
}