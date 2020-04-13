import React from "react";

import "./styles.css";

import { CheckboxProps } from "./types";

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <label className="checkbox-container">
      {props.label}
      <input type="checkbox" defaultChecked={props.defaultChecked} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
