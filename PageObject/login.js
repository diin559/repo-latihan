import Page from './page';

class Login extends Page {
  get usernameInput() { return $('#okta-signin-username'); }

  get passwordInput() { return $('#okta-signin-password'); }

  get signInButton() { return $('#okta-signin-submit'); }

  // Change username pass
  inputUsernamePassword() {
    super.inputElement(this.usernameInput, 'admin@rocketmail.com');
    super.inputElement(this.passwordInput, 'abcdefgh');
  }

  inputUsernameAndPassword(user, pass) {
    super.inputElement(this.usernameInput, user);
    super.inputElement(this.passwordInput, pass);
  }

  clickSignIn() {
    super.clickElement(this.signInButton);
  }
}

export default new Login();
