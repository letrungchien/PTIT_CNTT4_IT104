function calculateOrderTotal(order) {
    var total = 0;
    for (var i = 0; i < order.items.length; i++) {
        total += order.items[i].product.price * order.items[i].quantity;
    }
    return total;
}
function printOrder(order) {
    console.log("Don hang ".concat(order.orderid));
    console.log("Khach hang ".concat(order.customerName));
    console.log("san pham");
    for (var i = 0; i < order.items.length; i++) {
        console.log("-".concat(order.items[i].product.name, " x ").concat(order.items[i].quantity, " ->").concat((order.items[i].product.price * order.items[i].quantity).toLocaleString('vi-VN'), " VND"));
    }
    console.log("Tong cong ".concat(calculateOrderTotal(order)));
    if (order.note != undefined) {
        console.log("Ghi chu ".concat(order.note));
    }
}
var shirt = {
    readonly_id: "H01",
    name: "ao so mi",
    price: 100000
};
var pants = {
    readonly_id: "H02",
    name: "quan dui",
    price: 200000
};
var orderExample = {
    orderid: "ORD001",
    customerName: "Nguyen Van A",
    items: [
        { product: shirt, quantity: 2 },
        { product: pants, quantity: 2 }
    ],
    note: "giai sau 18h"
};
printOrder(orderExample);
