interface IAnimal {
    name:string;
    age:number;
    category:string
    sound():string;
    getDetails():string;
    move():string;
    feed():string;
}
abstract class Animal implements IAnimal{
    name:string;
    age:number;
    category: string;
    constructor(name:string,age :number,category:string){
        this.name=name,
        this.age=age,
        this.category=category
    }
    sound(): string {
        return ``;

    }
    getDetails(): string {
        return ``;
    }
    move(): string {
        return ``;
    }
    feed(): string {
    return ``;
    }
}

class Mammal extends Animal{
    furColor:string;
    constructor(name:string,age:number,furcolor:string){
        super(name,age,furcolor);
            this.name=name;
            this.age=age;
    }
        move(){
            return ``;
        }
    }
