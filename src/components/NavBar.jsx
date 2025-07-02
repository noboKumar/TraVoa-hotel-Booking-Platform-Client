import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import ThemeController from "./ThemeController";

const NavBar = () => {
  const { user, logOutUser } = useAuth();

  const navBarLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/rooms"}>Rooms</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/myBookings"}>My Bookings</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/contact-us"}>Contact us</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About us</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out Successfully",
          text: `See you soon, ${user?.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oh No! an Error occurred",
          text: `${err.code}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="bg-base-200 shadow-sm sticky top-0 xl:top-2 z-20 xl:w-10/12 mx-auto xl:rounded-r-full xl:rounded-l-full xl:my-5">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navBarLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 xl:text-xl gap-5">
            {navBarLinks}
          </ul>
        </div>
        <div className="navbar-end gap-4 z-10">
          {user && (
            <div
            className="avatar tooltip tooltip-bottom"
            data-tip={`${user.displayName}`}
            >
              <div className="w-12 md:w-15 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
          )}
          <ThemeController></ThemeController>
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary">
              Log Out
            </button>
          ) : (
            <Link to={"/login"} className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
