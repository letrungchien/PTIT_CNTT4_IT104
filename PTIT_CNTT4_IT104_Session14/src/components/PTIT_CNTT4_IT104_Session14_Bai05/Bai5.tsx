import React, { Component } from 'react'
type Product={
   id:string;
   name:string;
   price:string;
   quantity:string;
}
type ListProduct={
    product:Product[];
}
export default class Bai5 extends Component <object,ListProduct> {
    constructor(props:object){
        super(props)
        this.state={
            product:[{
            id:"",
            name:"",
            price:"",
            quantity:"",
        },
 ]}
    }


handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
 e.preventDefault();
 console.log(this.state.product);
}
handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
   const {name,value}=e.target;
   this.setState({product:{...this.state.product,[name]:value}})
}
  render() {
    return (
      <div>
      <form action="" onSubmit={this.handleSubmit}>
          <h4>Them san pham moi</h4>
        <label htmlFor="">Ma san pham</label> <br />
        <input type="text"  onChange={this.handleChange} name='id' /> <br />
        <label htmlFor="">ten san pham</label> <br />
          <input type="text"  onChange={this.handleChange} name='name' /> <br />
        <label htmlFor="">Gia</label><br />
          <input type="text"  onChange={this.handleChange} name='price' /><br />
        <label htmlFor="">So luong</label><br />
          <input type="number"  onChange={this.handleChange} name='quantity' min={1}/><br />
          <button>Dang ky</button>
      </form>
      </div>
    )
  }
}
