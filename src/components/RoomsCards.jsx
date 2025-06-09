import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";

const RoomsCards = ({ data }) => {
  console.log(data);
  const { image, available, title, description, price, reviews } = data;
  return (
    <div className="card bg-base-100 shadow-sm cursor-pointer transition-transform duration-300 hover:scale-105">
      <figure>
        <img
          className="h-[300px] w-full object-cover"
          src={image}
          alt="rooms photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">
          {title}
          <div className="badge badge-secondary text-white">
            {available ? "available" : "unavailable"}
          </div>
        </h2>
        <p>{description}</p>
        <div className="flex items-center text-xl text-accent">
          <TbCurrencyTaka size={25} />
          <span className="text-secondary">{price}</span>/night
        </div>
        <div className="flex items-center text-xl text-accent">
          <FaRegStar />
          <span>Total Review: {reviews.length}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomsCards;
