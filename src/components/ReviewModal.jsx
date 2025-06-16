import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { apiClient } from "../API/apiClient";
import Swal from "sweetalert2";

const ReviewModal = ({ _id }) => {
  const { user } = useAuth();
  const [ratingValue, setRatingValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewerName = form.name.value;
    const rating = ratingValue;
    const comment = form.comment.value;
    const reviewerImage = user.photoURL;
    const timeStamp = new Date().toISOString();

    const reviewInfo = {
      reviewerName,
      reviewerImage,
      rating,
      comment,
      timeStamp,
    };

    apiClient
      .patch(`/review/${_id}`, reviewInfo)
      .then(() => {})
      .catch((err) => console.log(err));

    apiClient
      .post("/allReview", reviewInfo)
      .then(() => {})
      .catch((err) => console.log(err));

    document.getElementById(`book_now_modal_${_id}`).close();
    Swal.fire({
      icon: "success",
      title: "Review submitted successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <dialog id={`book_now_modal_${_id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-3xl py-2 marcellus">Leave a Review</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <fieldset>
              <legend>User name:</legend>
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  name="name"
                  type="text"
                  placeholder="Username"
                  readOnly
                  defaultValue={user?.displayName}
                />
              </label>
            </fieldset>

            <fieldset>
              <legend>Rating</legend>
              <Rating
                style={{ maxWidth: 200 }}
                value={ratingValue}
                onChange={setRatingValue}
                isRequired
              />
            </fieldset>

            <fieldset>
              <legend>Comment</legend>
              <textarea
                name="comment"
                className="textarea"
                placeholder="Comment"
              ></textarea>
            </fieldset>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ReviewModal;
