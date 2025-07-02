import React from "react";
import hotelImg from "../assets/hotel-room-natural-light.png";
import foodImg from "../assets/restaurant-food.jpg";
import { HiOutlineSparkles } from "react-icons/hi2";
import PageTitle from "./PageTitle";
import CountUp from "react-countup";

const OurFacilities = () => {
  return (
    <div className="pt-10">
      <PageTitle
        title={"Our Facilities"}
        logo={<HiOutlineSparkles />}
      ></PageTitle>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="relative md:w-1/2">
          <img
            className="w-full h-96 rounded-xl object-cover"
            src={hotelImg}
            alt="hotel-image"
          />
          {/* glass-2 */}
          <div className="xl:glass md:bg-gray-200/50 text-gray-800 lg:w-full xl:w-fit xl:text-white px-5 xl:px-10 py-4 xl:py-5 rounded-2xl absolute bottom-0 xl:-bottom-10 xl:left-1/5 flex items-center gap-5">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                <CountUp end={120} duration={5} suffix="+" />
              </h1>
              <p>Rooms Available</p>
            </div>
            <div>
              <p className="lg:w-72 text-sm md:text-lg md:line-clamp-5">
                Experience unmatched comfort in our elegantly designed rooms
                with modern amenities and a peaceful ambiance for a perfect
                stay.
              </p>
            </div>
          </div>
        </div>
        <div className="relative md:w-1/2">
          <img
            className="w-full h-96 rounded-xl object-cover"
            src={foodImg}
            alt="hotel-food-image"
          />
          {/* glass-2 */}
          <div className="xl:glass md:bg-gray-200/50 text-gray-800 lg:w-full xl:w-fit xl:text-white px-5 xl:px-10 py-4 xl:py-5 rounded-2xl absolute bottom-0 xl:-bottom-10 xl:left-1/5 flex items-center gap-5">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                <CountUp end={105} duration={5} suffix="+" />
              </h1>
              <p>Menu Selection</p>
            </div>
            <div>
              <p className="lg:w-72 text-sm md:text-lg md:line-clamp-5">
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
