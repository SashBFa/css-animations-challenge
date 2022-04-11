import React from "react";
import Navbuttons from "../components/Navbuttons";
import Navigation from "../components/Navigation";

const Show4 = () => {
  return (
    <div>
      <Navigation />
      <h1>Show4</h1>
      <Navbuttons left={"/campus-3"} right={"/contact"} />
    </div>
  );
};

export default Show4;
