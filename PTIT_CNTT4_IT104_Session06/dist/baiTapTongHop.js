class Animal {
    constructor(name, age, category) {
        this.name = name,
            this.age = age,
            this.category = category;
    }
    sound() {
        return ``;
    }
    getDetails() {
        return ``;
    }
    move() {
        return ``;
    }
    feed() {
        return ``;
    }
}
class Mammal extends Animal {
    constructor(name, age, furcolor) {
        super(name, age, furcolor);
        this.name = name;
        this.age = age;
    }
    move() {
        return ``;
    }
}
