import React from "react";
import offerData from "../data/offerData.json";
import { IoPricetags } from "react-icons/io5";
import PageTitle from "./PageTitle";
import SpecialOfferCard from "./SpecialOfferCard";

const SpecialOffer = () => {
  return (
    <div className="pt-10">
      <PageTitle
        title={"Our Special Offers"}
        logo={<IoPricetags />}
      ></PageTitle>
      <div className="grid grid-cols-3 gap-5">
        {offerData.map((data) => (
          <SpecialOfferCard key={data.id} data={data}></SpecialOfferCard>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;
