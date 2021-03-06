import '../pages/index.css';
import {
    initialCards
} from '../utils/constants.js';
import {
    Card
} from '../components/Card.js';
import {
    FormValidator,
    formSelectorsObj
} from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const popupEditProfileContainer = document.querySelector('.popup_state_edit-profile'); //попап профиль
const profileContainer = document.querySelector('.profile'); //профиль
const openEditProfilePopupButton = profileContainer.querySelector('.profile__edit-button'); //кнопка открыть попап профиль
const profileNameElement = profileContainer.querySelector('.profile__name'); //профиль имя
const profileStatusElement = profileContainer.querySelector('.profile__status'); //профиль статус
const popupAddPlaceContainer = document.querySelector('.popup_state_add-place'); //попап место
const openAddPlacePopupButton = profileContainer.querySelector('.profile__add-button'); //кнопка открыть попап место
const popupOverlay = document.querySelector('.popup-overlay');
const popupFullImageContainer = document.querySelector('.popup_state_picture-full');
const elementContainer = document.querySelector('.elements'); //секция в майн
const profileSection = new UserInfo(profileNameElement, profileStatusElement);
const validateEditProfileForm = new FormValidator(formSelectorsObj, formSelectorsObj.editProfileFormSelector);
const validateAddPlaceForm = new FormValidator(formSelectorsObj, formSelectorsObj.addPlaceFormSelector);

const enableValidationEditProfileForm = validateEditProfileForm.enableValidation();
const enableValidationAddPlaceForm = validateAddPlaceForm.enableValidation();
const imagePopup = new PopupWithImage(popupFullImageContainer);
const profilePopup = new PopupWithForm(popupEditProfileContainer,
    (event) => {
        profileSection.setUserInfo(event);
        profilePopup.close();
    }
);
const addPlacePopup = new PopupWithForm(popupAddPlaceContainer, (event) => {
    const item = [{
        name: event["place-name"],
        link: event["picture-link"]
    }];
    const card = new Card(item, imagePopup);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    addPlacePopup.close();
});

openEditProfilePopupButton.addEventListener('click', function () { //вызов кнопка профиль попап открыть
    profilePopup.open();
    profilePopup.setDefaultValues(profileSection.getUserInfo());
});

openAddPlacePopupButton.addEventListener('click', function () { //вызов кнопка место попап открыть
    addPlacePopup.open();
});

const cardList = new Section(
    initialCards, {
        renderer: (item) => {
            const card = new Card(item, imagePopup);
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
        }
    },
    elementContainer
);

cardList.renderItems();