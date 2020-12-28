let popupContainer = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__window');
let profileContainer = document.querySelector('.profile');
let showPopupButton = profileContainer.querySelector('.profile__edit-button');
let closePupupButton = popupContainer.querySelector('.popup__close-icon');
let name = profileContainer.querySelector('.profile__name');
let status = profileContainer.querySelector('.profile__status');
let nameField = popupContainer.querySelector('.popup__form-input_field_name');
let statusField = popupContainer.querySelector('.popup__form-input_field_status');

function closePopup() {
    popupContainer.classList.remove('popup_active');
  }

function openPopup() {
    popupContainer.classList.add('popup_active');
    nameField.value = name.textContent;
    statusField.value = status.textContent;
  }

function submitForm(evt) {
     evt.preventDefault();
     name.textContent = nameField.value; 
     status.textContent = statusField.value; 
     closePopup();
  }

showPopupButton.addEventListener('click', openPopup);
closePupupButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', submitForm);