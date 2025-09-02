import React from "react";
import Banner from "./components/banner";
import Slide from "./components/slide";
import Updated from "./components/updated";

const Home = () => {
  return (
    <div className="mx-2 lg:mx-0 md:mx-4 sm:mx-4">
      <Banner />
      <Slide />
      <Updated />
    </div>
  );
};

export default Home;
