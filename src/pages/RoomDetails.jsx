import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import RoomFacility from "../components/RoomFacility";
import { TbCurrencyTaka } from "react-icons/tb";
import BookNowModal from "../components/BookNowModal";
import { MdKeyboardBackspace } from "react-icons/md";
import ReviewCard from "../components/ReviewCard";
import useAuth from "../hooks/useAuth";
import { Rating, StickerStar } from "@smastrom/react-rating";
import ReviewModal from "../components/ReviewModal";

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
    document.getElementById("bookNow_modal").showModal();
  };

  const handleReview = () => {
    document.getElementById(`book_now_modal_${_id}`).showModal();
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
      <div className="flex items-center gap-2">
        <div>
          <Rating
            style={{ maxWidth: 120 }}
            value={5}
            readOnly
            itemStyles={{
              itemShapes: StickerStar,
              activeFillColor: "#f59e0b",
              inactiveFillColor: "#ffedd5",
            }}
          />
        </div>
        <p className="text-xl">({reviews?.length} Reviews)</p>
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
      <div className="space-x-5">
        <button onClick={handleBookNow} className="btn btn-primary">
          Book Now
        </button>
        {user?.email && data?.bookedUser === user.email && (
          <button
            onClick={handleReview}
            className="btn btn-secondary text-white"
          >
            Give a Review
          </button>
        )}
      </div>
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
      <ReviewModal _id={_id}></ReviewModal>
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
