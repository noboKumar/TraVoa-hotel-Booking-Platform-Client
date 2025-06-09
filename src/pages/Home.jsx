import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TraVoa</title>
      </Helmet>
      <Slider></Slider>
    </div>
  );
};

export default Home;
