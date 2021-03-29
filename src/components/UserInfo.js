export default class UserInfo {
    constructor(profileNameSelector, profileStatusSelector) {
        this._profileNameSelector = profileNameSelector;
        this._profileStatusSelector = profileStatusSelector;
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