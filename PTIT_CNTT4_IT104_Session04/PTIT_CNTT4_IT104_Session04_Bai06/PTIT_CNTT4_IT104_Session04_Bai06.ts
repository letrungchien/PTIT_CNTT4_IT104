type Product={
    id:string;
    name:string;
    price:number;
    category:{
      id:string;
      name:string;
    };
    discount?:number;

}
const listProduct:Product={
    id:"1",
    name:"ao",
    price:300,
    category:{
        id:"1",
        name:"ao so mi"
    },
    discount:0.2
}

function  getFinalPrice(product:Product){
    if(product.discount==undefined){
        return product.price;
    }
    return product.price-(product.price*product.discount);
}
function printProductInfo(product:Product) {
    console.log(`1 Ten :${product.category.name}
        2 Gia goc:${product.price}
        3 Gia sau khi giam: ${getFinalPrice(product)} VND
        4 Danh muc: ${product.name}
        `);
}
printProductInfo(listProduct);