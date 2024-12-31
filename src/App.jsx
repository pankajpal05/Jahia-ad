import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import "./App.css";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import TestimonialCard from "./components/TestimonialCard";
import Section from "./components/Section";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-4xl font-normal text-blue-500">Hello, AD Website</h2>
        {/* Video Background */}
         <Section
          backgroundType="video"
          backgroundContent="https://www.saraiattoria.com/video/home/large/apple-pie-jhula.mp4">
          <h3 className="text-3xl font-normal">Video Background</h3>
          <p>Enjoy the cinematic feel!</p>
        </Section>

        {/* Image Background */}
         <Section backgroundType="image"
          backgroundContent="https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I">
          <h3 className="text-3xl font-normal">Image Background</h3>
          <p>Stunning visuals!</p>
        </Section>

        {/* Parallax Background */}
        <Section backgroundType="parallax"
            backgroundContent="https://images.unsplash.com/photo-1467173572719-f14b9fb86e5f?dpr=2&auto=compress,format&crop=entropy&fit=crop&w=1199&h=799&q=80">
            <h3 className="text-3xl font-normal">Parallax Background</h3>
            <p>Scroll to see the parallax effect!</p>
        </Section>

        {/* Blank Background */}
        <Section backgroundType="blank">
          <h3 className="text-3xl font-normal">Blank Background</h3>
          <p>Minimalistic and clean!</p>
        </Section>

        {/* Start Testimonial Component */}
        <h2 className="font-normal text-4xl">Success stories / Testimonial</h2>
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
    </div>
  );
};

export default App;
