import React, { Component } from 'react'

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
type State = {
  products: Product[];
  carts:Product[];
  show:boolean
}

export default class Bai8 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "iPhone 11", price: 100000, quantity: 6 },
        { id: 2, name: "iPhone 12", price: 200000, quantity: 9 },
        { id: 3, name: "iPhone 13", price: 300000, quantity: 8 },
        { id: 4, name: "iPhone 14", price: 400000, quantity: 6 },
        { id: 5, name: "iPhone 15", price: 500000, quantity: 17 },
        { id: 6, name: "iPhone 16", price: 600000, quantity: 7 },
      ],
      carts:[],
      show:false
    
    }
  }
handleAdd = (item: Product) => {
    let index = -1;
    let index1 = -1;
    for (let i = 0; i < this.state.products.length; i++) {
        if (this.state.products[i].id === item.id) {
            index1 = i;
        }
    }

    for (let i = 0; i < this.state.carts.length; i++) {
        if (this.state.carts[i].id === item.id) {
            index = i;
        }
    }
    if (index === -1) {
        this.setState({
            carts: [...this.state.carts, { ...item, quantity: 1 }],
        });
    } else {
       if(this.state.products[index1].quantity<1){
        alert("het hang");
        return;
       }
        const newCarts = [...this.state.carts];
        newCarts[index].quantity += 1;
        this.setState({ carts: newCarts });
    }

    if (index1 !== -1) {
        const newProducts = [...this.state.products];
        newProducts[index1].quantity -= 1;
        this.setState({ products: newProducts });
    }
};
handleShow=()=>{
    this.state.show?this.setState({show:false}):this.setState({show:true})
}
  render() {
    return (
        <>
        <button onClick={this.handleShow}>gio hang</button>
        <div style={{display:"flex"}}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px"
      }}>
        {this.state.products.map((item, index) => (
          <div key={index} style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "16px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "0.3s",
            backgroundColor: "#fff"
          }}>
            <h3 style={{ marginBottom: "10px", color: "#333" }}>{item.name}</h3>
            <p style={{ color: "green", fontWeight: "bold" }}>{item.price.toLocaleString()} VND</p>
            <p style={{ fontSize: "14px", color: "#666" }}>Còn lại: {item.quantity}</p>
            <button style={{
              marginTop: "10px",
              padding: "8px 16px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold"
            }} onClick={()=>this.handleAdd(item)}>
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
  {this.state.show?
      <div>
        {this.state.carts.map((item,index)=>(
          <div key={index}>   <span>{item.name}</span> <button>+</button><span>{item.quantity}</span><button>-</button><button>xoa</button></div>
       ) )}
      </div>:""}
      </div>
      </>
    )
  }
 
}

