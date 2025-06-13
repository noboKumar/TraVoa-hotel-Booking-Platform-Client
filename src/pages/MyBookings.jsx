import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageTitle from "../components/PageTitle";
import { FaHotel } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import { fetchMyBookingsData } from "../API/myBookings";
import MyBookingsTable from "./MyBookingsTable";
import ReviewModal from "../components/ReviewModal";

const MyBookings = () => {
  const { user } = useAuth();
  const [myBookingsData, setMyBookingsData] = useState([]);
  const email = user.email;
  const token = user.accessToken;

  useEffect(() => {
    fetchMyBookingsData(email, token)
      .then((data) => {
        setMyBookingsData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email, token]);

  return (
    <div>
      <Helmet>
        <title>TraVoa | My Bookings</title>
      </Helmet>
      <PageTitle title={"My Bookings"} logo={<FaHotel />}></PageTitle>
      <div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200 px-5 py-2">
          <table className="table">
            <thead>
              <tr>
                <th>Room</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {myBookingsData.map((data) => (
                <MyBookingsTable key={data._id} data={data}></MyBookingsTable>
              ))}
            </tbody>
          </table>
          <ReviewModal></ReviewModal>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
