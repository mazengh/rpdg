import React from "react";
import classes from "./Dash.module.css";
import ControlButton from "../ControlButton/ControlButton";
import Dice from "../Dice/Dice";

const dash = props => {
  return (
    <div className={classes.Dash}>
      <ControlButton icon="ion-ios-plus-outline" text="New Game" />
      <Dice value={props.dice1} />
      <Dice value={props.dice2} />

      <ControlButton icon="ion-ios-loop" text="Roll Dice" />
      <ControlButton icon="ion-ios-download-outline" text="Hold" />
      <input
        type="number"
        placeholder="Final score"
        className={classes.FinalScore}
      />
    </div>
  );
};

export default dash;
