import React, { useState, useContext, useEffect } from "react";
import "./hero.css";
import { AuthContext } from "../../../context/auth-context";
import Carousel from "./Carousel";
import url from "../../../Images/Logo.png";

export default function Hero() {
  const dat = useContext(AuthContext);

  let cont;
  if (dat.name === null) {
    cont = "HELLO";
  } else {
    cont = `${dat.name.length < 7 ? dat.name : dat.name.slice(0, 5) + "..."}`;
  }
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  // const typingSpeed = 100;
  const targetText = `Welcome to IITI Night Canteen,${cont}`;

  useEffect(() => {
    if (currentIndex < targetText.length) {
      const timeout = setInterval(() => {
        setText((prevText) => prevText + targetText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 75);
      return () => clearTimeout(timeout);
    }
  });
  return (
    <div>
      <div className="hero-home">
        <div className="left-column">
          <div className="writing-animation">
            {/* <img className="image" src={url} /> */}
            <p> {text} </p>
          </div>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi
            augue, ornare sit amet erat eu, lacinia fringilla leo. Fusce
            imperdiet feugiat viverra. Nunc diam lorem, lacinia et nunc ut,
            sodales vulputate neque.{" "}
          </p>
        </div>
        <div className="right-column">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
