import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import MyBookings from "../pages/MyBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/rooms",
        Component: Rooms,
      },
      {
        path: "/myBookings",
        Component: MyBookings,
      },
    ],
  },
]);
