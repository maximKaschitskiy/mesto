const elementContainer = document.querySelector('.elements'); //секция в майн
const elementTemplate = document.querySelector('#elements-template').content; //темплэйт контейнер

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

class Card {
  constructor(data) {
      this._name = data.name;
      this._link = data.link;
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
      this._popupFullImageContainer = document.querySelector('.popup_state_picture-full');
      openPopup(this._popupFullImageContainer);
      this._popupFullImagePic = document.querySelector('.popup__image');
      this._popupFullImagePic.src = event.target.src;
      this._popupFullImagePic.alt = event.target.alt;
      this._popupFullImageCaption = document.querySelector('.popup__caption');
      this._popupFullImageCaption.textContent = this._name;
  }

  generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners(); // вызовите _setEventListeners
      this._element.querySelector('.elements__picture').src = this._link;
      this._element.querySelector('.elements__picture').alt = this._name;
      this._element.querySelector('.elements__caption-text').textContent = this._name;
      return this._element;
  }
}

export {initialCards, Card};