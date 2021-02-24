//function showInputError(formElement, inputElement, errorMessage) { //!!!показать ошибку
//  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//  inputElement.classList.add('popup__form-input_validation_error'); //добавить стиль ошибка поля
//  errorElement.textContent = errorMessage;
////errorElement.classList.add(''); //добавить стиль текст ошибки
//};
//
//function hideInputError(formElement, inputElement) { //!!!убрать ошибку
//  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//  inputElement.classList.remove('popup__form-input_validation_error'); //убрать стиль ошибка поля
////errorElement.classList.remove('form__input-error_active'); //убрать стиль текст ошибки
//  errorElement.textContent = '';
//};
//
//function checkInputValidity(formElement, inputElement) { //!!!условие проверить поля
//  if (!inputElement.validity.valid) {
//    showInputError(formElement, inputElement, inputElement.validationMessage);
//  } else {
//    hideInputError(formElement, inputElement);
//  }
//};
//
//function setEventListeners(formElement) { //добавить листенеры
//  checkFilled(formElement);
//  const inputList = Array.from(formElement.querySelectorAll('.popup__form-input')); //массив все инпуты
//  const buttonElement = formElement.querySelector('.popup__form-submit-button'); //кпопка сабмит формы
//  toggleButtonState(inputList, buttonElement);
//  inputList.forEach((inputElement) => {
//    inputElement.addEventListener('input', function () {
//      checkInputValidity(formElement, inputElement);
//      toggleButtonState(inputList, buttonElement);
//    });
//  });
//};
//
//function enableValidation() { //включить валидацию
//  const formList = Array.from(document.querySelectorAll('.popup__form')); //массив всех форм
//  formList.forEach((formElement) => {
//    formElement.addEventListener('submit', function (evt) {
//      evt.preventDefault();
//    });
//    const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form-fieldset')); //массив все филдсэты
//    fieldsetList.forEach((fieldSet) => {
//      setEventListeners(fieldSet);
//    }); 
//  });
//};
//
//function hasInvalidInput(inputList) {
//  return inputList.some((inputElement) => {
//  return !inputElement.validity.valid;
//  }); 
//}
//
//function toggleButtonState(inputList, buttonElement) { //менять состояние кнопки
//  if (hasInvalidInput(inputList)) {
////  buttonElement.classList.add('button_inactive'); //добавить стиль засерить кнопку
//    buttonElement.disabled = true; //добавить параметр засерить кнопку
//} else {
////  buttonElement.classList.remove('button_inactive'); //убрать стиль засерить кнопку
//    buttonElement.disabled = false; //убрать параметр засерить кнопку
//  } 
//}
//
//function checkFilled(formElement) { //проверить заполненность
//  const inputList = Array.from(formElement.querySelectorAll('.popup__form-input')); //массив все инпуты
//  inputList.forEach((inputElement) => {
//    inputElement.classList.forEach((currentItem) => {
//      if(currentItem === 'popup__form-input_field_name' || currentItem === 'popup__form-input_field_status') {
//        checkInputValidity(formElement, inputElement);
//      }
//    });
//  });
//};


const formSelectorsObj = {
    formList: '.popup__form', // все формы
    inputList: '.popup__form-input', // все инпуты
    fieldsetList: '.popup__form-fieldset' // все филдсэты
  }

class FormValidator {
    
  constructor(selectors) {
    this._formList = selectors.formList;
    this._inputList = selectors.inputList;
    this._fieldsetList = selectors.fieldsetList;
  }

showInputError(formElement, inputElement, errorMessage) { //!!!показать ошибку
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__form-input_validation_error'); //добавить стиль ошибка поля
    errorElement.textContent = errorMessage;
    //errorElement.classList.add(''); //добавить стиль текст ошибки
};

hideInputError(formElement, inputElement) { //!!!убрать ошибку
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__form-input_validation_error'); //убрать стиль ошибка поля
    //errorElement.classList.remove('form__input-error_active'); //убрать стиль текст ошибки
    errorElement.textContent = '';
};

checkInputValidity(formElement, inputElement) { //!!!условие проверить поля
    if (!inputElement.validity.valid) {
        this.showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
        this.hideInputError(formElement, inputElement);
    }
};

setEventListeners(formElement) { //добавить листенеры
    this.checkFilled(formElement);
    const inputList = Array.from(formElement.querySelectorAll(`${this._inputList}`)); //массив все инпуты
    const buttonElement = formElement.querySelector('.popup__form-submit-button'); //кпопка сабмит формы
    this.toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

enableValidation() { //включить валидацию
    const formList = Array.from(document.querySelectorAll(`${this._formList}`)); //массив всех форм
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function () {
            this.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll(`${this._fieldsetList}`)); //массив все филдсэты
        fieldsetList.forEach((fieldSet) => {
            this.setEventListeners(fieldSet);
        });
    });
};

hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

toggleButtonState(inputList, buttonElement) { //менять состояние кнопки
    if (this.hasInvalidInput(inputList)) {
        //  buttonElement.classList.add('button_inactive'); //добавить стиль засерить кнопку
        buttonElement.disabled = true; //добавить параметр засерить кнопку
    } else {
        //  buttonElement.classList.remove('button_inactive'); //убрать стиль засерить кнопку
        buttonElement.disabled = false; //убрать параметр засерить кнопку
    }
}

checkFilled(formElement) { //проверить заполненность
    const inputList = Array.from(formElement.querySelectorAll(`${this._inputList}`)); //массив все инпуты
    inputList.forEach((inputElement) => {
        inputElement.classList.forEach((currentItem) => {
            if (currentItem === 'popup__form-input_field_name' || currentItem === 'popup__form-input_field_status') {
                this.checkInputValidity(formElement, inputElement);
            }
        });
    });
};
}

const validation = new FormValidator(formSelectorsObj);
validation.enableValidation(formSelectorsObj);