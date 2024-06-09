import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination,  Autoplay, Navigation } from "swiper/modules";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: testimonials = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["testimonial"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/testimonial`);
      return data;
    },
  });
  // console.log(testimonials);
  return (
    <>
      <div className='px-6 py-8 mx-auto'>
        <div>
            <h2 className="text-center font-semibold text-4xl max-w-[500px] mx-auto text-[#008080] mt-6">Testimonials from Our Valued Employees</h2>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false, 
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((data) => (
            <SwiperSlide key={data._id}>
              <TestimonialsCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
