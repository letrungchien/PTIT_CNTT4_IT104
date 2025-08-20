import React, { Component } from 'react'
type Input={
    input:string
}
export default class Exercises10 extends Component <object,Input> {
    constructor(props:object){
        super(props)
        this.state={
            input:""
        }
    }
      handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({input:e.target.value});
  }
  render() {
  
    return (
      <div>
        <h3>Dữ liệu: {this.state.input}</h3>
          <input
         type="text"
         placeholder="nhập công việc mới"
         onChange={this.handleChgean}
          />
      </div>

    )
  }
}
