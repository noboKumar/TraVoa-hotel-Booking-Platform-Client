import React from "react";
import logoImg from "../assets/travoa logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img className="w-20" src={logoImg} alt="" />
      <h1 className="text-3xl font-bold poppins">TraVoa</h1>
    </div>
  );
};

export default Logo;
