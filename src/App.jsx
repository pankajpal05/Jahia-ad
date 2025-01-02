import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import "./App.css";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import TestimonialCard from "./components/TestimonialCard";
import Tabs from "./components/Tabs";

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

  const tabs= [
    {
      id: "tab1",
      title: "Tab 1",
      content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati modi quia neque delectus omnis provident aut eius molestias est a nulla, consequatur asperiores ut reiciendis enim minima officiis rerum quod corporis ipsum ad voluptate? Nulla placeat quidem expedita corrupti aliquid dolores quo labore totam animi quod facere vel culpa consequuntur ex sequi, saepe cumque eaque distinctio fuga quaerat nihil delectus. Voluptatum quae dolore magnam? Sunt ratione eos libero numquam minus quo, error eligendi blanditiis laboriosam dolores ullam consectetur repellat enim nihil itaque nostrum quasi accusamus, illum unde corporis illo quam, laborum cumque. Maiores suscipit labore obcaecati possimus aspernatur natus.</p>,
    },
    {
      id: "tab2",
      title: "Tab 2",
      content: <p>Hac habitasse platea dictumst quisque sagittis purus.</p>,
    },
    {
      id: "tab3",
      title: "Tab 3",
      content: <p>Libero id faucibus nisl tincidunt eget nullam non nisi.</p>,
    },
  ]
  return (
    <>
      <p className="font-extrabold my-5">Extrabold font weight</p>
      <Tabs tabs={tabs} orientation={"vertical"}/>
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
