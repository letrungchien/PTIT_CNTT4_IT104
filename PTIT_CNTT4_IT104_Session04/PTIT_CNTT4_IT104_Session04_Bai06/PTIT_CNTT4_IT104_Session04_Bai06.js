
const listProduct = {
    id: "1",
    name: "ao",
    price: 300,
    category: {
        id: "1",
        name: "ao so mi"
    },
    discount: 0.2
};
function getFinalPrice(product) {
    if (product.discount == undefined) {
        return product.price;
    }
    return product.price - (product.price * product.discount);
}
function printProductInfo(product) {
    console.log(`1 Ten :${product.category.name}
        2 Gia goc:${product.price}
        3 Gia sau khi giam: ${getFinalPrice(product)} VND
        4 Danh muc: ${product.name}
        `);
}
printProductInfo(listProduct);
//# sourceMappingURL=PTIT_CNTT4_IT104_Session04_Bai06.js.map