export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupOverlay = document.querySelector('.popup-overlay');
        this._closePopupButton = this._popupSelector.querySelector('.popup__close-button');
        this.close = (this.close).bind(this);
        this._handleEscClose = (this._handleEscClose).bind(this);
    }
    open() {
        this._popupSelector.classList.toggle('popup_active');
        this.setEventListeners();
        this._controlOverlay();
    }
    close() {
        this._popupSelector.classList.toggle('popup_active');
        this._controlOverlay();
        this.removeEventListeners();
    }
    _handleEscClose() {
        if (event.code === 'Escape') {
            this.close();
        }
    }
    setEventListeners() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popupOverlay.addEventListener('click', this.close);
        this._closePopupButton.addEventListener('click', this.close);
    }
    removeEventListeners() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupOverlay.removeEventListener('click', this.close);
        this._closePopupButton.removeEventListener('click', this.close);
    }
    _controlOverlay() {
        this._popupOverlay.classList.toggle('popup-overlay_active');
    }
}