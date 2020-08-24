import React from "react";
import ReactDOM from "react-dom";
import myfav, { favprog, myName, myHobby } from "./App"; // for multiple import

ReactDOM.render(
  <>
    <ol>
      <li> Shailendra</li>
      <li>{myfav}</li>
      <li>{favprog}</li>
      <li>{myName()}</li>
      <li>{myHobby()}</li>
    </ol>
  </>,
  document.getElementById("root")
);
