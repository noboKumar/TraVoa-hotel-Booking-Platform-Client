import React from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import RoomFacility from "../components/RoomFacility";
import { TbCurrencyTaka } from "react-icons/tb";
import BookNowModal from "../components/BookNowModal";
import { MdKeyboardBackspace } from "react-icons/md";
import ReviewCard from "../components/ReviewCard";
import useAuth from "../hooks/useAuth";
import { Rating, StickerStar } from "@smastrom/react-rating";
import ReviewModal from "../components/ReviewModal";
import { apiClient } from "../API/apiClient";
import Loading from "../components/Loading";

const RoomDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: roomData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["room", id],
    queryFn: async () => {
      const res = await apiClient.get(`/rooms/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorPage />;

  const {
    image,
    available,
    title,
    description,
    price,
    reviews = [],
    _id,
  } = roomData;

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
        <p className="text-xl">({reviews.length} Reviews)</p>
      </div>

      <div className="flex items-center text-xl text-accent">
        <TbCurrencyTaka size={25} />
        <span className="text-secondary">{price}</span>/night
      </div>

      <RoomFacility />
      <p className="text-xl flex flex-col lg:w-4/6">
        <span className="text-2xl font-semibold marcellus">Description:</span>
        {description}
      </p>

      <div className="space-x-5">
        <button onClick={handleBookNow} className="btn btn-primary">
          Book Now
        </button>
        {user?.email && roomData?.bookedUser === user.email && (
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
              <ReviewCard key={index} review={review} />
            ))
          ) : (
            <h1 className="text-xl bg-gray-100 shadow-sm w-fit rounded-2xl py-2 px-4">
              "No reviews yet — be the first to share your thoughts!"
            </h1>
          )}
        </div>
      </div>

      <ReviewModal _id={_id} />
      <BookNowModal
        title={title}
        description={description}
        price={price}
        available={available}
        _id={_id}
      />
    </div>
  );
};

export default RoomDetails;
