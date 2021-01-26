const popupEditProfileContainer = document.querySelector('.popup_state_edit-profile'); //попап профиль
const popupEditProfileForm = document.querySelector('.popup__window_state_edit-profile'); //попап профиль форма
const profileContainer = document.querySelector('.profile'); //профиль
const openEditProfilePopupButton = profileContainer.querySelector('.profile__edit-button'); //кнопка открыть попап профиль
const closeEditProfilePupupButton = popupEditProfileContainer.querySelector('.popup__close-button_state_edit-profile'); //кнопка закрыть попап профиль 
const profileNameElement = profileContainer.querySelector('.profile__name'); //профиль имя
const profileStatusElement = profileContainer.querySelector('.profile__status'); //профиль статус
const nameField = popupEditProfileContainer.querySelector('.popup__form-input_field_name'); //попап профиль поле имя
const statusField = popupEditProfileContainer.querySelector('.popup__form-input_field_status'); //попап профиль поле статус

const popupAddPlaceContainer = document.querySelector('.popup_state_add-place'); //попап место
const popupAddPlaceForm = document.querySelector('.popup__window_state_add-place'); //попап место форма
const openAddPlacePopupButton = profileContainer.querySelector('.profile__add-button'); //кнопка открыть попап место
const closeAddPlacePupupButton = popupAddPlaceContainer.querySelector('.popup__close-button_state_add-place'); //кнопка закрыть попап место
const placeNameField = popupAddPlaceContainer.querySelector('.popup__form-input_field_place-name'); //попап место поле название
const placeLinkField = popupAddPlaceContainer.querySelector('.popup__form-input_field_picture-link'); //попап место поле ссылка

const popupFullImageContainer = document.querySelector('.popup_state_picture-full');
const popupFullImagePic = document.querySelector('.popup__image');
const closeFullImagePupupButton = popupFullImageContainer.querySelector('.popup__close-button_state_picture-full');

const popupFullImageCaption = document.querySelector('.popup__caption');


function closePopup(popupContainer) { //попап закрыть
    popupContainer.classList.remove('popup_active');
  }

function openPopup(popupContainer) { //попап открыть
    popupContainer.classList.add('popup_active');
  }

function getPopupProfileValues () { //отобразить текущее имя в форме
    nameField.value = profileNameElement.textContent;
    statusField.value = profileStatusElement.textContent;
}

function submitEditProfileForm(evt) { //отправить форму профиль
     evt.preventDefault();
     profileNameElement.textContent = nameField.value; 
     profileStatusElement.textContent = statusField.value; 
     closePopup(popupEditProfileContainer);
  }

function submitAddPlaceForm(evt) { //отправить форму место
     evt.preventDefault();
     addElement({ name: placeNameField.value, link: placeLinkField.value });
     evt.target.reset();
     closePopup(popupAddPlaceContainer);
  }

openEditProfilePopupButton.addEventListener('click', function() { //вызов кнопка профиль попап открыть
    openPopup(popupEditProfileContainer);
    getPopupProfileValues();
  });

closeEditProfilePupupButton.addEventListener('click', function() { // вызов кнопка профиль попап закрыть
    closePopup(popupEditProfileContainer);
  });

openAddPlacePopupButton.addEventListener('click', function() { //вызов кнопка место попап открыть
    openPopup(popupAddPlaceContainer);
  });

closeAddPlacePupupButton.addEventListener('click', function() { // вызов кнопка место попап закрыть
    closePopup(popupAddPlaceContainer);
  });

closeFullImagePupupButton.addEventListener('click', function() { // вызов кнопка место попап закрыть
    closePopup(popupFullImageContainer);
  });

popupEditProfileForm.addEventListener('submit', submitEditProfileForm); //вызов кнопка  отправить форму

popupAddPlaceForm.addEventListener('submit', submitAddPlaceForm); //вызов кнопка отправить форму


function addElement(item) {
      const elementTemplate = document.querySelector('#elements-template').content;
      const elementContainer = document.querySelector('.elements');
      const likeButton = document.querySelector('.elements__like-button');
      const userElements = elementTemplate.cloneNode(true);
      userElements.querySelector('.elements__picture').src = item.link;
      userElements.querySelector('.elements__caption-text').textContent = item.name;
      userElements.querySelector('.elements__picture').alt = item.name;
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
  popupFullImagePic.alt = eventOpenImage.alt;
  const parent = eventOpenImage.closest('div');
  const title = parent.querySelector('h2').textContent;
  popupFullImageCaption.textContent = title;
}

function likePhoto(evt) {
  const eventLike = evt.target;
  eventLike.classList.toggle('elements__like-button_heart_active');
}

addDefaultElements();