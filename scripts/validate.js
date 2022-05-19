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
  elementInput.classList.add('input_error');
  error.textContent = elementInput.validationMessage;
  error.classList.add('error-hidden');
};
// Функция удаления ошибки валидности
const hideInputError = (elementInput, error) => {
  elementInput.classList.remove('input_error');
  error.textContent = '';
  error.classList.remove('error-hidden', true);
};