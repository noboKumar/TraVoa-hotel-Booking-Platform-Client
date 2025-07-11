import React, { useState } from "react";
import DatePicker from "./DatePicker";
import useAuth from "../hooks/useAuth";
import { apiClient } from "../API/apiClient";
import Swal from "sweetalert2";

const BookNowModal = ({ title, description, price, available, _id }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [error, setError] = useState("");
  const { user } = useAuth();
  const dateData = selectedDate?.toLocaleDateString("en-GB");
  const userData = user?.email;
  const bookedData = {
    bookedDate: dateData,
    bookedUser: userData,
    available: false,
  };

  const bookNow = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      setError("Please select a date");
      return;
    } else {
      setError("");
    }

    apiClient
      .patch(`/bookedRooms/${_id}`, bookedData)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
    document.getElementById("bookNow_modal").close();
    Swal.fire({
      icon: "success",
      title: "You have successfully booked Room",
      text: `Booked Date: ${dateData}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      {available ? (
        <dialog id="bookNow_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">
                ✕
              </button>
            </form>
            <form onSubmit={bookNow}>
              <div>
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="py-4">{description}</p>
                <DatePicker
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                ></DatePicker>
                <p className="text-error text-sm">{error}</p>
                <p className="py-4 text-xl">
                  <span className="font-semibold">Price:</span>
                  {price}/night
                </p>
                <button type="submit" className="btn btn-secondary text-white">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </dialog>
      ) : (
        <dialog id="bookNow_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <div>
                <p>Sorry, This Room Is Not Available Now!</p>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default BookNowModal;
