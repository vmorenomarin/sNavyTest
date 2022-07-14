import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const Showcase = () => {
  const [starships, setStarship] = useState([]);

  const getStarships = useCallback(async () => {
    try {
      const { data } = await axios.get("/starships/");
      setStarship(data.data);
    } catch (error) {
      if (!error.response.ok) {
        return Swal.fire({
          icon: "error",
          title: error.message,
          showConfirmartionButton: true,
        //   timer: 1000,
        });
      }
    }
  }, []);

  useEffect(() => {
    getStarships();
  }, [getStarships]);

  return (
    <div className="container mt-3" id="starshipsContainer">
      <h2>Actual collection</h2>
      {
        <div className="row row-cols-2 justify-content-evenly">
          {starships.map((starship) => (
            <div
              className="col-md-3 col-sm-4 m-2 p-0 text-decoration-none text-reset"
              key={starship._id}
            >
              <div className="card card-starship">
                <div className="card-body">
                  <h5 className="card-title fs-6">{starship.name}</h5>
                  <div className="card-text">
                    <i className="fa-solid fa-dollar"></i> {starship.price}
                  </div>
                </div>
                <div className="card-footer text-center d-flex justify-content-evenly flex-wrap">
                  <a to="/" className="btn btn-warning my-1">
                    <i className="fa-solid fa-cart-plus"></i> Car
                  </a>
                  <a
                    to={"/starship/" + starship._id}
                    className="btn btn-primary my-1"
                  >
                    <i className="fa-solid fa-circle-info"></i> See
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};
