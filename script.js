let popupContainer = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__window');
let profileContainer = document.querySelector('.profile');
let showPopupButton = profileContainer.querySelector('.profile__edit-button');
let closePupupButton = popupContainer.querySelector('.popup__close-icon');
let submitFormButton = popupContainer.querySelector('.popup__form-submit-button');
let name = profileContainer.querySelector('.profile__name');
let status = profileContainer.querySelector('.profile__status');
let nameField = popupContainer.querySelector('.popup__form-input_name');
let statusField = popupContainer.querySelector('.popup__form-input_status');

function closePopup() {
    popupContainer.classList.remove('popup_active');
    popupForm.reset();
  }

function openPopup() {
    popupContainer.classList.add('popup_active');
    nameField.setAttribute("value", name.textContent);
    statusField.setAttribute("value", status.textContent);
  }

function submitForm(evt) {
     evt.preventDefault();
     name.innerHTML = nameField.value;
     status.innerHTML = statusField.value;
     popupContainer.classList.remove('popup_active');
  }

showPopupButton.addEventListener('click', openPopup);
closePupupButton.addEventListener('click', closePopup);
submitFormButton.addEventListener('click', submitForm);