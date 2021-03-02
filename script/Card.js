const elementContainer = document.querySelector('.elements'); //секция в майн
const elementTemplate = document.querySelector('#elements-template').content; //темплэйт контейнер
const popupFullImageContainer = document.querySelector('.popup_state_picture-full');
const popupFullImagePic = document.querySelector('.popup__image');
const popupFullImageCaption = document.querySelector('.popup__caption');


class Card {
  constructor(data) {
      this._name = data.name;
      this._link = data.link;
      this._fullImageContainer = popupFullImageContainer;
      this._fullImagePic = popupFullImagePic;
      this._fullImageCaption = popupFullImageCaption;
  }

  _getTemplate() {
      const cardElement = elementTemplate.cloneNode(true);
      return cardElement;
  }

  _setEventListeners() {

      this._element.querySelector('.elements__picture').addEventListener('click', () => {
          this._handleOpenPhoto();
      });

      this._element.querySelector('.elements__like-button').addEventListener('click', () => {
          this._handleLikePhoto();
      });

      this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
          this._handleDeletePhoto();
      });
  }

  _handleLikePhoto() {
      event.target.classList.toggle('elements__like-button_active');
  }

  _handleDeletePhoto() {
      event.target.closest('.elements__element').remove();
  }

  _handleOpenPhoto() {
      openPopup(this._fullImageContainer);
      this._fullImagePic.src = event.target.src;
      this._fullImagePic.alt = event.target.alt;
      this._fullImageCaption.textContent = this._name;
  }

  generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._element.querySelector('.elements__picture').src = this._link;
      this._element.querySelector('.elements__picture').alt = this._name;
      this._element.querySelector('.elements__caption-text').textContent = this._name;
      return this._element;
  }
}

export {Card};