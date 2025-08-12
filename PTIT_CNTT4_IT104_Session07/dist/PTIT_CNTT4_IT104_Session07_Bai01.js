class Employee {
    constructor(name, company, phone) {
        this.name = name,
            this.company = company,
            this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name} Company: ${this.company} Phone:${this.phone}`);
    }
    getPhone() {
        return this.phone;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`Name: ${this.name} Company :${this.company} Phone : ${this.getPhone()} Team size :${this.teamSize}`);
    }
}
let manager = new Manager("chien", "TNHH", "0437", 9);
manager.printInfo();
