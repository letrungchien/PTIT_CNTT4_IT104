function getOrderSummary(products){
 let totalBeforeDiscount=0;
 let totalAfterDiscount=0;
 const details =[];

for (const product of products){
    const{
        name,
        price,
        discount,
        quantity,
        bulkDiscount={}
    
} = product;
const {minQuantity=Infinity,extraDiscount =0}=bulkDiscount;
let totalDiscount=discount;
if (quantity>=minQuantity) {
    totalDiscount+=extraDiscount
}

const finalPrice=Math.round(price*(1-totalDiscount));
const subtotal=finalPrice*quantity

totalBeforeDiscount +=price*quantity;
totalAfterDiscount+=subtotal
details.push({name,finalPrice,quantity,subtotal});
}

console.log(`
    {
totalBeforeDiscount: ${totalBeforeDiscount},
totalAfterDiscount: ${totalAfterDiscount},
details : ${JSON.stringify(details,null,2)}
    }
    `);
}
const products=[
{ name :"A",price:100,discount :0.1,quantity:2},
{name:"B",price:200,discount:0.2,quantity:1,bulkDiscount:{minQuantity:2,extraDiscount:0.05}},
{name:"C",price:300,discount:0,quantity:3,bulkDiscount:{minQuantity:3,extraDiscount:0.1}}
];
getOrderSummary(products);