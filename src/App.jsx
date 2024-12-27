/* eslint-disable no-unused-vars */
import React from "react";
import { Featured, Footer, Hero, Navbar, Services } from "./components";

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Services />
      <Featured />
      <Footer />
    </section>
  );
};

export default App;
