import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="absolute inset-0 z-10">
      <div className="skeleton h-[300px] w-full"></div>
    </div>
  );
};

export default SkeletonLoading;
