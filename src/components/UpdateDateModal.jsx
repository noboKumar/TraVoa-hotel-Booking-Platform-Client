import React, { useState } from "react";
import "react-day-picker/style.css";
import { DayPicker } from "react-day-picker";
import { apiClient } from "../API/apiClient";
import Swal from "sweetalert2";

const UpdateDateModal = ({ _id }) => {
  const [selectedDate, setSelectedDate] = useState();
  const dateData = selectedDate?.toLocaleDateString("en-GB");

  const handleUpdate = (e) => {
    e.preventDefault();

    apiClient
      .patch(`/updateDate/${_id}`, { dateData })
      .then(() => {})
      .catch((err) => console.log(err));
    document.getElementById(`update_date_modal_${_id}`).close();
    
    Swal.fire({
      icon: "success",
      title: "Date Updated successfully",
      text: `New Date: ${dateData}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <dialog id={`update_date_modal_${_id}`} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-3xl py-2 marcellus">Update Date</h1>
        <form onSubmit={handleUpdate}>
          <div className="rounded-2xl px-10 py-2 flex justify-center text-sm">
            <DayPicker
              classNames={{
                root: "",
                month: "w-full",
                day: "h-10 w-10 rounded-full",
                selected: `bg-amber-500 border-amber-500 text-white`,
              }}
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              footer={
                selectedDate
                  ? `Selected: ${selectedDate.toLocaleDateString()}`
                  : "Pick a day."
              }
            />
          </div>
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateDateModal;
