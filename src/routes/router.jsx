import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import MyBookings from "../pages/MyBookings";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../pages/ErrorPage";
import RoomDetails from "../pages/RoomDetails";
import { apiClient } from "../API/apiClient";
import Loading from "../components/Loading";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

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
        path: "*",
        Component: ErrorPage,
      },
      {
        path: "/rooms",
        Component: Rooms,
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRouter>
            <MyBookings></MyBookings>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/rooms/:id",
        Component: RoomDetails,
        loader: ({ params }) => apiClient.get(`/rooms/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "contact-us",
        Component: ContactUs,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
    ],
  },
]);
