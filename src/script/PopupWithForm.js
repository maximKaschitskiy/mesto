import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitCallback, getDefaultValues, formType) {
        super(popupSelector);
        this.popupSelector = popupSelector;
        this.formSubmitCallback = formSubmitCallback;
        this.getDefaultValues = getDefaultValues;
        this.formType = formType;
        this._getInputValues = (this._getInputValues).bind(this);
        this._popupForm = popupSelector.querySelector('.popup__window');
        this._popupFields = popupSelector.querySelector('.popup__form');
        this.allFields = popupSelector.querySelectorAll('.popup__form-input');
        this.form = this.popupSelector.querySelector('.popup__form');
    }
    close() {
        super.close();
        this._popupFields.reset();
    }
    open() {
        super.open();
        if(this.formType) {
            this.getDefaultValues();
        }
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this.formSubmitCallback); //вызов кнопка  отправить форму
    }
    _getInputValues() {
        this.allValues = {};
        this.allFields.forEach(element => {
            return this.allValues[`${element.name}`] = `${element.value}`;
        });
        return this.allValues;
    }
}
export default PopupWithForm;