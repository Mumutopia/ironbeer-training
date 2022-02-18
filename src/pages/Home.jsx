import "./Home.css"

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <Link className="links-container" to="/beers">
        <div className="links-img-container">
          <img className="links-img" src="./img/beers.png" alt="beers-list" />
        </div>
        <div className="link-description_container">
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium possimus assumenda, rem aperiam blanditiis quae maxime
            optio quod explicabo eius reiciendis facilis omnis odit, alias
            exercitationem cupiditate distinctio similique asperiores!
          </p>
        </div>
      </Link>
      <Link className="links-container" to="/random">
        <div className="links-img-container">
          <img className="links-img" src="./img/random-beer.png" alt="random-beer" />
        </div>
        <div className="link-description_container">
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium possimus assumenda, rem aperiam blanditiis quae maxime
            optio quod explicabo eius reiciendis facilis omnis odit, alias
            exercitationem cupiditate distinctio similique asperiores!
          </p>
        </div>
      </Link>
      <Link className="links-container" to="/newbeer">
        <div className="links-img-container">
          <img  className="links-img"src="./img/new-beer.png" alt="new-beer" />
        </div>
        <div className="link-description_container">
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium possimus assumenda, rem aperiam blanditiis quae maxime
            optio quod explicabo eius reiciendis facilis omnis odit, alias
            exercitationem cupiditate distinctio similique asperiores!
          </p>
        </div>
      </Link>
    </div>
  );
}
