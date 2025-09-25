class Animal {
    constructor(name, age, species) {
        this.name = name,
            this.age = age,
            this.species = species;
    }
    speak() {
        console.log(` am thanh cua con vat :${this.name}`);
    }
    ;
}
class Dog extends Animal {
    speak() {
        console.log(` am thanh :Woof`);
    }
}
class Cat extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.age = age;
        this.species = species;
    }
    speak() {
        console.log(` am thanh :meow`);
    }
}
class Rabbit extends Animal {
    speak() {
        console.log(` am thanh :Squeak`);
    }
}
