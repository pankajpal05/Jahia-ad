import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import "./App.css";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import TestimonialCard from "./components/TestimonialCard";

import Header from "./components/Header";

const App = () => {
  const testimonials = [
    {
      title: "Great Service",
      description: "The service was excellent and exceeded expectations.",
      image: "https://picsum.photos/id/237/200/300", // Replace with actual image URL
    },
    {
      title: "Amazing Experience",
      description: "I had an amazing experience, highly recommended!",
      image: "https://picsum.photos/id/238/200/300", 
    },
    {
      title: "Amazing Experience",
      description: "I had an amazing experience, highly recommended!",
      image: "https://picsum.photos/id/239/200/300", 
    },
    {
      title: "Amazing Experience",
      description: "I had an amazing experience, highly recommended!",
      image: "https://picsum.photos/id/259/200/300", 
    },
    {
      title: "Amazing Experience",
      description: "I had an amazing experience, highly recommended!",
      image: "https://picsum.photos/id/249/200/300", 
    },
    {
      title: "Amazing Experience",
      description: "I had an amazing experience, highly recommended!",
      image: "https://picsum.photos/id/289/200/300", 
    },
  ];

  return (
    <>
    <Header/>
      <p className="font-extrabold my-5">Extrabold font weight</p>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          425: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              title={testimonial.title}
              description={testimonial.description}
              image={testimonial.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default App;
