import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import PageTitle from "./PageTitle";
import { IoLocationSharp } from "react-icons/io5";
import hotelImage from "../assets/hotel-outside.jpg";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const OurLocation = () => {
  const location = [23.7903, 90.4169];
  return (
    <div className="pt-10">
      <PageTitle title={"Our Location"} logo={<IoLocationSharp />}></PageTitle>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
        <div className="lg:flex-1 w-full h-[400px]">
          <MapContainer
            scrollWheelZoom={false}
            center={location}
            zoom={13}
            className="h-full w-full rounded-2xl border border-gray-300 z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <Marker position={location}>
              <Popup>Our Location</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="lg:flex-1 text-center h-[400px] w-full relative">
          <img
            className="w-full h-full object-cover object-top absolute rounded-2xl"
            src={hotelImage}
            alt="hotel image"
          />
          <div className="absolute inset-0  bg-black/60 rounded-2xl"></div>

          <div className="md:text-xl space-y-2 absolute text-white inset-0 top-1/5">
            <PageTitle title={"Contract Us"}></PageTitle>
            <h1>
              <span className="font-semibold">Address:</span> Plot 11, Road 130,
              Gulshan-1, Dhaka 1212, Bangladesh
            </h1>
            <p>
              <span className="font-semibold">Phone:</span> +880-1911-222333
            </p>
            <p>
              <span className="font-semibold">Email:</span> contract@travoa.com
            </p>
            <p>
              <span className="font-semibold">Opening Hours:</span> Open 24
              hours, 7 days a week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
