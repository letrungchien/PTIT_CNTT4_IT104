import React, { Component } from 'react'
  type State ={
    isCheck:boolean
  }
export default class Bai6 extends Component <object,State>{
   constructor(props:object){
    super(props);
    this.state={
        isCheck:false
    }
   }
   handleTheme=()=>{
     this.state.isCheck==false?this.setState({isCheck:true}):this.setState({isCheck:false});
   }
  render() {
    return (
<div style={this.state.isCheck?{backgroundColor :"#222",width:"300px",height:"700px",color:"#fff"}:{backgroundColor :"#fff",width:"300px",height:"700px",color:"#222"}}>
    <p >{this.state.isCheck?"che do toi dang bat":"cho do sang dang bat "}</p>
    <button onClick={this.handleTheme}>Chuyen theme</button>
</div>

    )
  }
}
