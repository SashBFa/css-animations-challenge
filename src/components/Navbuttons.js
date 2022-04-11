import React from "react";
import { NavLink } from "react-router-dom";

const Navbuttons = (props) => {
  return (
    <div className="navButtons">
      {props.left && (
        <NavLink
          to={props.left}
          className="navButtons__arrow navButtons__arrow--left"
        >
          <span>&#10092;</span>
        </NavLink>
      )}
      {props.right && (
        <NavLink
          to={props.right}
          className="navButtons__arrow navButtons__arrow--right"
        >
          <span>&#10093;</span>
        </NavLink>
      )}
    </div>
  );
};

export default Navbuttons;
