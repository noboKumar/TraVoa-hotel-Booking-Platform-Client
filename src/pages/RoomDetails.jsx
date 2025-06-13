import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import RoomFacility from "../components/RoomFacility";
import { TbCurrencyTaka } from "react-icons/tb";
import ReadOnlyStars from "../components/ReadOnlyStars";
import BookNowModal from "../components/BookNowModal";
import { MdKeyboardBackspace } from "react-icons/md";
import ReviewCard from "../components/ReviewCard";
import useAuth from "../hooks/useAuth";

const RoomDetails = () => {
  const { user } = useAuth();
  const { data } = useLoaderData();
  const navigate = useNavigate();
  const { image, available, title, description, price, reviews, _id } = data;

  const handleBookNow = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    document.getElementById("my_modal").showModal();
  };

  return (
    <div className="space-y-3 relative">
      <Link to={"/rooms"}>
        <div className="md:text-5xl text-3xl absolute top-5 left-5 cursor-pointer">
          <MdKeyboardBackspace className="border-2 rounded-full bg-base-200" />
        </div>
      </Link>
      <img
        className="w-full md:h-[500px] object-cover object-center rounded-2xl shadow-sm"
        src={image}
        alt="room image"
      />
      <h1 className="text-3xl text-primary marcellus font-semibold">
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
        <span className="text-2xl font-semibold marcellus">Description:</span>
        {description}
      </p>
      <button onClick={handleBookNow} className="btn btn-primary">
        Book Now
      </button>
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold marcellus">Reviews:</h1>
        <div>
          {reviews.length ? (
            reviews.map((review, index) => (
              <ReviewCard key={index} review={review}></ReviewCard>
            ))
          ) : (
            <h1 className="text-xl bg-gray-100 shadow-sm w-fit rounded-2xl py-2 px-4">
              "No reviews yet be the first to share your thoughts and help
              others discover something great!"
            </h1>
          )}
        </div>
      </div>
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
