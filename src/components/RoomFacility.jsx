import React from "react";
import { FaWifi } from "react-icons/fa";
import { LuCircleParking } from "react-icons/lu";
import { MdFreeBreakfast } from "react-icons/md";

const RoomFacility = () => {
  return (
    <div className="bg-base-200 rounded-2xl flex gap-5 w-fit px-10 py-4 md:text-xl">
      <div className="flex items-center gap-2">
        <FaWifi size={25} />
        <h1>Free WIFI</h1>
      </div>
      <div className="flex items-center gap-2">
        <LuCircleParking size={25} />
        <h1>Free Parking</h1>
      </div>
      <div className="flex items-center gap-2">
        <MdFreeBreakfast size={25} />
        <h1>Breakfast Includes</h1>
      </div>
    </div>
  );
};

export default RoomFacility;
