import React from "react";
import errorAnimation from "../assets/errorAnimation.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="w-3/10 mx-auto text-center">
      <Lottie animationData={errorAnimation}></Lottie>
      <Link to={"/"} className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
