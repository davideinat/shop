import React from "react";
import { Slider } from "antd";

import "./Header.css";

function Header(props) {
  const min = props.min;
  const max = props.max;
  return (
    <div className="Header">
      <h2>Header</h2>
      {/* {MinMax.length !== 0 && ( */}
      <Slider
        min={min}
        max={max}
        range
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      ></Slider>
      {/* )} */}
    </div>
  );
}
export default Header;
