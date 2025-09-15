import React from 'react'
import axios from "axios";
export default function Product() {
 async function getAllProduct() {
    let product = await axios("http://localhost:8080/product");
    console.log(product.data);
  }
  return (
    <div>Product</div>
  )
}
