import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitCallback) {
        super(popupSelector);
        this.popupSelector = popupSelector;
        this.formSubmitCallback = formSubmitCallback;
        this._popupForm = popupSelector.querySelector('.popup__window');
        this._popupFields = popupSelector.querySelector('.popup__form');
        this._allFields = popupSelector.querySelectorAll('.popup__form-input');
        this._form = popupSelector.querySelector('.popup__form');
        this._getInputValues = (this._getInputValues).bind(this);
        this.buttonEventCallback = (this.buttonEventCallback).bind(this);
    }
    close() {
        super.close();
        this._popupFields.reset();
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this.buttonEventCallback);
    }
    removeEventListeners() {
        super.removeEventListeners();
        this._popupForm.removeEventListener('submit', this.buttonEventCallback);
    }
    _getInputValues() {
        this._allValues = {};
        this._allFields.forEach(element => {
            return this._allValues[element.name] = element.value;
        });
        return this._allValues;
    }
    buttonEventCallback(event) {
        event.preventDefault();
        this.formSubmitCallback(this._getInputValues());
    }
    setDefaultValues(values) {
        const fieldsLength = Object.entries(this._allFields);
        const valValues = Object.values(values)
            for (let i = 0; i < fieldsLength.length; i++) {
                this._allFields[i].value = valValues[i];
            }
    }
}
export default PopupWithForm;