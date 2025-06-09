import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { fetchRoomData } from "../API/roomsApi";
import RoomsCards from "../components/RoomsCards";

const Rooms = () => {
  const [roomData, setRoomData] = useState([]);
  useEffect(() => {
    fetchRoomData()
      .then((data) => {
        setRoomData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(roomData);
  return (
    <div>
      <Helmet>
        <title>TraVoa | Rooms</title>
      </Helmet>
      {roomData.map((data) => (
        <RoomsCards key={data._id} data={data}></RoomsCards>
      ))}
    </div>
  );
};

export default Rooms;
