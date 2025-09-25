class Rectangle {
    private width:number;
    private height:number;
    constructor(width:number,height:number) {
        this.width=width,
        this.height=height
    }
    perimeter():number{
        return 2*(this.width+this.height);
    }
    area():number{
        return this.height*this.width;
    }
    setWidth(width:number):number {
             return this.width=width;
    }
    setHeight(height:number):number{
       return this.height=height;
    }
}
let rectangle=new Rectangle(3,7);
console.log("Dien tich :",rectangle.area());
console.log("Chu vi :",rectangle.perimeter());
rectangle.setHeight(5);
rectangle.setWidth(2);
console.log("Dien tich :",rectangle.area());
console.log("Chu vi :",rectangle.perimeter());

