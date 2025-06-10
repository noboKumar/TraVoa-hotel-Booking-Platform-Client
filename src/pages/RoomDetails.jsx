import React from "react";
import { useLoaderData } from "react-router";

const RoomDetails = () => {
  const {data} = useLoaderData();
  console.log(data);
  return <div></div>;
};

export default RoomDetails;
