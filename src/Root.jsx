import React from "react";
import Home from "./pages/Home";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Root = () => {
  return (
    <div className="inter">
      <NavBar></NavBar>
      <div className="w-11/12 mx-auto py-5 min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
