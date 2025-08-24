import React, { Component } from 'react'
type InitState={
    email:string;
}

export default class Bai1 extends Component<object,InitState> {
    constructor(props:object){
        super(props)
        this.state={
            email:'',
        }
    }
  handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log(this.state.email);
  }
  handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    
    this.setState({email:e.target.value});
  }
  render() {
    return (
      <div>
   <form action="" onSubmit={this.handleSubmit}>
    <label htmlFor="">Email</label> <br />
    <input type="text" onChange={this.handleChange}/>
    <button>Submit</button>
   </form>
      </div>
    )
  }
}
