import React from "react";
import UpdateDateModal from "../components/UpdateDateModal";
import { apiClient } from "../API/apiClient";
import Swal from "sweetalert2";
import moment from "moment/moment";

const MyBookingsTable = ({ data }) => {
  const { image, price, bookedDate, title, _id } = data;
  const cancelDate = moment().startOf("day");
  const bookingDate = moment(bookedDate, "DD/MM/YYYY").startOf("day");
  const isBefore = bookingDate.diff(cancelDate, "day");

  const handleUpdateDate = () => {
    document.getElementById(`update_date_modal_${_id}`).showModal();
  };

  const handleCancel = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel This Room!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (isBefore <= 1) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You can't cancel booking 1 day before",
          });
          return;
        }
        apiClient
          .patch(`/cancelBooking/${_id}`)
          .then(() => {})
          .catch((err) => console.log(err));
        Swal.fire({
          title: "Canceled!",
          text: "Your booking has been canceled",
          icon: "success",
        });
      }
    });
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
            <button onClick={handleUpdateDate} className="btn btn-primary">
              Update Date
            </button>
            <UpdateDateModal _id={_id}></UpdateDateModal>
            <button
              onClick={handleCancel}
              className="btn bg-red-800 text-white"
            >
              Cancel
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyBookingsTable;
