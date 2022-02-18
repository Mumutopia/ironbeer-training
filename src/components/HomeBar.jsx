import "./HomeBar.css";

import React from "react";
import { Link } from "react-router-dom";

export default function HomeBar() {
  return (
    <div className="homebar-container">
      <Link className="homebar-container" to="/">
        <h1>Iron</h1>
        <img className="home-logo" src="./img/home128.png" alt="home" />{" "}
        <h1>Beers</h1>
      </Link>
    </div>
  );
}
