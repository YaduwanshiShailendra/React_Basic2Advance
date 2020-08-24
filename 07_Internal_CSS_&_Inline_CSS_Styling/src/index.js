import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "Shailendra";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://www.facebook.com/shailendran70";

const heading = {
  color: "#fa9191",
  textAlign: "center",
  textTransform: "capitalize",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9c5",
  margin: "50px 0",
  fontFamily: '"Josefin Sans", sans - serif',
};

ReactDOM.render(
  <>
    <h1 style={heading}> Hello my name is {name}</h1>
    {/* className="heading" for css */}
    <p> Current Date is = {currDate} </p>
    <p> Current Time is = {currTime} </p>
    <div className="img_div">
      <img src={img2} alt="randomImages" />
      <img src={img3} alt="randomImages" />
      <a href={links} target="_shaili">
        {" "}
        {/* target="_shaili" is use to open in new tab */}
        <img src={img1} alt="randomImages" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);
