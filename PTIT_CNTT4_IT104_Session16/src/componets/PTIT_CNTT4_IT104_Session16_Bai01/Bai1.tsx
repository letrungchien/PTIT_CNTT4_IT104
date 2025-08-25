import React, { Component } from 'react'
type State={
    studentList:string[];
}
export default class Bai1 extends Component <object,State> {
    constructor(props:object){
        super(props);
        this.state={
            studentList:["toan","van","vat ly","the duc"]
        }
    }

  render() {
    return (
      <div>
        <h3>danh sach mon hoc</h3>
         {this.state.studentList.map((item,index)=> (<div key={index}>{item}</div>))}
      </div>
    )
  }
}
