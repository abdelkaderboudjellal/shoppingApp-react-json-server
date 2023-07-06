import React from "react";

import Contact from "./Contact";

import About from "./About";
import CategoryShop from "./CategoryShop";

const Home = () => {
  return (
    <div id="home">
      <About />
      <CategoryShop />
      <Contact />
    </div>
  );
};

export default Home;
