import React, { Component } from "react";

type ClockState = {
  time: Date;
};
export default class Bai7 extends Component<object, ClockState> {
  private timerID?: number;
  constructor(props: object) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({ time: new Date() });
  }
  render() {
    const { time } = this.state;
    return (
    <div style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>
        Thời gian hiện tại:{" "}
        {time.getHours().toString().padStart(2, "0")} :
        {time.getMinutes().toString().padStart(2, "0")} :
        {time.getSeconds().toString().padStart(2, "0")}
      </div>
    );
  }
}
