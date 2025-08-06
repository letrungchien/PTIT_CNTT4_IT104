
function toNumber(x) {
    let num = Number(x);
    if (isNaN(num)) {
        return null;
    }
    return num;
}
function add(a, b) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "Khong hop le";
    }
    return num1 + num2;
}
function except(a, b) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "khong hop le";
    }
    return num1 - num2;
}
function integrate(a, b) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "khong hop le";
    }
    return num1 * num2;
}
function division(a, b) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null || num2 === 0) {
        return "Khong hop le";
    }
    return num1 / num2;
}
console.log(add("3", 5));
console.log(integrate("5", 0));
console.log((except("abc", "7")));
console.log(division("6", 0));
//# sourceMappingURL=PTIT_CNTT4_IT104_Session03_Bai08.js.map