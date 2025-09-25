import React, { Component } from 'react'
type Count={
    count:number;
}
export default class Bai4 extends Component <object,Count> {
    constructor(props:object){
        super(props)
        this.state={
            count:0
        }
    }
    handleClick=()=>{
            this.setState({count:(this.state.count+1)})
         }
  render() {
    return (
      <div>
    
            <p>{this.state.count}</p>
             <button onClick={this.handleClick}>click</button>   
      </div>
    )
  }
}
