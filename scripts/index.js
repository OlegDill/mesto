const profileButtonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const popupEditCloseBtn = document.querySelector('.popup-edit__close-btn');
const popupEditForm = document.querySelector('.popup-edit__form'); 
const popupEditNameInput = document.querySelector('.popup-edit__input_name');
const popupEditDescInput = document.querySelector('.popup-edit__input_desc');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const buttonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const popupAddCloseBtn = document.querySelector('.popup-add__close-btn');
const popupAddForm = document.querySelector('.popup-add__form');
const elementPhoto = document.querySelectorAll('.element__photo');
const elementTitle = document.querySelectorAll('.element__title');
const elementNew = document.querySelector('.elements');
const elementItem = document.querySelectorAll('.element');
const popupAddInputName = document.querySelector('.popup-add__input_name');
const popupAddInputDesc = document.querySelector('.popup-add__input_desc');
const elementLikeButton = document.querySelectorAll('.element__like');
const elementDeleteButton = document.querySelectorAll('.element__delete');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoCloseBtn = document.querySelector('.popup-photo__close-btn');
const popupPhotoImage = document.querySelector('.popup-photo__image');
const popupPhotoSubtitle = document.querySelector('.popup-photo__subtitle');
// функция загрузки страницы
function ready() {
  for (let i = 0; i < elementPhoto.length; i++) {
    elementPhoto[i].src = initialCards[i].link;
    elementTitle[i].textContent = initialCards[i].name;
  }
}
// функция открытия popup-edit
function popupEditOpen() {
  popupEditNameInput.value = profileTitle.textContent;
  popupEditDescInput.value = profileSubtitle.textContent;
  popupEdit.classList.add('popup-edit_hidden', true);
};
// функция закрытия popup-edit
function popupEditClose() {
  popupEdit.classList.remove('popup-edit_hidden');
}
// функция сохранения данных с popup-edit
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupEditNameInput.value;
  profileSubtitle.textContent = popupEditDescInput.value;
  popupEditClose();
}
// открытие popup-add
function popupAddOpen() {
  popupAdd.classList.add('popup-add_hidden', true);
}
// закрытие popup-add
function popupAddClose() {
  popupAdd.classList.remove('popup-add_hidden');
}
// функция добавление карточки 
function formAddSubmitHandler(evt, el) {
  evt.preventDefault();
  let newArticle = document.createElement(`article`);
  newArticle.className = 'element';
  newArticle.innerHTML = `<img class="element__photo" src="${popupAddInputDesc.value}" alt="фото места" />
                          <button type="button" aria-label="Удалить" class="element__delete"></button>
                          <div class="element__item">
                            <h2 class="element__title">${popupAddInputName.value}</h2>
                            <button type="button" aria-label="Лайк" class="element__like"></button>
                          </div>`;
  // слушатель лайков новых карточек
  newArticle.querySelector('.element__like').addEventListener('click', likeCard);
  // слушатель удаления новых карточек
  newArticle.querySelector('.element__delete').addEventListener('click', deleteCard);
  // слушатель фото новых карточек
  newArticle.querySelector('.element__photo').addEventListener('click', openCard);
  // добавление новой карточки
  elementNew.insertBefore(newArticle, elementNew.firstChild);
  // очистка input и закрытие формы
  popupAddInputDesc.value = '';
  popupAddInputName.value = '';
  popupAddClose();
}
// функция лайков карточкам
function likeCard(evt) { 
  evt.target.classList.toggle('element__like_active');
}
// слушатель лайков стартовым карточкам
for (let i = 0; i < elementItem.length; i++) {
  elementLikeButton[i].addEventListener("click", likeCard)
};
// функция удаления карточек
function deleteCard(evt) { 
  evt.target.closest('.element').remove();
};
// слушатель удаления старовым карточкам
for (let i = 0; i < elementItem.length; i++) {
  elementDeleteButton[i].addEventListener("click", deleteCard)
}
// открытие popup-photo
function openCard(evt) {
  console.log(evt.target.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.textContent);
  popupPhotoImage.src = evt.target.closest('.element__photo').src;
  popupPhotoSubtitle.textContent = evt.target.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.textContent;
  popupPhoto.classList.add('popup-photo_hidden', true);
}
// слушатель фото стартовых карточек
for (let i = 0; i < elementItem.length; i++) {
  elementPhoto[i].addEventListener('click', openCard)
}
// закрытие popup-photo
function popupPhotoClose() {
  popupPhoto.classList.remove('popup-photo_hidden');
}
// слушатель загрузки страницы
document.addEventListener("DOMContentLoaded", ready);
// слушатели popup-edit
profileButtonEdit.addEventListener('click', popupEditOpen);
popupEditCloseBtn.addEventListener('click', popupEditClose);
popupEditForm.addEventListener('submit', formSubmitHandler);
// слушатели popup-add
buttonAdd.addEventListener('click', popupAddOpen)
popupAddCloseBtn.addEventListener('click', popupAddClose);
popupAddForm.addEventListener('submit', formAddSubmitHandler);
// слушатели popup-photo
popupPhotoCloseBtn.addEventListener('click', popupPhotoClose);