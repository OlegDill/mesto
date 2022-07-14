export const initialCards = [
  {
    name: 'Республика Коми',
    link: 'https://www.russiadiscovery.ru/upload/files/files/Puteshestvie-na-Ural%281%29.jpg'
  },
  {
    name: 'Алтай',
    link: 'https://www.russiadiscovery.ru/upload/files/files/%D0%90%D0%BB%D1%82%D0%B0%D0%B8%CC%86-%281%29%281%29.jpg'
  },
  {
    name: 'Якутия',
    link: 'https://www.russiadiscovery.ru/upload/files/files/%D0%9B%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B5_%D1%81%D1%82%D0%BE%D0%BB%D0%B1%D1%8B.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://www.russiadiscovery.ru/upload/files/files/Trekking-na-Kamchatke%281%29.jpg'
  },
  {
    name: 'Карелия',
    link: 'https://www.russiadiscovery.ru/upload/files/files/%D0%A0%D1%83%D1%81%D0%BA%D0%B5%D0%B0%D0%BB%D0%B0.jpg'
  },
  {
    name: 'Карачаевск',
    link: 'https://i.yapx.ru/R2zrO.png'
  }
];

export const profileButtonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const cardSelector = document.querySelector('.element');

export const validConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__sub-btn',
  inactiveButtonClass: 'popup__sub-btn_disabled',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__error_visible'
};

export const formValidators = {};

export const formConfiguration = {
  inputSelector: 'popup__input',
  submitBtnSelector: 'popup__sub-btn',
  formSelector: 'popup__form',
}

export const popupConfiguration = {
  activeModifier: 'popup_opened',
  closeBtnSelector: 'popup__close',
}

export const profileConfiguration = {
  titleSelector: 'profile__title',
  jobSelector: 'profile__subtitle',
}

export const viewPopupConfiguration = {
  imageSelector: 'popup-photo__image',
  captionSelector: 'popup-photo__subtitle',
}

export const cardsContainerSelector = 'elements';
export const newPlacePopupSelector = 'popup-add';
export const profilePopupSelector = 'popup-edit';
export const imagePopupSelector = 'popup-photo';
export const newPlaceFormName = 'profile-photo_form';
export const profileFormName = 'profile-edit_form';