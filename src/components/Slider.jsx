import React, { useState } from "react";
import { motion } from "motion/react";
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
  const [activeSlider, setActiveSlider] = useState(0);
  return (
    <div className="relative md:w-full">
      <Swiper
        onSlideChange={(swiper) => setActiveSlider(swiper.realIndex)}
        className="mySwiper"
        modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
        effect={"coverflow"}
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
            <div className="relative">
              {/* slider image */}
              <img
                className="w-full h-[300px] md:h-[700px] rounded-2xl object-cover"
                src={slider.image}
                alt="slider images"
              />
              {/* black overlay */}
              <div className="absolute inset-0  bg-black/60 rounded-2xl"></div>

              {/* animation div */}
              <motion.div
                key={activeSlider}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-10 text-white px-4 text-center"
              >
                {/* text and buttons */}
                <div className="w-full md:w-2/3 lg:w-1/2 space-y-2 md:space-y-5">
                  <h1 className="lg:text-7xl md:text-5xl text-2xl marcellus">
                    {slider.title}
                  </h1>
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
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
