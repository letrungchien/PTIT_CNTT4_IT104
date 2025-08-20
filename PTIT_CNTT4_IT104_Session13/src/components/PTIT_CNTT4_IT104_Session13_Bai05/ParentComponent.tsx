import React, {  Component } from 'react'
import ChildrenComponent from './ChildrenComponent'
interface Product{
    id:number,
    name:string,
    price:number,
    quantity:number
}
export default class ParentComponent extends Component <object,Product> {
   constructor(props:object){
    super(props)
    this.state={
        id:1,
        name:"Buoi ba roi",
        price:12000,
        quantity:2
    }
   }
  render() {
    return (
      <ChildrenComponent product={this.state}></ChildrenComponent>
    )
  }
}
