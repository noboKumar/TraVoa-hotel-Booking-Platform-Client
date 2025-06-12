import React, { useEffect, useState } from "react";
import { fetchFeaturedRooms } from "../API/featuredRooms";

const FeaturedRooms = () => {
  const [featuredData, setFeaturedData] = useState([]);
  useEffect(() => {
    fetchFeaturedRooms()
      .then((data) => {
        setFeaturedData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(featuredData);
  return <div></div>;
};

export default FeaturedRooms;
