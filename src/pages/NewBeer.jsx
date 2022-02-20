import "./NewBeer.css";

import React, { useState } from "react";
import axios from "axios";

export default function NewBeer() {
  const [newBeer, setNewBeer] = useState({
    name: "",
    description: "test",
    tagline: "",
    first_brewed: "",
    contributed_by: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("teest", newBeer);
    try {
      const res = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      console.log(res);
      console.log("envoyé !");
    } catch (err) {
      console.error(err);
    }
  };

  console.log(newBeer);

  return (
    <div className="newbeer-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="" htmlFor="">
          Name
        </label>
        <input
          type="text"
          onChange={(evt) =>
            setNewBeer((prevState) => {
              return { ...prevState, name: evt.target.value };
            })
          }
        />
        <label htmlFor="">Tagline</label>
        <input
          type="text"
          onChange={(evt) =>
            setNewBeer((prevState) => {
              return { ...prevState, tagline: evt.target.value };
            })
          }
        />
        <label htmlFor="">Description</label>
        <textarea
          className="description-input"
          type="text"
          onChange={(evt) =>
            setNewBeer((prevState) => {
              return { ...prevState, description: evt.target.value };
            })
          }
        />
        <label htmlFor="">First Brewed</label>
        <input
          type="text"
          placeholder="mm/yyyy"
          onChange={(evt) =>
            setNewBeer((prevState) => {
              return { ...prevState, first_brewed: evt.target.value };
            })
          }
        />
        <label htmlFor="">Contributor</label>
        <input
          type="text"
          onChange={(evt) =>
            setNewBeer((prevState) => {
              return { ...prevState, contributed_by: evt.target.value };
            })
          }
        />
        <button className="add-newbeer-button">Add New Beer</button>
      </form>
    </div>
  );
}
