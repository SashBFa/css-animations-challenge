import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__links">
        <NavLink to="/">
          <li className="navigation__link">Acceuil</li>
        </NavLink>
        <li className="navigation__link navigation__link--shows">
          Campus
          <ul className="navigation__shows">
            <NavLink to="/campus-1">
              <li className="navigation__link">Campus 1</li>
            </NavLink>
            <NavLink to="/campus-2">
              <li className="navigation__link">Campus 2</li>
            </NavLink>
            <NavLink to="/campus-3">
              <li className="navigation__link">Campus 3</li>
            </NavLink>
            <NavLink to="/campus-4">
              <li className="navigation__link">Campus 4</li>
            </NavLink>
          </ul>
        </li>
        <NavLink to="/contact">
          <li className="navigation__link">Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
