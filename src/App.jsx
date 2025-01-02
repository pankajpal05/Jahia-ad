import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import TestimonialCard from "./components/TestimonialCard";
import TeaserV2 from "./components/TeaserV2";

const App = () => {
  const testimonials = [
    {
      title: "Great Service",
      description: "The service was excellent and exceeded expectations.",
      image: "https://picsum.photos/id/237/200/300",
    },
    {
      title: "Amazing Experience",
      description: "I had an amazing experience, highly recommended!",
      image: "https://picsum.photos/id/238/200/300",
    },
    // More testimonials...
  ];

  return (
    <>
    <div className="lg:flex">
      <div>
        <TeaserV2
        preTitle="Special Offer"
        title="50% Off on All Products"
        imgUrl="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-23/oh__img135.jpg"
        callToAction="Shop Now"
      />
      </div>
      <div>
        <TeaserV2
        preTitle="Special Offer"
        title="50% Off on All Products"
        imgUrl="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-23/oh__img135.jpg"
        callToAction="Shop Now"
      />
      </div>
    </div>
      <p className="font-extrabold my-5">Extrabold font weight</p>
      <Swiper
        keyboard={{ enabled: true }}
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
