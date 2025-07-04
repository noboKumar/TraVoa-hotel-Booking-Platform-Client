import React from "react";
import { FaStar } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";

const FeaturedRoomCard = ({ data }) => {
  const { image, title, description, price, reviews, _id } = data;
  return (
    <>
      <div className="card bg-base-200 shadow-sm">
        <figure className="relative">
          <h1 className="bg-amber-700 px-5 rounded-2xl text-white absolute top-5 left-2">
            Top Rated
          </h1>
          <img
            className="h-[300px] w-full object-cover rounded-t-xl"
            src={image}
            alt="rooms photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl marcellus">{title}</h2>
          <p className="line-clamp-2">{description}</p>
          <div className="flex items-center text-lg text-accent">
            <FaStar color="orange" />
            <span>Total Review: {reviews?.length}</span>
          </div>
          <div className="flex items-center text-xl text-accent">
            <TbCurrencyTaka size={25} />
            <span className="text-secondary">{price}</span>/night
          </div>
          <Link to={`/rooms/${_id}`}>
            <button className="btn btn-primary w-fit">Book Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedRoomCard;
