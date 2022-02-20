import "./NavBar.css";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isActive, setIsActive] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  console.log(isActive);

  return (
    <div className="navigation">
      <ul>
        <li className={isActive ? "list active" : "list"}>
          <NavLink
            onClick={() => {
              setIsActive2(false);
              setIsActive3(false);
              setIsActive4(false);
              setIsActive(true);
            }}
            to="/"
          >
            <span className="icon">
              <img src="./img/home-outline.svg" alt="home" />
            </span>
            <span className="text">Home</span>
          </NavLink>
        </li>
        <li className={isActive2 ? "list active" : "list"}>
          <NavLink
            onClick={() => {
              setIsActive(false);
              setIsActive3(false);
              setIsActive4(false);
              setIsActive2(true);
            }}
            to="/beers"
          >
            <span className="icon">
              <img src="./img/clinking-beer-mugs-svgrepo-com.svg" alt="beers" />
            </span>
            <span className="text">Beers</span>
          </NavLink>
        </li>
        <li className={isActive3 ? "list active" : "list"}>
          <NavLink
            onClick={() => {
              setIsActive2(false);
              setIsActive(false);
              setIsActive4(false);
              setIsActive3(true);
            }}
            to="/random"
          >
            <span className="icon">
              <img src="./img/beer-mug-svgrepo-com.svg" alt="random-beer" />
            </span>
            <span className="text">Random Beer</span>
          </NavLink>
        </li>
        <li className={isActive4 ? "list active" : "list"}>
          <NavLink
            onClick={() => {
              setIsActive2(false);
              setIsActive3(false);
              setIsActive(false);
              setIsActive4(true);
            }}
            to="/newbeer"
          >
            <span className="icon">
              <img src="./img/beer-tap-svgrepo-com.svg" alt="new-beer" />
            </span>
            <span className="text">Create Beer</span>
          </NavLink>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
}
