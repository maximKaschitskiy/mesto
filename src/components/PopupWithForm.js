import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitCallback) {
        super(popupSelector);
        this.popupSelector = popupSelector;
        this.formSubmitCallback = formSubmitCallback;
        this._getInputValues = (this._getInputValues).bind(this);
        this._popupForm = popupSelector.querySelector('.popup__window');
        this._popupFields = popupSelector.querySelector('.popup__form');
        this._allFields = popupSelector.querySelectorAll('.popup__form-input');
        this._form = popupSelector.querySelector('.popup__form');
    }
    close() {
        super.close();
        this._popupFields.reset();
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this.formSubmitCallback); //вызов кнопка отправить форму
    }
    _getInputValues() {
        this._allValues = {};
        this._allFields.forEach(element => {
            return this._allValues[`${element.name}`] = `${element.value}`;
        });
        return this._allValues;
    }
    _getDefaultValues(values) {
        this._allFields[0].value = values.name;
        this._allFields[1].value = values.status;
    }

}
export default PopupWithForm;