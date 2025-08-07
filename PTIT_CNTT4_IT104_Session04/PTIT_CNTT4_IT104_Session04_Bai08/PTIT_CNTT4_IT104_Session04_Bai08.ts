type Product={
    readonly_id:string;
    name:string;
    price:number;
};
type Orderitem={
    product:Product;
    quantity:number;
};
type Order={
    orderid:string;
    customerName:string;
    items:Orderitem[];
    note?:string;
};

function calculateOrderTotal(order:Order){
    let total=0;
    for (let i = 0; i < order.items.length; i++) {
       total+=order.items[i].product.price*order.items[i].quantity;   
    }
    return total;
}
function printOrder(order:Order):void{
    console.log(`Don hang ${order.orderid}`);
    console.log(`Khach hang ${order.customerName}`);
    console.log("san pham");
    for (let i = 0; i < order.items.length; i++) {
    console.log(`-${order.items[i].product.name} x ${order.items[i].quantity} ->${(order.items[i].product.price*order.items[i].quantity).toLocaleString('vi-VN')} VND`);
    }
    console.log(`Tong cong ${calculateOrderTotal(order)}`);
    if (order.note!=undefined) {
        console.log(`Ghi chu ${order.note}`);
    }
}
const shirt:Product={
    readonly_id:"H01",
    name:"ao so mi",
    price:100000
}
const pants:Product={
    readonly_id:"H02",
    name:"quan dui",
    price:200000
}
const orderExample:Order={
    orderid:"ORD001",
    customerName:"Nguyen Van A",
    items:[
        {product:shirt,quantity:2},
        {product:pants,quantity:2}
    ],
    note:"giai sau 18h"
};
printOrder(orderExample);