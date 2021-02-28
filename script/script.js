import {initialCards} from './constants.js';
import {Card} from './Card.js';
import {FormValidator, formSelectorsObj} from './FormValidator.js';

const validateEditProfileForm = new FormValidator(formSelectorsObj, formSelectorsObj.editProfileFormSelector);
const validateAddPlaceForm = new FormValidator(formSelectorsObj, formSelectorsObj.addPlaceFormSelector);

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

const popupOverlay = document.querySelector('.popup-overlay');

const popupFullImageContainer = document.querySelector('.popup_state_picture-full');
const popupFullImagePic = document.querySelector('.popup__image');
const closeFullImagePupupButton = popupFullImageContainer.querySelector('.popup__close-button_state_picture-full');

const popupFullImageCaption = document.querySelector('.popup__caption');

const elementContainer = document.querySelector('.elements'); //секция в майн
const elementTemplate = document.querySelector('#elements-template').content; //темплэйт контейнер

function closePopup(popupContainer) { //попап закрыть
    controlOverlay();
    popupContainer.classList.remove('popup_active');
    removeKeyDownListener();
}

function openPopup(popupContainer) { //попап открыть
    controlOverlay();
    popupContainer.classList.add('popup_active');
    setKeyDownListener();
}

function getPopupProfileValues() { //отобразить текущее имя в форме
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
    const card = new Card({
        name: placeNameField.value,
        link: placeLinkField.value
    });
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
    evt.target.reset();
    closePopup(popupAddPlaceContainer);
}

openEditProfilePopupButton.addEventListener('click', function () { //вызов кнопка профиль попап открыть
    openPopup(popupEditProfileContainer);
    getPopupProfileValues();

    const enableValidationEditProfileForm = validateEditProfileForm.enableValidation();
});

closeEditProfilePupupButton.addEventListener('click', function () { // вызов кнопка профиль попап закрыть
    closePopup(popupEditProfileContainer);
});

openAddPlacePopupButton.addEventListener('click', function () { //вызов кнопка место попап открыть
    openPopup(popupAddPlaceContainer);

    const enableValidationAddPlaceForm = validateAddPlaceForm.enableValidation();
});

closeAddPlacePupupButton.addEventListener('click', function () { // вызов кнопка место попап закрыть
    closePopup(popupAddPlaceContainer);
});

closeFullImagePupupButton.addEventListener('click', function () { // вызов кнопка место попап закрыть
    closePopup(popupFullImageContainer);
});

popupOverlay.addEventListener('click', function () { // оверлэй попап закрыть
    closePopup(document.querySelector('.popup_active'));
});

popupEditProfileForm.addEventListener('submit', submitEditProfileForm); //вызов кнопка  отправить форму

popupAddPlaceForm.addEventListener('submit', submitAddPlaceForm); //вызов кнопка отправить форму

function controlOverlay() {
    popupOverlay.classList.toggle('popup-overlay_active');
}

function setKeyDownListener() {
    document.addEventListener('keydown', handleEscButton);
}

function removeKeyDownListener() {
    document.removeEventListener('keydown', handleEscButton);
}

function handleEscButton(event) {
    if (event.code === 'Escape') {
        closePopup(document.querySelector('.popup_active'));
    }
}

initialCards.forEach((item) => {
    const card = new Card(item);
    const cardElement = card.generateCard();
    elementContainer.prepend(cardElement);
  });