import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageTitle from "../components/PageTitle";
import { FaHotel } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import { fetchMyBookingsData } from "../API/myBookings";

const MyBookings = () => {
  const { user } = useAuth();
  const [myBookingsData, setMyBookingsData] = useState([]);
  const email = user.email;

  useEffect(() => {
    fetchMyBookingsData(email)
      .then((data) => {
        console.log(data);
        setMyBookingsData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);
  return (
    <div>
      <Helmet>
        <title>TraVoa | My Bookings</title>
      </Helmet>
      <PageTitle title={"My Bookings"} logo={<FaHotel />}></PageTitle>

      <div>
        booked rooms:
        {myBookingsData.length}
      </div>
    </div>
  );
};

export default MyBookings;
