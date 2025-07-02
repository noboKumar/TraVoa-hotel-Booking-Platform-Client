import React from "react";
import { Rating } from "@smastrom/react-rating";
import moment from "moment";

const ReviewCard = ({ review }) => {
  const { reviewerImage, reviewerName, comment, rating, timeStamp } = review;
  const postTime = moment(timeStamp).format("DD/MM/YYYY");
  return (
    <div className="border-2 bg-base-200 border-gray-300 shadow-sm rounded-2xl my-5 p-5 space-y-2">
      <div className="flex gap-4 items-center">
        <div className="avatar">
          <div className="w-24 rounded-full border-2">
            <img src={reviewerImage} />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold">{reviewerName}</h1>
          <p className="text-sm text-gray-500">{postTime}</p>
        </div>
      </div>
      <div>
        <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
      </div>
      <p className="text-lg">"{comment}"</p>
    </div>
  );
};

export default ReviewCard;
