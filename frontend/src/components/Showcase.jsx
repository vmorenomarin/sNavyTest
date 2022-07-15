import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";

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
      <div className="d-flex flex-row justify-content-evenly">
        <h2>Actual collection</h2> <a href="/add"><i className="fa-solid fa-circle-plus fs-3 text-success"></i></a>
      </div>
      {
        <div className="row row-cols-2 justify-content-evenly">
          {starships.map((starship) => (
            <div
              className="col-md-4 col-sm-12 m-2 p-0 text-decoration-none text-reset"
              key={starship._id}
            >
              <div className="card card-starship">
                <div className="card-body">
                  <div className="card-title fs-6 fw-bold d-flex flex-row align-items-center justify-content-between">
                    <div className="text-danger">
                      <i className="fa fa-shuttle-space "></i> {starship.name}
                    </div>
                    <span className="badge badge-sm rounded-pill bg-info text-dark ">
                      {starship.type}
                    </span>
                  </div>

                  <div className="card-text">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <i className="fa-solid fa-weight-hanging me-2"></i>
                        {starship.weight} tons
                      </li>
                      <li className="list-group-item">
                        <i className="fa-solid fa-gas-pump me-2"></i>
                        {starship.fuel}
                      </li>
                      <li className="list-group-item">
                        <i className="fa-solid fa-gauge me-2"></i>
                        {starship.max_speed} km/h
                      </li>
                      <li className="list-group-item">
                        <i className="fa-solid fa-rocket me-2"></i>
                        {starship.thrust} tons
                      </li>
                      <li className="list-group-item">
                        <i className="fa-solid fa-calendar me-2"></i>
                        <small>{moment(starship.launch_date).format("LL")}</small>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-footer text-center d-flex justify-content-center flex-wrap">
                  <a href={"/update/"+starship._id} className="btn btn-warning my-1">
                    <i className="fa-solid fa-pen"></i> Update Data
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
