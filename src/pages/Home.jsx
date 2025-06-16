import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../components/Slider";
import FeaturedRooms from "../components/FeaturedRooms";
import OurFacilities from "../components/OurFacilities";
import SpecialOffer from "../components/SpecialOffer";
import OurLocation from "../components/OurLocation";
import Testimonial from "../components/Testimonial";
import PopUp from "../components/PopUp";

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
      <Testimonial></Testimonial>
      <OurLocation></OurLocation>
      {!sessionStorage.getItem("popUpShown", "true") && <PopUp></PopUp>}
    </div>
  );
};

export default Home;
