import "./NavBar.css";

import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const testRef = useRef([]);

  useEffect(() => {
    const divEl = testRef.current;
  }, []);

  return (
    <div className="navigation">
      <ul ref={testRef}>
        <li className="list active">
          <NavLink className="navbar-links" to="/">
            <span className="icon">
              <img src="./img/home-outline.svg" alt="home" />
            </span>
            <span className="text">Home</span>
          </NavLink>
        </li>
        <li ref={testRef} className="list">
          <NavLink className="navbar-links" to="/beers">
            <span className="icon">
              <img src="./img/clinking-beer-mugs-svgrepo-com.svg" alt="beers" />
            </span>
            <span className="text">Beers</span>
          </NavLink>
        </li>
        <li ref={testRef} className="list">
          <NavLink className="navbar-links" to="/random">
            <span className="icon">
              <img src="./img/beer-mug-svgrepo-com.svg" alt="random-beer" />
            </span>
            <span className="text">Random Beer</span>
          </NavLink>
        </li>
        <li ref={testRef} className="list">
          <NavLink className="navbar-links" to="/newbeer">
            <span className="icon">
              <img src="./img/beer-tap-svgrepo-com.svg" alt="random-beer" />
            </span>
            <span className="text">New Beer</span>
          </NavLink>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
}
