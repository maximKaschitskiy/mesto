////--попап место начало----
let popupEditProfileContainer = document.querySelector('.popup_state_edit-profile'); //попап профиль
let popupEditProfileForm = document.querySelector('.popup__window_state_edit-profile'); //попап профиль форма
let profileContainer = document.querySelector('.profile'); //профиль
let openEditProfilePopupButton = profileContainer.querySelector('.profile__edit-button'); //кнопка открыть попап профиль
let closeEditProfilePupupButton = popupEditProfileContainer.querySelector('.popup__close-button_state_edit-profile'); //кнопка закрыть попап профиль 
let name = profileContainer.querySelector('.profile__name'); //профиль имя
let status = profileContainer.querySelector('.profile__status'); //профиль статус
let nameField = popupEditProfileContainer.querySelector('.popup__form-input_field_name'); //попап профиль поле имя
let statusField = popupEditProfileContainer.querySelector('.popup__form-input_field_status'); //попап профиль поле статус

let popupAddPlaceContainer = document.querySelector('.popup_state_add-place'); //попап место
let popupAddPlaceForm = document.querySelector('.popup__window_state_add-place'); //попап место форма
let openAddPlacePopupButton = profileContainer.querySelector('.profile__add-button'); //кнопка открыть попап место
let closeAddPlacePupupButton = popupAddPlaceContainer.querySelector('.popup__close-button_state_add-place'); //кнопка закрыть попап место
let placeNameField = popupAddPlaceContainer.querySelector('.popup__form-input_field_place-name'); //попап место поле название
let placeLinkField = popupAddPlaceContainer.querySelector('.popup__form-input_field_picture-link'); //попап место поле ссылка

let popupFullImageContainer = document.querySelector('.popup_state_picture-full');
let popupFullImagePic = document.querySelector('.popup__image');
let closeFullImagePupupButton = popupFullImageContainer.querySelector('.popup__close-button_state_picture-full');

let popupFullImageCaption = document.querySelector('.popup__caption');

function closePopup(popupContainer) { //попап закрыть
    popupContainer.classList.remove('popup_active');
  }

function openPopup(popupContainer) { //попап открыть
    popupContainer.classList.add('popup_active');
  }

function popupProfileGetValues () { //отобразить текущее имя в форме
    nameField.value = name.textContent;
    statusField.value = status.textContent;
}

function submitEditProfileForm(evt) { //отправить форму профиль
     evt.preventDefault();
     name.textContent = nameField.value; 
     status.textContent = statusField.value; 
     closePopup(popupEditProfileContainer);
  }

function submitAddPlaceForm(evt) { //отправить форму место
     evt.preventDefault();
     const userCard = [
       {
         name: placeNameField.value,
         link: placeLinkField.value
       }
     ];
     userCard.forEach((item) => {
       addElement(item);
     });
     placeNameField.value = '';
     placeLinkField.value = '';
     closePopup(popupAddPlaceContainer);
  }

openEditProfilePopupButton.addEventListener('click', function() { //вызов кнопка профиль попап открыть
    openPopup(popupEditProfileContainer);
    popupProfileGetValues();
  });

closeEditProfilePupupButton.addEventListener('click', function() { // вызов кнопка профиль попап закрыть
    closePopup(popupEditProfileContainer);
  });

openAddPlacePopupButton.addEventListener('click', function() { //вызов кнопка место попап открыть
    openPopup(popupAddPlaceContainer);
    popupProfileGetValues();
  });

closeAddPlacePupupButton.addEventListener('click', function() { // вызов кнопка место попап закрыть
    closePopup(popupAddPlaceContainer);
  });

closeFullImagePupupButton.addEventListener('click', function() { // вызов кнопка место попап закрыть
    closePopup(popupFullImageContainer);
  });

popupEditProfileForm.addEventListener('submit', submitEditProfileForm); //вызов кнопка  отправить форму

popupAddPlaceForm.addEventListener('submit', submitAddPlaceForm); //вызов кнопка отправить форму


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


function addElement(item) {
      const elementTemplate = document.querySelector('#elements-template').content;
      const elementContainer = document.querySelector('.elements');
      const likeButton = document.querySelector('.elements__like-button');
      const userElements = elementTemplate.cloneNode(true);
      userElements.querySelector('.elements__picture').src=item.link;
      userElements.querySelector('.elements__caption-text').textContent=item.name;
      elementContainer.prepend(userElements);
      elementContainer.querySelector('.elements__delete-button').addEventListener('click', deleteItem);
      elementContainer.querySelector('.elements__picture').addEventListener('click', openImage);
      elementContainer.querySelector('.elements__like-button').addEventListener('click', likePhoto);
  }

function addDefaultElements() {
  initialCards.forEach((item) => {
    addElement(item);
  });
}

function deleteItem(evt) {
  evt.target.closest('.elements__element').remove();
}

function openImage(evt) {
  const eventOpenImage = evt.target;
  openPopup(popupFullImageContainer);
  popupFullImagePic.src = eventOpenImage.src;
  const parent = eventOpenImage.closest('div');
  const title = parent.querySelector('h2').textContent;
  popupFullImageCaption.textContent = title;
}

function likePhoto(evt) {
  const eventLike = evt.target;
  eventLike.classList.toggle('elements__like-button_heart_active');
}

addDefaultElements();