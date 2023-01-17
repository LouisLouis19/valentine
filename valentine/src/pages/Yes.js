import React from "react";
import dog from "../assets/dog.webp";
import frog from "../assets/frog.png";
import iceinveins from "../assets/ice-in-veins.jpeg";

function Yes() {
  return (
    <div className="App">
      <div className="memes">
        <img src={dog} className="dog-meme" />
        <img src={frog} className="frog-meme" />
      </div>
      <h1>I KNEW YOU ALWAYS WANTED</h1>
      <img src={iceinveins} className="meme" />
    </div>
  );
}

export default Yes;
