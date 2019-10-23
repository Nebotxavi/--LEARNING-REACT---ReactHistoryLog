import React, { Component } from "react";

class Reset extends Component {
  render() {
    return (
      <input
        type="submit"
        value="Reset"
        onClick={() => this.props.jumpTo(-1)}
      ></input>
    );
  }
}

export default Reset;
