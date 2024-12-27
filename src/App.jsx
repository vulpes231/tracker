/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { Navbar, Footer } from "./components";
import Item from "./pages/Item";

const App = () => {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/item/:tracking" element={<Item />} />
      </Routes>
      <Footer />
    </section>
  );
};

export default App;
