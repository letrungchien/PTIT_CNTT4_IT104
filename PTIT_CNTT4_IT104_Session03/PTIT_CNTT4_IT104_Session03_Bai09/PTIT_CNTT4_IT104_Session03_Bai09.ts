function toNumber(x: number | string) {
    let num = Number(x);
    if (isNaN(num)) {
        return null;
    }
    return num;
}
function add(a: number | string, b: number | string) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "khong hop le";
    }
    return num1 + num2;
}
function except(a: number | string, b: number | string) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "khong hop le";
    }
    return num1 - num2;
}
function integrate(a: number | string, b: number | string) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "khong hop le";
    }
    return num1 * num2;
}
function division(a: number | string, b: number | string) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null || num2 === 0) {
        return "Khong hop le"
    }
    return num1 / num2;
}
function exponentiation(a: number | string, b: number | string) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return "khong hop le";
    }
    return Math.pow(num1, num2);
}
function squareRoot(a: number | string, b: number | string) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num1 === null || num2 === null) {
        return ("khong hop le");
    }
    return Math.pow(num1, 1 / num2);
}
function factorial(a: number | string) {
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
    let num1 = (document.getElementById("num1") as HTMLInputElement).value;
    let num2 = (document.getElementById("num2") as HTMLInputElement).value;
    let calculation = (document.getElementById("calculation") as HTMLInputElement).value;
    let num;
    switch (calculation) {
        case "+":
            num = add(num1, num2);
            document.getElementById("b")!.innerHTML = num.toString();
            break;
        case "-":
            num = except(num1, num2);
            document.getElementById("b")!.innerHTML = num.toString();
            break;
        case "*":
            num = integrate(num1, num2);
            document.getElementById("b")!.innerHTML = num.toString();
            break;
        case "/":
            num = division(num1, num2);
            document.getElementById("b")!.innerHTML = num.toString();
            break;
        case "^":
            num = exponentiation(num1, num2);
            document.getElementById("b")!.innerHTML = num.toString();
            break;
        case "!":
            num = factorial(num1);
            document.getElementById("b")!.innerHTML = num.toString();
            break;
        case "can":
            num = squareRoot(num1, num2);
            document.getElementById("b")!.innerHTML = num.toString();
            break;
        default:
            console.log("lua chon khong dung");
            break;
    }
}