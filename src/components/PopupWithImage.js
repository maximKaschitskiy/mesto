import Popup from './Popup.js';

const popupFullImageContainer = document.querySelector('.popup_state_picture-full');
const popupFullImagePic = document.querySelector('.popup__image');
const popupFullImageCaption = document.querySelector('.popup__caption');

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._fullImageContainer = popupFullImageContainer;
    }
    open(event, fullImagePic, fullImageCaption) {
        super.open();
        fullImagePic.src = event.target.src;
        fullImagePic.alt = event.target.alt;
        fullImageCaption.textContent = this._name;
    }
}

export default PopupWithImage;