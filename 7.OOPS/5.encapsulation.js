
// Encapsulation means keeping data and methods together inside a class.

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.fill("#username", username);

    await this.page.fill("#password", password);

    await this.page.click("button");
  }
}


// 

class BankAccount {

    constructor(balance) {

        this.balance = balance;

    }

    deposit(amount) {

        this.balance += amount;

    }

    showBalance() {

        console.log(this.balance);

    }

}

let account = new BankAccount(1000);

account.deposit(500);

account.showBalance();

// Only the methods (deposit(), showBalance()) manage the account's balance. 
// This keeps related data and behavior together.

