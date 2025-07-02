import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const SpecialOfferCard = ({ data }) => {
  const {
    image,
    title,
    present_price,
    previous_price,
    features,
    discount_rate,
  } = data;
  return (
    <div className="shadow-sm rounded-2xl bg-base-200">
      <div className="relative">
        <img
          className="w-full h-[300px] object-cover rounded-t-2xl"
          src={image}
          alt={`${title}-image`}
        />
        <p className="text-xl bg-amber-600 border-2 border-gray-300 w-fit px-5 text-white rounded-xl absolute bottom-5 left-2">
          {discount_rate}% off
        </p>
      </div>

      <div className="px-5 py-5 space-y-5">
        <h1 className="text-3xl md:text-4xl marcellus">{title}</h1>
        <div className="grid lg:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaRegCheckCircle />
              {feature}
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-5 items-center">
          <h2 className="flex items-center text-xl line-through">
            <FaBangladeshiTakaSign />
            {previous_price} Tk.
          </h2>
          <h1 className="flex items-center text-2xl font-semibold">
            <FaBangladeshiTakaSign />
            {present_price} Tk.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferCard;
