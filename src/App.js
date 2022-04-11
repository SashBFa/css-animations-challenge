import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Show1 from "./pages/Show1";
import Show2 from "./pages/Show2";
import Show3 from "./pages/Show3";
import Show4 from "./pages/Show4";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campus-1" element={<Show1 />} />
        <Route path="/campus-2" element={<Show2 />} />
        <Route path="/campus-3" element={<Show3 />} />
        <Route path="/campus-4" element={<Show4 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
