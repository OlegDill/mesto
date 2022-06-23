export class FormValidator {
  constructor(validConfig, formElement) {
    this._formSelector = validConfig.formSelector
    this._inputSelector = validConfig.inputSelector;
    this._submitButtonSelector = validConfig.submitButtonSelector;
    this._inactiveButtonClass = validConfig.inactiveButtonClass;
    this._inputErrorClass = validConfig.inputErrorClass;
    this._errorClass = validConfig.errorClass;
    this._formElement = formElement;
    this._buttonSubmit = formElement.querySelector(validConfig.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    const errorMessage = inputElement.validationMessage;
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  };

  _toogleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableButtonSubmit()
    } else {
      this.enableButtonSubmit()
    }
  };

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toogleButtonState();
      });
    });
  };
  
  deleteError() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    })
  };

  disableButtonSubmit() {
    this._buttonSubmit.disabled = true;
    this._buttonSubmit.classList.add(this._inactiveButtonClass);
  };

  enableButtonSubmit() {
    this._buttonSubmit.disabled = false;
    this._buttonSubmit.classList.remove(this._inactiveButtonClass);
  }

  enableValidation() {
    this._setEventListeners();
  };
}