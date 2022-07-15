import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const AddShip = () => {
  const [starship, setStarship] = useState([]);

  const addShip = async (newShip) => {
    console.log(newShip);
    try {
      const { data } = await axios.post("/starships/", newShip);
      if (data.ok) {
        return Swal.fire({
          icon: "success",
          title: "New starship",
          text: data.message,
          timer: 1500,
        });
      }
    } catch (error) {
      if (!error.response.ok);
      return Swal.fire({
        icon: "error",
        title: "Cannot add starship.",
        text: error.response.message,
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="container mt-3 col-8" id="starshipsContainer">
      <h2 className="mb-3">Add ship</h2>

      <form
        onSubmit={(e) => {
          addShip(starship);
        }}
      >
        <div className="row mb-2 g-2">
          <div className="col-sm-4">
            <label>Name</label>
            <input
              required
              type="text"
              className="form-control form-control-sm"
              placeholder="Soyus"
              onChange={(e) =>
                setStarship({ ...starship, name: e.target.value })
              }
            />
          </div>
          <div className="col-sm-4">
            <label>Weight</label>
            <input
              required
              type="number"
              className="form-control form-control-sm"
              placeholder="In tons"
              onChange={(e) =>
                setStarship({ ...starship, weight: e.target.value })
              }
            />
          </div>
          <div className="col-sm-4">
            <label>Ship type</label>
            <select
              className="form-select form-select-sm"
              required
              onChange={(e) =>
                setStarship({ ...starship, type: e.target.value })
              }
            >
              <option defaultValue>Choose a type...</option>
              <option>launcher</option>
              <option>manned</option>
              <option>no-manned</option>
            </select>
          </div>
        </div>

        <div className="row g-2">
          <div className="col-sm-3">
            <label>Max speed</label>
            <input
              required
              type="number"
              className="form-control form-control-sm"
              placeholder="In km/h"
              onChange={(e) =>
                setStarship({ ...starship, speed: e.target.value })
              }
            />
          </div>
          <div className="col-sm-3">
            <label>Thrust</label>
            <input
              type="number"
              required
              className="form-control form-control-sm"
              placeholder="In tons"
              onChange={(e) =>
                setStarship({ ...starship, thrust: e.target.value })
              }
            />
          </div>
          <div className="col-sm-3">
            <label>Fuel type</label>
            <input
              type="text"
              required
              className="form-control form-control-sm"
              placeholder="Fuel"
              onChange={(e) =>
                setStarship({ ...starship, fuel: e.target.value })
              }
            />
          </div>
          <div className="col-sm-3">
            <label>Launch date</label>
            <input
              type="date"
              className="form-control form-control-sm"
              placeholder="Launch date"
              onChange={(e) =>
                setStarship({ ...starship, date: e.target.value })
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success mt-3 align-items-center"
        >
          <i className="fa-solid fa-shuttle-space fs-3"></i>
        </button>
      </form>
    </div>
  );
};
