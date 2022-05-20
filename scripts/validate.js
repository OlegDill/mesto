// Функция проверки валидности поля
const isValid = (elementInputOne, error, elementBtn, elementInputTwo) => {
  subBtnActive(elementInputOne, elementInputTwo, elementBtn);
  if (!elementInputOne.validity.valid) {
    showInputError(elementInputOne, error);
  } else {
    hideInputError(elementInputOne, error);
  }
};
// Функция добавления ошибки валидности
const showInputError = (elementInput, error) => {
  elementInput.classList.add('popup__input_type-error');
  error.textContent = elementInput.validationMessage;
  error.classList.add('popup__error_visible');
};
// // Функция удаления ошибки валидности
const hideInputError = (elementInput, error) => {
  elementInput.classList.remove('popup__input_type-error');
  error.textContent = '';
  error.classList.remove('popup__error_visible', true);
};
// функция проверки активности submit button
function subBtnActive(elementInputOne, elementInputTwo, elementBtn) { 
  if ((!elementInputOne.validity.valid) || (!elementInputTwo.validity.valid)) { 
    subBtnDisable(elementBtn); 
  } else {
    subBtnEnable(elementBtn); 
  }
};
// функция disable submit button
function subBtnDisable(elementBtn) { 
  elementBtn.setAttribute('disabled', true); 
  elementBtn.classList.add('popup__button_disabled'); 
};
// функция enable submit button
function subBtnEnable(elementBtn) { 
  elementBtn.removeAttribute('disabled'); 
  elementBtn.classList.remove('popup__button_disabled'); 
};





// const enableValidation = (obj) => {
//   console.log(obj);
// };

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__sub-btn',
//   inactiveButtonClass: '.popup__button_disabled',
//   inputErrorClass: '.popup__input_type-error',
//   errorClass: '.popup__error'
// });