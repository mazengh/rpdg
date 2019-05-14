import React from "react";
import classes from "./Panel.module.css";

const panel = props => {
  const panelClasses = [classes.Panel];

  // if panel number is equal to current active player
  // number, set it to active
  if (props.activePlayer === props.number) {
    panelClasses.push(classes.Active);
  }

  return (
    <div className={panelClasses.join(" ")}>
      <div className={classes.PlayerName}>Player {props.number}</div>
      <div className={classes.PlayerScore}>{props.total}</div>
      <div className={classes.CurrentRollBox}>
        <div className={classes.CurrentRollLabel}>Current</div>
        <div className={classes.CurrentRollTotal}>{props.current}</div>
      </div>
    </div>
  );
};

export default panel;
