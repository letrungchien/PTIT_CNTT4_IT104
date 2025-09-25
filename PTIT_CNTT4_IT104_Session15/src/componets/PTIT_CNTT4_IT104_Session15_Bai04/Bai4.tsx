import React, { Component } from 'react'
type InitState ={
   progress:string;
   flag:boolean;
}
export default class Bai4 extends Component <object,InitState> {
    constructor(props:object){
        super(props)
        this.state={
            progress:"",
            flag:false
        }
    }
  handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        this.setState({flag:true});
  }
  handleChange=(e:React.InputEvent<HTMLInputElement>)=>{
    this.setState({progress:e.target.value});
    this.setState({flag:false});
  }
  render() {
    return (
      <div>
        <p>Tien do hoan thanh {this.state.flag ?this.state.progress:""} %</p>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="range" onChange={this.handleChange}/><br />
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
