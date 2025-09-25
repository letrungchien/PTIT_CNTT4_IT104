class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log(`meo meo`);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log(` gau gau`);
    }
}
let cat = new Cat("meo");
let dog = new Dog("cho");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();
