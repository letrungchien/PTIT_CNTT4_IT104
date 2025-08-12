abstract class Animal{
    name :string;
    constructor(name:string){
        this.name=name
    }
    abstract makeNoise():void;
    printName(){
        console.log(this.name);  
    }
}
 class Cat extends Animal{
    makeNoise(): void {
        console.log(`meo meo`);
        
    }
 }
 class Dog extends Animal{
    makeNoise(): void {
        console.log(` gau gau`);
    }
 }

 let cat =new Cat("meo");
 let dog=new Dog("cho");

 cat.printName();
 cat.makeNoise();

 dog.printName();
 dog.makeNoise();