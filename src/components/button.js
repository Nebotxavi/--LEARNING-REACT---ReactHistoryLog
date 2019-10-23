import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <input
          type="submit"
          value={this.props.value}
          onClick={this.props.handleSubmit}
        ></input>
      </React.Fragment>
    );
  }
}

export default Button;
