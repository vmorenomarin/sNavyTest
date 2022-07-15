import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i className="fa fa-shuttle-space text-danger"></i> Starship Stock
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link " href="/add">
                <i className="fa fa-plus"></i> Add Ship
              </a>
              <a className="nav-link" href="/">
                <i className="fa fa-eye"></i> Stock
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
