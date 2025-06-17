import React, { useEffect, useState } from "react";
import { fetchFeaturedRooms } from "../API/featuredRooms";
import PageTitle from "./PageTitle";
import { MdHotelClass } from "react-icons/md";
import FeaturedRoomCard from "./FeaturedRoomCard";
import Loading from "./Loading";

const FeaturedRooms = () => {
  const [featuredData, setFeaturedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedRooms()
      .then((data) => {
        setFeaturedData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="py-5">
        <PageTitle title={"Featured Rooms"} logo={<MdHotelClass />}></PageTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuredData.map((data) => (
          <FeaturedRoomCard key={data._id} data={data}></FeaturedRoomCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
