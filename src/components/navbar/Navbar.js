import React from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wraper">
        <div className="navbar-logo">
          <Link to={routes.home}>
            {" "}
            <img src="./assets/logo/logo.png" alt="" />
          </Link>
        </div>
        <div className="navbar-box">
          <div className="navbar-item">
            <div className="yellow-btn">Appel d'urgence</div>{" "}
          </div>
          <div className="navbar-item">
            <NavLink
              to={routes.denounce}
              className={(nav) => (nav.isActive ? "nav-active" : "nav-act")}
            >
              Dénoncer
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink
              to={routes.process}
              className={(nav) => (nav.isActive ? "nav-active" : "nav-act")}
            >
              Suivre la demande
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink
              to={routes.login}
              className={(nav) => (nav.isActive ? "nav-active" : "nav-act")}
            >
              Se connecter
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
