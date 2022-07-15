import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";

export const UpdateShip = () => {
  let navigate = useNavigate();
  const [starship, setStarship] = useState([]);
  const { id } = useParams();
  const getStarship = async () => {
    try {
      const { data } = await axios.get("/starships/" + id);
      setStarship(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getStarship();
  }, []);

  const deleteStarship = async () => {
    try {
      const { data } = await axios.delete("/starships/" + id);
      if (data.ok) {
        Swal.fire({
          icon: "success",
          title: "Starship deleted",
          text: data.message,
          showConfirmButton: true,
        });
      }
      return navigate("/", { replace: true });
    } catch (error) {
      if (!error.response.ok) {
        return Swal.fire({
          icon: "error",
          title: "Cannot delete starship.",
          text: error.response.data.message,
          showConfirmButton: true,
        });
      }
    }
  };

  const updateShip = async (shipToUpdate) => {
    try {
      const { data } = await axios.put("/starships/" + id, shipToUpdate);
      if (data.ok) {
        return Swal.fire({
          icon: "success",
          title: "Updated starship",
          text: data.message,
          // timer: 1500,
        });
      }
    } catch (error) {
      if (!error.response.ok);
      return Swal.fire({
        icon: "error",
        title: "Cannot updated starship.",
        text: error.response.message,
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="container mt-3 col-8" id="starshipsContainer">
      <h2 className="mb-3">Update ship</h2>

      <form
        onSubmit={(e) => {
          updateShip(starship);
        }}
      >
        <div className="row mb-2 g-2">
          <div className="col-sm-4">
            <label>Name</label>
            <input
              value={starship.name}
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
              value={starship.weight}
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
              value={starship.type}
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
              value={starship.max_speed}
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
              value={starship.thrust}
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
              value={starship.fuel}
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
              value={starship.launch_date}
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
          className="btn btn-success m-3 align-items-center"
        >
          <i className="fa-solid fa-shuttle-space fs-3"></i>
        </button>

        <button
          onClick={(e) => deleteStarship()}
          className="btn btn-danger align-items-center"
        >
          <i className="fa-solid fa-trash fs-3"></i>
        </button>
      </form>
    </div>
  );
};
