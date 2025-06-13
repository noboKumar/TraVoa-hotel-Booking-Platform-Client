import React from "react";

const PageTitle = ({ title, logo }) => {
  return (
    <div className="flex items-center gap-2 justify-center py-5 pt-10">
      <div className="text-5xl">{logo}</div>
      <h1 className="text-4xl font-semibold marcellus">{title}</h1>
    </div>
  );
};

export default PageTitle;
