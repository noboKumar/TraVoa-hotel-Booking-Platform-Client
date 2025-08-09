import React from "react";
import errorAnimation from "../assets/404 Error.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="w-3/10 py-20 mx-auto text-center">
      <div>
        <Lottie animationData={errorAnimation}></Lottie>
        <h1 className="py-5 md:text-5xl font-bold">Error Not Found</h1>
      </div>
      <Link to={"/"} className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
