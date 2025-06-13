import React from "react";
import hotelImg from "../assets/hotel-room-natural-light.png";
import foodImg from "../assets/restaurant-food.jpg";
import { HiOutlineSparkles } from "react-icons/hi2";
import PageTitle from "./PageTitle";
import CountUp from "react-countup";

const OurFacilities = () => {
  return (
    <div>
      <PageTitle
        title={"Our Facilities"}
        logo={<HiOutlineSparkles />}
      ></PageTitle>
      <div className="flex gap-5">
        <div className="relative w-1/2">
          <img
            className="w-full h-96 rounded-xl object-cover"
            src={hotelImg}
            alt="hotel-image"
          />
          <div className="glass text-white px-10 py-5 rounded-2xl absolute -bottom-10 left-1/5 flex items-center gap-5">
            <div className="text-center">
              <h1 className="text-2xl md:text-5xl font-bold">
                <CountUp end={120} duration={5} suffix="+" />
              </h1>
              <p>Rooms Available</p>
            </div>
            <div>
              <p className="w-72">
                Experience unmatched comfort in our elegantly designed rooms
                with modern amenities and a peaceful ambiance for a perfect
                stay.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-1/2">
          <img
            className="w-full h-96 rounded-xl object-cover"
            src={foodImg}
            alt="hotel-food-image"
          />
          <div className="glass text-white px-10 py-5 rounded-2xl absolute -bottom-10 left-1/5 flex items-center gap-5">
            <div className="text-center">
              <h1 className="text-2xl md:text-5xl font-bold">
                <CountUp end={105} duration={5} suffix="+" />
              </h1>
              <p>Menu Selection</p>
            </div>
            <div>
              <p className="w-72">
                Discover a curated menu of over 100 handcrafted dishes, blending
                rich local flavors with international cuisine for every taste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFacilities;
