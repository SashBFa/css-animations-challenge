import React from "react";
import Navbuttons from "../components/Navbuttons";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <h1>Contact</h1>
      <Navbuttons left={"/campus-4"} />
    </div>
  );
};

export default Contact;
