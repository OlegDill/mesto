const config = {
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__sub-btn',
  inactiveButtonClass: 'popup__sub-btn_disabled',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage, inputErrorModifier, errorSelector) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorModifier);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorSelector);
};

const hideInputError = (formElement, inputElement, inputErrorModifier, errorSelector) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorModifier);
  errorElement.classList.remove(errorSelector);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, inputErrorModifier, errorSelector) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorModifier, errorSelector);
  } else {
    hideInputError(formElement, inputElement, inputErrorModifier, errorSelector);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toogleButtonState = (inputList, saveButton, disableSelector) => { 
  if (hasInvalidInput(inputList)) { 
    saveButton.disabled = true; 
    saveButton.classList.add(disableSelector); 
  } else {
    saveButton.disabled = false; 
    saveButton.classList.remove(disableSelector);   
  }
};

const setEventListeners = (formElement, validConfig) => {
  const {  
    inputSelector,
    submitButtonSelector,
    errorClass,
    inputErrorClass,
    inactiveButtonClass,
  } = validConfig;
  const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
  const saveButton = formElement.querySelector(`.${submitButtonSelector}`);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toogleButtonState(inputList, saveButton, inactiveButtonClass);
    });
  });
};

const enableValidation = (validConfig) => {
  const {formSelector} = validConfig;
  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, validConfig);
  });
};

enableValidation(config);