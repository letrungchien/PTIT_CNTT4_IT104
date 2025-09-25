class Vehicle1 {
    constructor(id, name, year, company) {
        this.id = id,
            this.name = name,
            this.year = year,
            this.company = company;
    }
    print() {
        console.log(`ID: ${this.id} Name: ${this.name} Year: ${this.year} Company: ${this.company}`);
    }
}
let vehicle = new Vehicle1(1, "Nguyen Van A", 2003, "TNHH");
vehicle.print();
