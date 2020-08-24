import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";

ReactDOM.render(
  <>
    <Card
      imgscr="https://wallpapercave.com/wp/wp4056410.jpg"
      title="Netflix Original Series"
      sname="Dark"
      links="https://www.netflix.com/in/title/80100172?source=35"
    />
    <Card
      sname="Extra curricular"
      imgscr="https://www.hellokpop.com/wp-content/uploads/2020/03/Extracurricular_Pre_Jisoo_Ver_RGB_US-691x1024.jpg"
      title="Netflix Original Series"
      links="https://www.netflix.com/in/title/80990668?source=35"
    />
    <Card
      sname="Stranger Things"
      imgscr="https://wallpapercave.com/wp/wp1839578.jpg"
      title="Netflix Original Series"
      links="https://www.netflix.com/title/80057281"
    />
    <Card
      sname="Money Heist"
      imgscr="https://wallpapercave.com/wp/wp5162356.jpg"
      title="Netflix Original Series"
      links="https://www.netflix.com/in/title/80192098"
    />
  </>,
  document.getElementById("root")
);
