import React from "react";
import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.webp";
import slider3 from "../assets/slider-3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { Link } from "react-router";

const sliderData = [
  {
    title: "Experience Luxury Like Never Before",
    description:
      "Step into a world of refinement with our premium rooms featuring plush bedding, ambient lighting, and exquisite decor. Every detail is tailored to provide you with a stay that is both indulgent and unforgettable.",
    buttonText: "Explore Rooms",
    image: slider1,
  },
  {
    title: "Your Perfect Stay Awaits",
    description:
      "Make every moment count in our modern, fully-equipped suites. Enjoy panoramic views, smart amenities, and personalized service designed to make your stay seamless, comfortable, and memorable.",
    buttonText: "View Rooms",
    image: slider2,
  },
  {
    title: "Relax. Recharge. Reconnect.",
    description:
      "Escape to tranquility in our serene surroundings. From cozy interiors to peaceful outdoor spaces, our rooms offer the perfect retreat to relax, recharge your mind, and reconnect with what matters most.",
    buttonText: "See All Rooms",
    image: slider3,
  },
];

const Slider = () => {
  return (
    <div className="relative md:w-full">
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={sliderData.length > 3}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {sliderData.map((slider, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-[300px] md:h-[700px] rounded-2xl object-cover"
              src={slider.image}
              alt="slider images"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 rounded-2xl"></div>
            <div className="absolute top-20 left-5 md:top-3/6 md:left-20 z-10 text-white w-4/6 md:w-6/12 space-y-2 md:space-y-5 text-shadow-2xs">
              <h1 className="md:text-4xl text-2xl font-bold">{slider.title}</h1>
              <p className="md:text-xl line-clamp-3 md:line-clamp-5">
                {slider.description}
              </p>
              <Link
                to={"/rooms"}
                className="btn bg-secondary border-none shadow text-white"
              >
                {slider.buttonText}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
