class Vehicle1 {
  public name:string;
  protected year:number;
 private company:string;
 public readonly id:number;
    constructor(id:number,name:string,year:number,company:string) {
        this.id=id,
        this.name=name,
        this.year=year,
        this.company=company
    }
    print(){
        console.log(`ID: ${this.id} Name: ${this.name} Year: ${this.year} Company: ${this.company}`);
    }
}
let vehicle=new Vehicle1(1,"Nguyen Van A",2003,"TNHH");
vehicle.print();