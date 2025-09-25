class _Account1 {
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
class CheckingAccount extends _Account1 {
    constructor(accountNumber, balance, status, overdraftLimit) {
        super(accountNumber, balance, [], status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount > 0 && this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            console.log(`-${amount} so du ${this.balance}`);
            this.history.push(`-${amount} so du ${this.balance}`);
            return;
        }
    }
}
let tk11 = new CheckingAccount("1234", 1000, "hoat dong", 500);
tk11.deposit(100);
tk11.withdraw(1500);
tk11.showhistory();
