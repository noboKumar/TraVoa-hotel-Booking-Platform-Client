import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import FeaturedRooms from "../components/FeaturedRooms";
import OurFacilities from "../components/OurFacilities";
import SpecialOffer from "../components/SpecialOffer";
import OurLocation from "../components/OurLocation";

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
      <OurLocation></OurLocation>
    </div>
  );
};

export default Home;
