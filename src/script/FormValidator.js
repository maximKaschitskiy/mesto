const formSelectorsObj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    fieldsetSelector: '.popup__form-fieldset',
    buttonSelector: '.popup__form-submit-button',
    validationErrorSelector: 'popup__form-input_validation_error',

    requiredForms: {
        fieldNameSelector: 'popup__form-input_field_name',
        fieldStatusSelector: 'popup__form-input_field_status'
    },

    editProfileFormSelector: '.popup__form_state_edit-profile',
    addPlaceFormSelector: '.popup__form_state_add-place',
}

class FormValidator {

    constructor(selectors, currentForm) {
        this._formSelector = selectors.formSelector;
        this._inputSelector = selectors.inputSelector;
        this._fieldsetSelector = selectors.fieldsetSelector;
        this._buttonSelector = selectors.buttonSelector;
        this._validationErrorSelector = selectors.validationErrorSelector;

        this._fieldNameSelector = selectors.fieldNameSelector;
        this._fieldStatusSelector = selectors.fieldStatusSelector;

        this._editProfileFormSelector = selectors.editProfileFormSelector;
        this._addPlaceFormSelector = selectors.addPlaceFormSelector

        this._currentForm = currentForm;
    };

    _showInputError(formElement, inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._validationErrorSelector); //добавить стиль ошибка поля
        errorElement.textContent = errorMessage;
        //errorElement.classList.add(''); //добавить стиль текст ошибки 
    };

    _hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._validationErrorSelector); //убрать стиль ошибка поля
        //errorElement.classList.remove('form__input-error_active'); //убрать стиль текст ошибки
        errorElement.textContent = '';
    };

    _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        };
    };

    _setEventListeners(formElement) {
        this._checkFilled(formElement);
        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        const buttonElement = formElement.querySelector(this._buttonSelector);
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', (function (event) {
                this._checkInputValidity(formElement, inputElement);
                this._toggleButtonState(inputList, buttonElement);
            }).bind(this));
        });
    };

    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._currentForm));
        formList.forEach((formElement) => {
            formElement.addEventListener('submit', function () {
                event.preventDefault();
            });
            const fieldsetList = Array.from(formElement.querySelectorAll(this._fieldsetSelector));
            fieldsetList.forEach((fieldSet) => {
                this._setEventListeners(fieldSet);
            });
        });
    };

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            //  buttonElement.classList.add('button_inactive'); //добавить стиль засерить кнопку
            buttonElement.disabled = true; //добавить параметр засерить кнопку
        } else {
            //  buttonElement.classList.remove('button_inactive'); //убрать стиль засерить кнопку
            buttonElement.disabled = false; //убрать параметр засерить кнопку
        };
    };

    _checkFilled(formElement) {
        const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
        inputList.forEach((inputElement) => {
            inputElement.classList.forEach((currentItem) => {
                if (Array.from(formSelectorsObj.requiredForms).includes(currentItem)) {
                    this._checkInputValidity(formElement, inputElement);
                };
            });
        });
    };
};

export {
    FormValidator,
    formSelectorsObj
};