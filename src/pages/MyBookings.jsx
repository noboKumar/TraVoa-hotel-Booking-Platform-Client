import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "../components/PageTitle";
import { FaHotel } from "react-icons/fa6";

const MyBookings = () => {
  return (
    <div>
      <Helmet>
        <title>TraVoa | My Bookings</title>
      </Helmet>
      <PageTitle title={"My Bookings"} logo={<FaHotel />}></PageTitle>
    </div>
  );
};

export default MyBookings;
