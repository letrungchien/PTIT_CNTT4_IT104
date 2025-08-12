class Account1 {
    constructor(accountNumber, balance, histoty, status) {
        this.accountNumber = accountNumber,
            this.balance = balance,
            this.history = histoty,
            this.status;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`+${amount} so du ${this.balance}`);
        this.history.push(`+${amount} so du ${this.balance}`);
        return;
    }
    withdraw(amount) {
        if (this.balance < amount) {
            console.log("so du khog du");
            return;
        }
        this.balance -= amount;
        console.log(`-${amount} so du ${this.balance}`);
        this.history.push(`-${amount} so du ${this.balance}`);
        return;
    }
    showhistory() {
        for (let i = 0; i < this.history.length; i++) {
            console.log(this.history[i]);
        }
    }
}
class SavingAccount extends Account1 {
    constructor(accountNumber, balance, status, interesRate) {
        super(accountNumber, balance, [], status);
        this.interestRate = interesRate;
    }
}
let tk1 = new SavingAccount("047473", 60000, "hoat dong", 4);
tk1.deposit(10000);
tk1.withdraw(5000);
tk1.showhistory();
