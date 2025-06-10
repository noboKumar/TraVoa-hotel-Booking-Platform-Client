import React from "react";
import { useLoaderData } from "react-router";
import RoomFacility from "../components/RoomFacility";
import { TbCurrencyTaka } from "react-icons/tb";
import ReadOnlyStars from "../components/ReadOnlyStars";
import BookNowModal from "../components/BookNowModal";

const RoomDetails = () => {
  const { data } = useLoaderData();
  const { image, available, title, description, price, reviews, _id } = data;

  return (
    <div className="space-y-3">
      <img
        className="w-full md:h-[500px] object-cover object-center rounded-2xl shadow-sm"
        src={image}
        alt="room image"
      />
      <h1 className="text-3xl text-primary poppins font-semibold">
        {title}{" "}
        <div className="badge badge-secondary text-white">
          {available ? "available" : "unavailable"}
        </div>
      </h1>
      <div className="flex gap-2">
        <ReadOnlyStars></ReadOnlyStars>
        <p className="text-xl">({reviews.length} Reviews)</p>
      </div>
      <div className="flex items-center text-xl text-accent">
        <TbCurrencyTaka size={25} />
        <span className="text-secondary">{price}</span>/night
      </div>
      <RoomFacility></RoomFacility>
      <p className="text-xl flex flex-col lg:w-4/6">
        <span className="text-2xl font-semibold poppins">Description:</span>
        {description}
      </p>
      <button
        onClick={() => document.getElementById("my_modal").showModal()}
        className="btn btn-primary"
      >
        Book Now
      </button>
      <BookNowModal
        title={title}
        description={description}
        price={price}
        available={available}
        _id={_id}
      ></BookNowModal>
    </div>
  );
};

export default RoomDetails;
