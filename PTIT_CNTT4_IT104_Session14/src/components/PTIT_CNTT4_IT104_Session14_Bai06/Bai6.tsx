import React, { Component } from 'react'
type InitialState={
    sex:string;
}
export default class Bai6 extends Component <object,InitialState>{
    constructor(props:object){
        super(props)
        this.state={
            sex:"",
        }
    }
    handleSubmit=(e:React.FocusEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log("gioi tinh da chon ",this.state.sex);
      
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
         this.setState({sex:e.target.value});
    }
  render() {
    return (
      <div>
        <p>gioi tinh : {this.state.sex}</p>
        <form action="" onSubmit={this.handleSubmit}>
             <input type="radio" onChange={this.handleChange} value={"nam"} name="sex" /> <label htmlFor="">Nam</label><br />
                  <input type="radio" onChange={this.handleChange} value={"nu"} name="sex" /> <label htmlFor="">Nu</label><br />
                      <input type="radio" onChange={this.handleChange} value={"khac"} name="sex" /> <label htmlFor="">Khac</label><br />
             <button>Submit</button>

        </form>
      </div>
    )
  }
}
