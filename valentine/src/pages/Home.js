import React from "react";
import please from "../assets/please.jpeg";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <h1>Do you wanna be my valentine?</h1>

        <img src={please} className="please-meme" alt="pleaseeeee" />
        <Link to="/yes">
          <button>YES</button>
        </Link>
        <Outlet />
        <button className="no-button">no</button>
      </header>
    </div>
  );
}

export default Home;
