import React from "react";
import ReactDOM from "react-dom";
import { add, mult, sub, div } from "./Calc";

ReactDOM.render(
  <>
    <ol>
      <li> Sum of two no is {add(40, 4)}.</li>
      <li> Subtraction of two no is {sub(40, 4)}.</li>
      <li> Division of two no is {div(40, 4)}.</li>
      <li> Multiplication of two no is {mult(40, 4)}.</li>
    </ol>
  </>,
  document.getElementById("root")
);
