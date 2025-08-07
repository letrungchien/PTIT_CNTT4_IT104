type person={
    name:string;
    age:number;
}
type employee={
    employeeId :string;
     department:string;
}
type StaffMember = person & employee;
let Human:StaffMember ={
    name:"Hung",
    age:20,
    employeeId:"MH024",
    department:"Ke toan"
    }

    function printf(staff:StaffMember):void {
        console.log(`Nhan vien :${staff.name}(${staff.age} tuoi) Ma nhan vien:${staff.employeeId}-Phong :${Human.department}`);
    }
    printf(Human);