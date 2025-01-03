import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import '@fortawesome/fontawesome-free/css/all.min.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Header from '../components/Header';
import TestimonialCard from "../components/TestimonialCard";
import SectionContainer from "../components/SectionContainer";
import Hero from "../components/Hero";
import TeaserV2 from "../components/TeaserV2";
import Teaser from "../components/Teaser";
import Footer from "../components/Footer";

const Index = ()=>{

    const navItems = ["Home", "About", "Services", "Contact"];

    const testimonials = [
        {
          preTitle: "Special Offer",
          title: "Great Service",
          description: "The service was excellent and exceeded expectations.",
          image: "https://picsum.photos/id/237/200/300",
          callToAction: "Shop Now",
        },
        {
          preTitle: "Special Offer",
          title: "Amazing Experience",
          description: "I had an amazing experience, highly recommended!",
          image: "https://picsum.photos/id/238/200/300", 
          callToAction: "Shop Now",
        },
        {
          preTitle: "Special Offer",
          title: "Amazing Experience",
          description: "I had an amazing experience, highly recommended!",
          image: "https://picsum.photos/id/239/200/300", 
          callToAction: "Shop Now",
        },
        {
          preTitle: "Special Offer",
          title: "Amazing Experience",
          description: "I had an amazing experience, highly recommended!",
          image: "https://picsum.photos/id/259/200/300", 
          callToAction: "Shop Now",
        },
        {
          preTitle: "Special Offer",
          title: "Amazing Experience",
          description: "I had an amazing experience, highly recommended!",
          image: "https://picsum.photos/id/249/200/300", 
          callToAction: "Shop Now",
        },
        {
          preTitle: "Special Offer",
          title: "Amazing Experience",
          description: "I had an amazing experience, highly recommended!",
          image: "https://picsum.photos/id/289/200/300", 
          callToAction: "Shop Now",
        },
      ];
    return (
      <>
        <Header links={navItems} />
        <SectionContainer backgroundType="" backgroundContent="" heightClass="">
          <Hero
            title="Accelerate Your Digital Future with End-to-End Consulting and Transformational Solutions"
            subtitle="At Ayasya, we empower businesses with e-Commerce, CMS, Data Engineering, and AI/ML services—delivering innovative strategies and solutions that drive measurable growth in the digital era."
            description=""
            ctaText="Get Started"
            ctaLink="#"
            backgroundType="video"
            backgroundContent="./sarai-at-toria-apple-pie-bonfire.mp4"
            theme="dark"
            alignment="start"
          />
        </SectionContainer>
        <div className="">
            <SectionContainer backgroundType="blank">
            <h2 className="font-normal text-4xl text-center mb-6">
                Success stories / Testimonial
            </h2>
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
            </SectionContainer>
            <SectionContainer backgroundType="" backgroundContent="" heightClass="">
            <h2 className="font-normal text-4xl text-center mb-6">
            Teaser V2
            </h2>
            <div className="grid grid-cols-[50%,50%]">
                {testimonials.slice(2,4).map((testimonial, index) => (
                        <TeaserV2 key={index}
                        preTitle={testimonial.preTitle}
                        title={testimonial.title}
                        image={testimonial.image}
                        callToAction={testimonial.callToAction}
                        />
                    ))}
            </div>
            </SectionContainer>
            <SectionContainer backgroundType="" backgroundContent="" heightClass="">
            <h2 className="font-normal text-4xl text-center mb-6">
                Full Width Teaser as banner
            </h2>
            {testimonials.slice(0,1).map((testimonial, index) => (
                    <Teaser key={index}
                    title={testimonial.title}
                    description={testimonial.description}
                    callToAction={testimonial.callToAction}
                    />
                ))}
            </SectionContainer>
        </div>
        <Footer/>
      </>
    );
}

export default Index;