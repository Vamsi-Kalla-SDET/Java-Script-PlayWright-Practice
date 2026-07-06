<!-- 

1. Objects
let student = {
    name: "Ram",
    age: 22
};
2. Classes
class LoginPage {

}
3. Constructor
constructor(page){

}
4. Methods
login(){}

logout(){}

search(){}
5. Objects of Classes
let login = new LoginPage(page);
6. Encapsulation

Keeping locators and methods inside the page class.

Example:

class LoginPage{

    username = "#username";

    async login(){

    }

}
7. Inheritance
class BasePage{

}

class LoginPage extends BasePage{

}
8. Polymorphism (Basic Understanding)

Only interview-level knowledge is enough.

9. Static Methods
class Utils{

    static generateEmail(){

    }

}
10. Page Object Model (POM)

This is the biggest OOP concept used in Playwright.

Example structure:

pages/

LoginPage.js

DashboardPage.js

tests/

login.spec.js


 -->