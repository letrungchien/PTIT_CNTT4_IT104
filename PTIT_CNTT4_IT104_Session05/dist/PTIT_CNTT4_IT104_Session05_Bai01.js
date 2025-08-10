class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    print() {
        console.log(`Ten: ${this.name} Nam :${this.year} Hang xe: ${this.company}`);
    }
}
let vf8 = new Vehicle("vf8", 2021, "VinFast");
let mazda_cx5 = new Vehicle("mazda_cx5", 2025, "Mazda");
vf8.print();
mazda_cx5.print();
