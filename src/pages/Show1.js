import React from "react";
import Navbuttons from "../components/Navbuttons";
import Navigation from "../components/Navigation";

const Show1 = () => {
  return (
    <div>
      <Navigation />
      <h1>Show1</h1>
      <Navbuttons left={"/"} right={"/campus-2"} />
    </div>
  );
};

export default Show1;
