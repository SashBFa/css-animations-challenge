import React from "react";
import DynamicText from "../components/DynamicText";
import Navbuttons from "../components/Navbuttons";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <h1 className="home__mainTitle">Childs Play</h1>
      <h2 className="home__secondTitle">
        <DynamicText />
      </h2>
      <Navbuttons right={"/campus-1"} />
    </div>
  );
};

export default Home;
