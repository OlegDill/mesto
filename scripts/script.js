const qs = (selector) => document.querySelector(selector);
const editButton = qs('.profile__edit-button');
const popupEdit = qs('.popup');
const closeButton = qs('.popup__close-btn');
const formElement = qs('.popup__form'); 
const nameInput = qs('.popup__input_name');
const descInput = qs('.popup__input_desc');
const nameProfile = qs('.profile__title');
const descProfile = qs('.profile__subtitle');
const addButton = qs('.profile__add-button');
const popupAdd = qs('.popup-add');
const closeButtonPopupAdd = qs('.popup-add__close-btn');
const formAddElement = qs('.popup-add__form');
const elementPhoto = document.querySelectorAll('.element__photo');
const elementTitle = document.querySelectorAll('.element__title');
const newElement = qs('.elements');
const elementItem = document.querySelectorAll('.element');
const nameInputAdd = qs('.popup-add__input_name');
const descInputAdd = qs('.popup-add__input_desc');
const likes = document.querySelectorAll('.element__like');
const deleteButton = document.querySelectorAll('.element__delete');
const popupPhoto = qs('.popup-photo');
const closeButtonPopupPhoto = qs('.popup-photo__close-btn');
const popupPhotoImage = qs('.popup-photo__image');
const popupPhotoSubtitle = qs('.popup-photo__subtitle');
const initialCards = [
  {
    name: 'Карачаевск',
    link: 'https://i.yapx.ru/R2zrO.png'
  },
  {
    name: 'Алтай',
    link: 'https://i.yapx.ru/R2wZQ.jpg'
  },
  {
    name: 'Якутия',
    link: 'https://i.yapx.ru/R2wZR.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://i.yapx.ru/R2wZS.jpg'
  },
  {
    name: 'Карелия',
    link: 'https://i.yapx.ru/R2wZT.jpg'
  },
  {
    name: 'Республика Коми',
    link: 'https://i.yapx.ru/R2wZV.jpg'
  }
];
// функция загрузки страницы
function ready() {
  for (let i = 0; i < elementPhoto.length; i++) {
    elementPhoto[i].src = initialCards[i].link;
    elementTitle[i].textContent = initialCards[i].name;
  }
}
// функция открытия popup-edit
function popupEditOpen() {
  nameInput.value = nameProfile.textContent;
  descInput.value = descProfile.textContent;
  popupEdit.classList.add('popup_hidden', true);
};
// функция закрытия popup-edit
function popupEditClose() {
  popupEdit.classList.remove('popup_hidden');
}
// функция сохранения данных с popup-edit
function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  descProfile.textContent = descInput.value;
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
// добавление карточки 
function formAddSubmitHandler(evt) {
  evt.preventDefault();
  newElement.insertAdjacentHTML('afterbegin', 
  `<article class="element">
    <img class="element__photo" src="${descInputAdd.value}" alt="фото места" />
    <button type="button" aria-label="Удалить" class="element__delete"></button>
    <div class="element__item">
      <h2 class="element__title">${nameInputAdd.value}</h2>
      <button type="button" aria-label="Лайк" class="element__like"></button>
    </div>
  </article>`);
  descInputAdd.value = '';
  nameInputAdd.value = '';
  popupAddClose();
}
// лайки карточкам
for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", function() {
    likes[i].classList.toggle('element__like_active');
  });
}
// удаление карточек
for (let i = 0; i < elementItem.length; i++) {
  deleteButton[i].addEventListener("click", function() {
    elementItem[i].remove();
  });
}
// открытие popup-photo
for (let i = 0; i < elementItem.length; i++) {
  elementPhoto[i].addEventListener('click', function() {
    popupPhoto.classList.add('popup-photo_hidden', true);
    popupPhotoImage.src = elementPhoto[i].src;
    popupPhotoSubtitle.textContent = elementTitle[i].textContent;
  });
}
// закрытие popup-photo
function popupPhotoClose() {
  popupPhoto.classList.remove('popup-photo_hidden');
}
// слушатель загрузки страницы
document.addEventListener("DOMContentLoaded", ready);
// слушатели popup-edit
editButton.addEventListener('click', popupEditOpen);
closeButton.addEventListener('click', popupEditClose);
formElement.addEventListener('submit', formSubmitHandler);
// слушатели popup-add
addButton.addEventListener('click', popupAddOpen)
closeButtonPopupAdd.addEventListener('click', popupAddClose);
formAddElement.addEventListener('submit', formAddSubmitHandler);
// слушатели popup-photo
closeButtonPopupPhoto.addEventListener('click', popupPhotoClose);