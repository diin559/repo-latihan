import { When, Given, Then } from 'cucumber';
import login from '../pageobjects/login';
import home from '../pageobjects/home';
import dashboard from '../pageobjects/dashboard';

Then(/^I direct to new window Sign In page$/, () => {
  browser.switchWindow('ai-astra-org-323131 - Sign In');
  login.titleShouldEquals('ai-astra-org-323131 - Sign In');
});

When(/^I input admin username and password sa portal$/, () => {
  login.titleShouldEquals('ai-astra-org-323131 - Sign In');
  login.inputUsernamePassword();
  login.clickSignIn();
  browser.pause(3000);
});

Given(/^I am logged in on the SA Portal$/, () => {
  home.open();
  browser.pause(3000);
  if (home.titleShouldEquals = 'Login | Sa Portal | Astraku'){
  
  home.clickLoginOkta();
  browser.pause(3000);

  browser.switchWindow('ai-astra-org-323131 - Sign In');
  login.titleShouldEquals('ai-astra-org-323131 - Sign In');
  
  login.inputUsernamePassword();
  login.clickSignIn();
  browser.pause(3000);
  }
  else if (home.titleShouldEquals = 'Sa Portal | Astraku') {
  
  browser.pause(3000);
  home.titleShouldEquals('Login | Sa Portal | Astraku');

  home.clickLoginOkta();
  browser.pause(3000);

  browser.switchWindow('ai-astra-org-323131 - Sign In');
  login.titleShouldEquals('ai-astra-org-323131 - Sign In');
  
  login.inputUsernamePassword();
  login.clickSignIn();
  browser.pause(3000);
  }

});


Given(/^I am logged in on the SA Portal as another user$/, () => {
  home.open();
  browser.pause(3000);
  if (home.titleShouldEquals = 'Login | Sa Portal | Astraku'){
  
  home.clickLoginOkta();
  browser.pause(3000); }
  else if (home.titleShouldEquals = 'Sa Portal | Astraku') {
  
    browser.pause(3000);
    home.titleShouldEquals('Login | Sa Portal | Astraku');
  
    home.clickLoginOkta();
    browser.pause(3000);}
  });


Then(/^I input admin username: '([^"]*)' and password: '([^"]*)'$/, (user, pass) => {
  login.inputUsernameAndPassword(user, pass);
  login.clickSignIn();
  browser.pause(3000);
});
