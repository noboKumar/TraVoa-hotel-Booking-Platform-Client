import React from "react";
import logoImg from "../assets/travoa logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img className="md:w-20 w-15" src={logoImg} alt="" />
      <h1 className="md:text-3xl font-bold poppins text-primary">TraVoa</h1>
    </div>
  );
};

export default Logo;
