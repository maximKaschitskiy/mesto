export default class UserInfo {
    constructor(profileNameSelector, profileStatusSelector) {
        this._profileNameSelector = profileNameSelector;
        this._profileStatusSelector = profileStatusSelector;

        this.popupEditProfileContainer = document.querySelector('.popup_state_edit-profile'); //попап профиль
        this.nameField = this.popupEditProfileContainer.querySelector('.popup__form-input_field_name'); //попап профиль поле имя
        this.statusField = this.popupEditProfileContainer.querySelector('.popup__form-input_field_status'); //попап профиль поле статус
    }
    getUserInfo() {
        return {
          name: this._profileNameSelector.textContent,
          status: this._profileStatusSelector.textContent
        }
    }
    setUserInfo({ name, status }) {
        this._profileNameSelector.textContent = name;
        this._profileStatusSelector.textContent = status;
    }
}