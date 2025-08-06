
let a = "2";
let b = 2;
if (a === b) { //so sánh chặt dữ liệu không bị chuyển  đổi
    console.log("Bang nhau");
}
else {
    console.log("khong bang nhau");
}
if (a == b) { //so sánh lỏng kiểu dữ liệu đã bị chuyển trước khi so sánh
    console.log("Bang nhau");
}
else {
    console.log("khong bang nhau");
}
