export default class UserInfo {
    constructor(profileNameSelector, profileStatusSelector, values) {
        this._profileNameSelector = profileNameSelector;
        this._profileStatusSelector = profileStatusSelector;
        this.values = values;

        this.popupEditProfileContainer = document.querySelector('.popup_state_edit-profile'); //попап профиль
        this.nameField = this.popupEditProfileContainer.querySelector('.popup__form-input_field_name'); //попап профиль поле имя
        this.statusField = this.popupEditProfileContainer.querySelector('.popup__form-input_field_status'); //попап профиль поле статус
    }
    getUserInfo() { //получить заполнение полей из верстки при открытии попапа
        this.nameField.value = this._profileNameSelector.textContent;
        this.statusField.value = this._profileStatusSelector.textContent;
    }
    setUserInfo() { //назначить содержимое полей в верстку
        this._profileNameSelector.textContent = this.values["name"];
        this._profileStatusSelector.textContent = this.values["status"];
    }
}