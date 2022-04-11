import React from "react";
import Navbuttons from "../components/Navbuttons";
import Navigation from "../components/Navigation";

const Show2 = () => {
  return (
    <div>
      <Navigation />
      <h1>Show2</h1>
      <Navbuttons left={"/campus-1"} right={"/campus-3"} />
    </div>
  );
};

export default Show2;
