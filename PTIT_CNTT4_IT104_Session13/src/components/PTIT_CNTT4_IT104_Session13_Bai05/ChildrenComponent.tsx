import React, { Component } from 'react'

type Product={
    id:number,
    name:string,
    price:number,
    quantity:number
}
export default class ChildrenComponent extends Component <Product> {

  render() {
    return (
      <div>
        <h3>Dữ liệu trong component con</h3>
        <p>Id:{this.props.id}</p>
        <p>Product name: {this.props.name}</p>
        <p>Price: {this.props.price}</p>
        <p>Quantity: {this.props.quantity}</p>
      </div>
    )
  }
}
