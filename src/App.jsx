import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import "./App.css";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import TestimonialCard from "./components/TestimonialCard";
import CardV5 from "./components/CardV5";

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

  const steps = [
    {
      title: "Discovery & Assessment",
      description:
        "We begin with an in-depth evaluation of your current digital environment, stakeholder needs, and overarching business objectives. Our experts identify technology gaps, process inefficiencies, and areas for AI/ML enhancements.",
    },
    {
      title: "Strategy & Roadmap",
      description:
        "We create a customized digital transformation roadmap encompassing CMS modernization, e-Commerce storefront optimization, and data strategy. Our proposals detail cost-effective and scalable frameworks, ensuring you can adapt quickly to market shifts.",
    },
    {
      title: "Solution Implementation",
      description:
        "Leveraging partnerships with Adobe, Jahia, Magento, and leading AI/ML tools, we build solutions that fit your specific industry and compliance requirements. Our iterative development process ensures transparency and agility throughout the engagement.",
    },
    {
      title: "Optimization & Analytics",
      description:
        "We deploy real-time analytics and predictive AI to monitor user engagement, operational efficiency, and customer satisfaction post-launch. Continuous refinement and model training enable long-term sustainability and ROI.",
    },
    {
      title: "Ongoing Support & Innovation",
      description:
        "From routine maintenance to the integration of emerging technologies like Generative AI, we provide comprehensive post-deployment support. Our teams remain engaged with your organization to help scale, optimize, and innovate over time.",
    },
  ];

  return (
    <>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <CardV5
            key={index}
            title={step.title}
            description={step.description}
            stepNumber={index + 1}
          />
        ))}
      </div>
    </>
  );
};

export default App;
