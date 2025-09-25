import React, { Component } from 'react'
 type InitState={
    date:string;
    flag:boolean;
 }
export default class Bai3 extends Component <object,InitState> {
    constructor(props:object){
        super(props)
        this.state={
            date:"",
            flag:false
        }
    }
    handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
         e.preventDefault();
         this.setState({flag:true})
    }
    handleChange=(e:React.InputEvent<HTMLInputElement>)=>{
        this.setState({date:e.target.value})
        this.setState({flag:false})
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <p>Ngay sinh :{this.state.flag ?this.state.date :""}</p>
            <input type="date" onChange={this.handleChange} /> <br />
            <button>Submit</button>

        </form>
      </div>
    )
  }
}
