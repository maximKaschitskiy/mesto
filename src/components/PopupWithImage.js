import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._fullImageContainer = popupSelector;
        this._popupFullImagePic = this._fullImageContainer.querySelector('.popup__image');
        this._popupFullImageCaption = this._fullImageContainer.querySelector('.popup__caption'); 
    }
    open(event) {
        super.open();
        this._popupFullImagePic.src = event.target.src;
        this._popupFullImagePic.alt = event.target.alt;
        this._popupFullImageCaption.textContent = event.target.alt;
    }
}

export default PopupWithImage;