//const formAll = document.querySelectorAll('.popup__form-input');  //все формы
//
//const submitEditProfileFormButton = popupEditProfileContainer.querySelector('.popup__form-submit-button_form_profile'); //кнопка отправить форму профиль
//const submitAddPlaceFormButton = popupAddPlaceContainer.querySelector('.popup__form-submit-button_form_add-place'); //кнопка отправить форма место
//
//function resetErrorMessage(errorElement) {
//    errorElement.textContent = '';
//}
//
//    formAll.forEach((input) => { //валидировать проверить ошибки
//       function setErrorMessage(errorElement) {
//         switch(input.name) {
//           case 'name':
//             errorElement.textContent = "Неправильное имя";
//           break;
//           case 'status':
//             errorElement.textContent = "Неправильный статус";
//           break;
//           case 'place-name':
//             errorElement.textContent = "Неправильное имя места";
//           break;
//           case 'picture-link':
//             errorElement.textContent = "Неправильная ссылка";
//           break;
//         }
//       }
//         
//       function isValid(input) {
//         switch(input.name) {
//           case 'name':
//             return input.checkValidity();
//           case 'status':
//             return input.checkValidity();
//           case 'place-name':
//             return input.checkValidity();
//           case 'picture-link':
//             return input.checkValidity();
//         }
//       }
//         
//       const errorTextElement = document.querySelector(`.popup__form-error-text_message_${input.name}`); //сообщения об ошибке
//       resetErrorMessage(errorTextElement);
//       if (!isValid(input)) {
//         setErrorMessage(errorTextElement);
//     } else {
//         updateEditProfileForm();
//       }
//     });
//
//
//function listenFormElements() { //назначить слушатель на все инпуты и засерить кнопку
//  formAll.forEach((item) => {
//      item.addEventListener('input', function (evt) {
//        evt.target.validity.valid;
//    }); 
//  });
//}
//
//function disableButton(button) { //засерить кнопку
//    button.setAttribute('disabled', 'true');
//}


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//  inputElement.classList.add('form__input_type_error'); //добавить стиль текст ошибки
  errorElement.textContent = errorMessage;
//  errorElement.classList.add('form__input-error_active'); //добавить стиль ошибка поля
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//  inputElement.classList.remove('form__input_type_error'); //убрать стиль ошибка поля
//  errorElement.classList.remove('form__input-error_active'); //убрать стиль текст ошибки
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
    console.log('invalid');
  } else {
    hideInputError(formElement, inputElement);
    console.log('valid');
  }
};

const setEventListeners = (formElement) => {
  checkFilled(formElement);
  const inputList = Array.from(formElement.querySelectorAll('.popup__form-input')); //массив все инпуты +
  const buttonElement = formElement.querySelector('.popup__form-submit-button'); //кпопка сабмит формы +
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form')); //массив всех форм +
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form-fieldset')); //массив все филдсэты +
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    }); 
  });
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  }); 
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
//  buttonElement.classList.add('button_inactive'); //добавить стиль засерить кнопку
    buttonElement.disabled = true; //добавить параметр засерить кнопку
} else {
//  buttonElement.classList.remove('button_inactive'); //убрать стиль засерить кнопку
    buttonElement.disabled = false; //убрать параметр засерить кнопку
  } 
}

const checkFilled = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__form-input')); //массив все инпуты +
  inputList.forEach((inputElement) => {
    inputElement.classList.forEach((currentItem) => {
      if(currentItem === 'popup__form-input_field_name' || currentItem === 'popup__form-input_field_status') {
        checkInputValidity(formElement, inputElement);
      }
    });
  });
};