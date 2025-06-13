import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import FeaturedRooms from "../components/FeaturedRooms";
import OurFacilities from "../components/OurFacilities";
import SpecialOffer from "../components/SpecialOffer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TraVoa</title>
      </Helmet>
      <Slider></Slider>
      <FeaturedRooms></FeaturedRooms>
      <OurFacilities></OurFacilities>
      <SpecialOffer></SpecialOffer>
    </div>
  );
};

export default Home;
