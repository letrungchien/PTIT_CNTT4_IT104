import React, { Component } from 'react'
type State={
    status:boolean;
}
export default class Bai2 extends Component <object,State> {
    constructor(props:object){
        super(props);
        this.state={
            status:false
        }
    }
    handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.state.status==false?this.setState({status:true}):this.setState({status:false});

    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <b>{this.state.status==false? "vui long dang nhap":"xin chao chien"}</b><br />
             <button>{this.state.status==false? "dang nhap":"dang xuat"}</button>
        </form>
      </div>
    )
  }
}
