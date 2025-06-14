import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="rounded-2xl border-2 border-gray-300 px-10 py-2 flex justify-center">
      <DayPicker
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
  );
};

export default DatePicker;
