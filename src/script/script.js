import '../../src/pages/index.css';

import {
    initialCards
} from './constants.js';

import {
    Card
} from './Card.js';

import {
    FormValidator,
    formSelectorsObj
} from './FormValidator.js';

import Section from './Section.js';

import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';

import UserInfo from './UserInfo.js';

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



const imagePopup = new PopupWithImage(popupFullImageContainer);
const profilePopup = new PopupWithForm(popupEditProfileContainer,
    (event) => {
        event.preventDefault();
        const values = profilePopup._getInputValues();
        const profileSection = new UserInfo(profileNameElement, profileStatusElement, values);
        profileSection.setUserInfo(values);
        profilePopup.close();
    },
    () => {
        const profileSection = new UserInfo(profileNameElement, profileStatusElement);
        profileSection.getUserInfo();
    },
    true
);


const addPlacePopup = new PopupWithForm(popupAddPlaceContainer, (event) => {
    event.preventDefault();
    const values = addPlacePopup._getInputValues();
    const addUserCard = new Section(
        [{
            name: values["place-name"],
            link: values["picture-link"]
        }], {
            renderer: (item) => {
                const card = new Card(item, imagePopup);
                const cardElement = card.generateCard();
                defaultCardList.addItem(cardElement);
            }
        },
        elementContainer
    );
    addUserCard.renderItems();
    addPlacePopup.close();
});

function closePopup(popupContainer) { //попап закрыть
    controlOverlay();
    popupContainer.classList.remove('popup_active');
    // removeKeyDownListener();
}

function openPopup(popupContainer) { //попап открыть
    controlOverlay();
    popupContainer.classList.add('popup_active');
    // setKeyDownListener();
}

openEditProfilePopupButton.addEventListener('click', function () { //вызов кнопка профиль попап открыть!!!!!!!!!!!!!!1
    profilePopup.open();
    const enableValidationEditProfileForm = validateEditProfileForm.enableValidation();
});

openAddPlacePopupButton.addEventListener('click', function () { //вызов кнопка место попап открыть
    addPlacePopup.open();
    const enableValidationAddPlaceForm = validateAddPlaceForm.enableValidation();
});

function controlOverlay() {
    popupOverlay.classList.toggle('popup-overlay_active');
}

export {
    openPopup
};

const defaultCardList = new Section(
    initialCards, {
        renderer: (item) => {
            const card = new Card(item, imagePopup);
            const cardElement = card.generateCard();
            defaultCardList.addItem(cardElement);
        }
    },
    elementContainer
);

defaultCardList.renderItems();

