import "./BeerDetails.css";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BeerDetails() {
  const [beer, setBeer] = useState();
  const params = useParams();

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const res = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/" + params.id
        );
        console.log(res.data);
        setBeer(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBeer();
  }, []);

  return (
    <div className="beer-details-container">
      {!beer ? (
        <p>loading...</p>
      ) : (
        <div className="beer-details">
          <div className="beer-details-img-container">
            <img src={beer.image_url} alt="beeeer" />
          </div>
          <h3>{beer.name}</h3>
          <div className="beer-tag-and-date">
            {" "}
            <span className="beer-tagline">{beer.tagline}</span>
            <span className="beer-date">{beer.first_brewed}</span>
          </div>
          <p className="beer-description">{beer.description}</p>
          <span className="beer-contributor">{beer.contributed_by}</span>
        </div>
      )}
    </div>
  );
}
