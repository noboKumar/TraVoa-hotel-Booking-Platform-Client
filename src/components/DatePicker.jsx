import React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const defaultClassNames = getDefaultClassNames();
  return (
    <div className="flex justify-center border-2 rounded-2xl px-5 py-2 border-gray-400">
      <DayPicker
        classNames={{
          today: `border-amber-500`,
          selected: `bg-amber-500 border-amber-500 text-white`,
          root: defaultClassNames.root,
          chevron: `${defaultClassNames.chevron} fill-amber-500`,
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
  );
};

export default DatePicker;
