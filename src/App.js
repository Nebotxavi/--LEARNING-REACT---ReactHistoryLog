import React, { Component } from "react";
import Buttons from "./components/buttons";
import Reset from "./components/reset";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      step: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.jumpTo = this.jumpTo.bind(this);
  }

  handleSubmit(event) {
    const words = this.state.words.slice(0, this.state.step + 1);

    this.setState({
      words: words.concat(event.target.value),
      step: this.state.words.length
    });
  }

  jumpTo(step) {
    this.setState({
      step: step
    });
  }

  render() {
    const words = this.state.words;
    const content = this.state.words.map((item, key) => {
      return <li key={key}>{item}</li>;
    });

    const history = words.map((word, num) => {
      return (
        <li key={num}>
          <input
            type="submit"
            value={"#" + (parseInt(num) + 1)}
            onClick={() => this.jumpTo(num)}
          ></input>
        </li>
      );
    });

    return (
      <div className="App">
        <div>
          <Buttons handleSubmit={this.handleSubmit} />
        </div>
        <div>Content:</div>
        <ul>{content}</ul>
        <div>Log:</div>
        <Reset jumpTo={this.jumpTo} />
        <div>{history}</div>
      </div>
    );
  }
}

export default App;
