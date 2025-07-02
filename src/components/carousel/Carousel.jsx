import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

// import '../carousel/style.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-full lg:max-w-3xl"
            src={slider1}
            alt="Catalogue Illustration"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full lg:max-w-3xl"
            src={slider2}
            alt="Catalogue Illustration"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full lg:max-w-3xl"
            src={slider3}
            alt="Catalogue Illustration"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
