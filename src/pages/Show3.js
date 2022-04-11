import React from "react";
import Navbuttons from "../components/Navbuttons";
import Navigation from "../components/Navigation";

const Show3 = () => {
  return (
    <div>
      <Navigation />
      <h1>Show3</h1>
      <Navbuttons left={"/campus-2"} right={"/campus-4"} />
    </div>
  );
};

export default Show3;
