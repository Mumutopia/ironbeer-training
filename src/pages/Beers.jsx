import "./Beers.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Beers() {
  const [beers, setBeers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const res = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );

        console.log(res.data);
        setBeers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBeers();
  }, []);

  console.log(beers);

  return (
    <div>
      <div className="search-beer-container">
        <input
          className="search-beer-input"
          type="text"
          placeholder="Search Beer"
          onChange={(event) => {
            setSearchText(event.target.value.toLowerCase());
          }}
        />
      </div>
      <div className="beer-list">
        {!beers.length ? (
          <p>loading...</p>
        ) : (
          beers
            .filter((beer) => {
              if (searchText === "") {
                return beer;
              } else if (beer.name.toLowerCase().includes(searchText)) {
                return beer;
              } else return false;
            })
            .map((beer, i) => {
              return (
                <Link
                  className="beers-list-item"
                  key={i}
                  to={"/beer/" + beer._id}
                >
                  <div className="beer-list-img-container">
                    <img src={beer.image_url} alt="beeer" />
                  </div>
                  <div className="beer-list-infos">
                    <h3>{beer.name}</h3>
                    <span>{beer.tagline}</span>
                  </div>
                </Link>
              );
            })
        )}
      </div>
    </div>
  );
}
