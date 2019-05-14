import React from "react";
import classes from "./ControlButton.module.css";

const controlButton = props => (
  <button className={classes.ControlButton} onClick={props.click}>
    <i className={props.icon} />
    {props.text}
  </button>
);

export default controlButton;
