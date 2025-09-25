"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        return "khong hop le";
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
function exponentiation(a, b) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "khong hop le";
    }
    return Math.pow(num1, num2);
}
function squareRoot(a, b) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return ("khong hop le");
    }
    return Math.pow(num1, 1 / num2);
}
function factorial(a) {
    let num1 = toNumber(a);
    if (num1 === null) {
        return "khong hop le";
    }
    let result = 1;
    for (let i = num1; i > 0; i--) {
        result = result * i;
    }
    return result;
}
function implement() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let calculation = document.getElementById("calculation").value;
    let num;
    switch (calculation) {
        case "+":
            num = add(num1, num2);
            document.getElementById("b").innerHTML = num.toString();
            break;
        case "-":
            num = except(num1, num2);
            document.getElementById("b").innerHTML = num.toString();
            break;
        case "*":
            num = integrate(num1, num2);
            document.getElementById("b").innerHTML = num.toString();
            break;
        case "/":
            num = division(num1, num2);
            document.getElementById("b").innerHTML = num.toString();
            break;
        case "^":
            num = exponentiation(num1, num2);
            document.getElementById("b").innerHTML = num.toString();
            break;
        case "!":
            num = factorial(num1);
            document.getElementById("b").innerHTML = num.toString();
            break;
        case "can":
            num = squareRoot(num1, num2);
            document.getElementById("b").innerHTML = num.toString();
            break;
        default:
            console.log("lua chon khong dung");
            break;
    }
}
//# sourceMappingURL=PTIT_CNTT4_IT104_Session03_Bai09.js.map