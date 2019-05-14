import React, { Component } from "react";

import Dash from "./components/Dash/Dash";
import Panel from "./components/Panel/Panel";

import classes from "./App.module.css";

class App extends Component {
  state = {
    activePlayer: 1,
    dice1: 5,
    dice2: 5
  };

  render() {
    return (
      <div className={classes.App}>
        <Panel number={1} activePlayer={this.state.activePlayer} />
        <Panel number={2} activePlayer={this.state.activePlayer} />
        <Dash dice1={this.state.dice1} dice2={this.state.dice2} />
      </div>
    );
  }
}

export default App;
