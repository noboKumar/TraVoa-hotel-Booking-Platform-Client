import React from "react";
import ReactStars from "react-rating-stars-component";
import { ImStarEmpty } from "react-icons/im";
import { FaStarHalfAlt } from "react-icons/fa";
import { ImStarFull } from "react-icons/im";

const ReviewCard = ({ review }) => {
  const { image, reviewerName, comment, rating } = review;
  return (
    <div className="border-2 bg-gray-100 border-gray-300 shadow-sm rounded-2xl my-5 p-5 space-y-2">
      <div className="flex items-center">
        <img
          className="w-[80px] rounded-full"
          src={
            image ||
            "https://i.ibb.co/7dWZdWx2/depositphotos-119671346-stock-illustration-user-icon-vector-male-person.webp"
          }
          alt=""
        />
        <h1 className="text-xl font-semibold">{reviewerName}</h1>
      </div>
      <div>
        <ReactStars
          value={rating}
          count={5}
          size={24}
          isHalf={true}
          emptyIcon={<ImStarEmpty />}
          halfIcon={<FaStarHalfAlt />}
          filledIcon={<ImStarFull />}
          activeColor="#e09136"
        />
      </div>
      <p className="text-lg">"{comment}"</p>
    </div>
  );
};

export default ReviewCard;
