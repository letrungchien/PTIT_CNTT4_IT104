var Human = {
    name: "Hung",
    age: 20,
    employeeId: "MH024",
    department: "Ke toan"
};
function printf(staff) {
    console.log("Nhan vien :".concat(staff.name, "(").concat(staff.age, " tuoi) Ma nhan vien:").concat(staff.employeeId, "-Phong :").concat(Human.department));
}
printf(Human);
