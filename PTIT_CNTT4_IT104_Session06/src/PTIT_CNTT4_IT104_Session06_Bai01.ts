abstract class Shape{
    name:string;
     constructor(name:string){
        this.name=name;
     }
    getName():string{
     return this.name;
       
    }
 abstract getSize():void;
}
class Rectangle extends Shape{
    width:number;
    height:number;
    constructor(name:string,width:number,height:number){
       super(name);
       this.width=width;
       this.height=height
    }
 getSize(): void {
     console.log(` kich thuc chieu rong ${this.width} chieu cao ${this.height}`);
 }
}
let rectangle=new Rectangle("hinh chu nhat",2,3);
console.log( rectangle.getName());

rectangle.getSize();
