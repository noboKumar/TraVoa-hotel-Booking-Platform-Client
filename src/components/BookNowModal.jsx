import React, { useState } from "react";
import DatePicker from "./DatePicker";
import useAuth from "../hooks/useAuth";

const BookNowModal = ({ title, description, price, available, _id }) => {
  const [selectedDate, setSelectedDate] = useState();
  const { user } = useAuth();
  const dateData = selectedDate?.toLocaleDateString("en-GB");
  const userData = user?.email;
  const bookNow = (e) => {
    e.preventDefault();
    console.log("submitted", dateData, userData, _id);
  };
  return (
    <>
      {available ? (
        <dialog id="my_modal" className="modal">
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
        <dialog id="my_modal" className="modal">
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
