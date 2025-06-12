import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TraVoa</title>
      </Helmet>
      <Slider></Slider>
      <FeaturedRooms></FeaturedRooms>
    </div>
  );
};

export default Home;
