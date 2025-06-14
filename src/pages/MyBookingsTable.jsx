import React from "react";
import ReviewModal from "../components/ReviewModal";
import UpdateDateModal from "../components/UpdateDateModal";

const MyBookingsTable = ({ data }) => {
  const { image, price, bookedDate, title, _id } = data;

  const handleReview = () => {
    document.getElementById(`book_now_modal_${_id}`).showModal();
  };

  const handleUpdateDate = () => {
    document.getElementById(`update_date_modal_${_id}`).showModal();
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="mask rounded-xl w-20 md:w-44 md:h-32 lg:w-96 lg:h-44">
                <img src={image} alt="room image" />
              </div>
            </div>
            <div>
              <div className="font-semibold text-xl md:text-2xl marcellus">
                {title}
              </div>
              <div className="text-sm opacity-50">Booked Date:{bookedDate}</div>
            </div>
          </div>
        </td>
        <td className="text-lg font-bold">{price} Tk./ night</td>
        <td>
          <div className="flex flex-col lg:flex-row gap-2 md:gap-5 justify-center">
            <button onClick={handleReview} className="btn btn-primary">
              Review
            </button>
            <ReviewModal _id={_id}></ReviewModal>
            <button onClick={handleUpdateDate} className="btn btn-primary">
              Update Date
            </button>
            <UpdateDateModal _id={_id}></UpdateDateModal>
            <button className="btn bg-red-800 text-white">Cancel</button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyBookingsTable;
