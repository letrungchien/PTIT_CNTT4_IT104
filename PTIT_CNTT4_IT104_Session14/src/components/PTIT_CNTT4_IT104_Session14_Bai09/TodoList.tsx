import React, { Component } from 'react'
type Job={
 name:string;
}
type JobList={
    job:Job[];
      current: string;
}
export default class TodoList extends Component <object,JobList>{
    constructor(props:object){
        super(props)
        this.state={
            job:[],
            current:""
        }
    }
      handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ current: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.current.trim() === "") {
      alert("Không được để trống");
      return;
    }
    const newJob: Job = { name: this.state.current };
    this.setState({
      job: [...this.state.job, newJob],
      current: ""
    });
  };

  render() {
    return (
      <div>
      <form action="" onSubmit={this.handleSubmit}>
            <h2>Danh sach cong viec</h2>
        <input type="text" value={this.state.current} onChange={this.handleChange} style={{width:"600px"}} />
        <button>Them</button>
        <div>
            {this.state.job.map((item,index)=>(
                <div key={index}>
                    <input type="checkbox" />
                    <span> {item.name}</span>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                    <span><button>sua</button> &nbsp;&nbsp; &nbsp; <button>xoa</button></span>
                </div>
            ))}
        </div>
        <p>Cong viec hoan thanh 0/{this.state.job.length}</p>
      </form>
      </div>
    )
  }
}
