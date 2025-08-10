class Animal {
   private name:string;
   protected age:number;
   public species:string;
    constructor(name:string,age:number,species:string) {
        this.name=name,
        this.age=age,
        this.species=species
    }
    speak(){
        console.log(` am thanh cua con vat :${this.name}`);
        
    };
       
}
class Dog extends Animal{
  public  breed:string;
    speak(): void {
        console.log(` am thanh :Woof`);
    }
}
class Cat extends Animal{
  public  breed:string;
  constructor(name:string,age:number,species:string,breed:string){
    super(name,age,species);
    this.age=age;

    this.species=species;
  }
    speak(): void {
        console.log(` am thanh :meow`);
    }
}
class Rabbit extends Animal{
  public  breed:string;
    speak(): void {
        console.log(` am thanh :Squeak`);
    }
}