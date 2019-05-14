import React, { Component } from "react";

import Dash from "./components/Dash/Dash";
import Panel from "./components/Panel/Panel";

import classes from "./App.module.css";

class App extends Component {
  state = {
    activePlayer: 1,
    dice: [0, 0],
    players: {
      1: {
        current: 0,
        total: 0
      },
      2: {
        current: 0,
        total: 0
      }
    }
  };

  clonePlayer = state => {
    return {
      1: { ...state.players[1] },
      2: { ...state.players[2] }
    };
  };

  nextPlayer = () => {
    this.setState(prevState => {
      const players = this.clonePlayer(prevState);
      players[prevState.activePlayer].current = 0;
      return {
        activePlayer: prevState.activePlayer === 1 ? 2 : 1,
        dice: [0, 0],
        players
      };
    });
  };

  rollHandler = () => {
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;

    if (dice1Value === 1 || dice2Value === 1) {
      // next player's turn
      this.nextPlayer();
    } else {
      //update the current score
      this.setState(prevState => {
        const prevScore = prevState.players[prevState.activePlayer].current;
        const players = this.clonePlayer(prevState);
        players[prevState.activePlayer].current =
          prevScore + dice1Value + dice2Value;

        return {
          dice: [dice1Value, dice2Value],
          players
        };
      });
    }
  };

  holdHandler = () => {
    // Add CURRENT score to the TOTAL score
    this.setState(prevState => {
      const prevTotal = prevState.players[prevState.activePlayer].total;
      const currentScore = prevState.players[prevState.activePlayer].current;
      const updatedTotal = prevTotal + currentScore;

      const players = this.clonePlayer(prevState);
      players[prevState.activePlayer].current = 0;
      players[prevState.activePlayer].total = updatedTotal;

      return {
        dice: [0, 0],
        players
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      // if the total changed and the active player is the previous player
      this.state.activePlayer === prevState.activePlayer &&
      this.state.players[this.state.activePlayer].total !==
        prevState.players[prevState.activePlayer].total
    ) {
      const currentPlayerTotal = this.state.players[this.state.activePlayer]
        .total;
      // Check if current player won the game
      if (currentPlayerTotal >= 100) {
        alert(`Player ${this.state.activePlayer} Won the Game`);
      } else {
        //Next player
        this.nextPlayer();
      }
    }
  }

  render() {
    return (
      <div className={classes.App}>
        <Panel
          number={1}
          activePlayer={this.state.activePlayer}
          current={this.state.players[1].current}
          total={this.state.players[1].total}
        />
        <Panel
          number={2}
          activePlayer={this.state.activePlayer}
          current={this.state.players[2].current}
          total={this.state.players[2].total}
        />
        <Dash
          dice1={this.state.dice[0]}
          dice2={this.state.dice[1]}
          roll={this.rollHandler}
          hold={this.holdHandler}
        />
      </div>
    );
  }
}

export default App;
