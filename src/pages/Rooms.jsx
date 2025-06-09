import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { fetchRoomData } from "../API/roomsApi";
import RoomsCards from "../components/RoomsCards";
import PageTitle from "../components/PageTitle";
import { MdLocalHotel } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";

const Rooms = () => {
  const { loading, setLoading } = useAuth();
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    fetchRoomData()
      .then((data) => {
        setRoomData(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading]);
  
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Helmet>
        <title>TraVoa | Rooms</title>
      </Helmet>
      <PageTitle title={"Rooms"} logo={<MdLocalHotel />}></PageTitle>
      <div className="grid grid-cols-3 gap-10">
        {roomData.map((data) => (
          <RoomsCards key={data._id} data={data}></RoomsCards>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
