import React from "react";
import Home from "./pages/Home";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

const Root = () => {
  return (
    <div className="inter">
      <NavBar></NavBar>
      <div className="w-11/12 mx-auto py-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
