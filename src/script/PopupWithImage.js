import Popup from './Popup.js';

const popupFullImageContainer = document.querySelector('.popup_state_picture-full');
const popupFullImagePic = document.querySelector('.popup__image');
const popupFullImageCaption = document.querySelector('.popup__caption');

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._fullImageContainer = popupFullImageContainer;
        this._fullImagePic = popupFullImagePic;
        this._fullImageCaption = popupFullImageCaption;
    }
    open() {
        super.open();
        this._fullImagePic.src = event.target.src;
        this._fullImagePic.alt = event.target.alt;
        this._fullImageCaption.textContent = this._name;
    }
}

export default PopupWithImage;