import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import FeaturedRooms from "../components/FeaturedRooms";
import OurFacilities from "../components/OurFacilities";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TraVoa</title>
      </Helmet>
      <Slider></Slider>
      <FeaturedRooms></FeaturedRooms>
      <OurFacilities></OurFacilities>
    </div>
  );
};

export default Home;
