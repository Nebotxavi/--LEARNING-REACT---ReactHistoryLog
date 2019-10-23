import React, { Component } from "react";
import Button from "./button";

class Buttons extends Component {
  renderButton(content) {
    return <Button value={content} handleSubmit={this.props.handleSubmit} />;
  }

  render() {
    return (
      <div>
        {this.renderButton("Hitachi")}
        {this.renderButton("Benafigos")}
        {this.renderButton("Kuma")}
      </div>
    );
  }
}

export default Buttons;
