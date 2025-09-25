class Animal {
    // method thường các con dùng chung 
    print() {
        console.log(" day la con vat");
    }
}
class Dog extends Animal {
    sound() {
        console.log(`gau gau`);
    }
}
let dog = new Dog();
dog.print(); //method thuong
dog.sound(); //abstract method
