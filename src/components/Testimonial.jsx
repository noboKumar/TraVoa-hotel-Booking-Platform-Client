import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import { TbMessageCircle } from "react-icons/tb";
import { fetchLatestReview } from "../API/latestReview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import Loading from "./Loading";

const Testimonial = () => {
  const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchLatestReview()
      .then((data) => {
        setReviewData(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="pt-10">
      <PageTitle
        title={"What Our Client Say"}
        logo={<TbMessageCircle />}
      ></PageTitle>
      <div className="bg-gray-100 shadow-sm rounded-2xl px-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          navigation
          slidesPerView={1}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
        >
          {reviewData.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col md:flex-row items-center gap-10 p-10">
                <div className="avatar p-5">
                  <div className="ring-primary ring-offset-base-100 w-40 rounded-full ring-2 ring-offset-2">
                    <img src={review?.reviewerImage} alt="reviewer image" />
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl marcellus">{review.reviewerName}</h1>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={review?.rating}
                    readOnly
                  />
                  <p className="text-xl py-5 md:w-1/2">"{review.comment}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
