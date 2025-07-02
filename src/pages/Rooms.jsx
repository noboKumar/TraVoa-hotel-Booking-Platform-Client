import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { fetchRoomData } from "../API/roomsApi";
import RoomsCards from "../components/RoomsCards";
import PageTitle from "../components/PageTitle";
import { MdLocalHotel } from "react-icons/md";
import Loading from "../components/Loading";
import { fetchPriceRangeRooms } from "../API/priceRange";
import { fetchRoomsSort } from "../API/sortRooms";

const Rooms = () => {
  const [loading, setLoading] = useState(true);
  const [roomData, setRoomData] = useState([]);

  const handlePriceRange = (e) => {
    e.preventDefault();
    const form = e.target;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;

    fetchPriceRangeRooms(minPrice, maxPrice)
      .then((data) => setRoomData(data))
      .catch((err) => console.log(err));
  };

  const handleResetRange = () => {
    fetchRoomData()
      .then((data) => setRoomData(data))
      .catch((err) => console.log(err));
  };

  const handleSort = (e) => {
    const sort = e.target.value;

    fetchRoomsSort(sort)
      .then((data) => setRoomData(data))
      .catch((err) => console.log(err));
  };

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
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="flex-1"></div>
        {/* Filter by price */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Price:</h1>
          <form onSubmit={handlePriceRange}>
            <div className="flex flex-col md:flex-row gap-5 py-2 justify-center">
              <input
                name="minPrice"
                type="number"
                required
                placeholder="Min price"
                className="input"
              />
              <input
                name="maxPrice"
                type="number"
                required
                placeholder="Max price"
                className="input"
              />
            </div>
            <div className="space-x-5">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
              <button
                onClick={handleResetRange}
                className="btn bg-red-700 text-white"
                type="reset"
              >
                reset
              </button>
            </div>
          </form>
        </div>
        {/* sorting */}
        <div className="flex-1 flex justify-end">
          <select onChange={handleSort} defaultValue="" className="select">
            <option disabled={true} value="">
              Sort By
            </option>
            <option value="asc">Ascending (A-Z)</option>
            <option value="des">Descending (Z-A)</option>
          </select>
        </div>
      </div>
      <PageTitle title={"Rooms"} logo={<MdLocalHotel />}></PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {roomData.map((data) => (
          <RoomsCards key={data._id} data={data}></RoomsCards>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
