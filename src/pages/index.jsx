import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import "@fortawesome/fontawesome-free/css/all.min.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Header from "../components/Header";
import TestimonialCard from "../components/TestimonialCard";
import SectionContainer from "../components/SectionContainer";
import Hero from "../components/Hero";
import TeaserV2 from "../components/TeaserV2";
import Teaser from "../components/Teaser";
import Footer from "../components/Footer";
import { TeaserV3 } from "../components/TeaserV3";
import Heading from "../components/Heading";
import { CardV4 } from "../components/CardV4";
import CardV5 from "../components/CardV5";

const Index = () => {
  const navItems = ["home", "about", "services", "demo"];

  const testimonials = [
    {
      preTitle: "Special Offer",
      title: "Great Service",
      description: "The service was excellent and exceeded expectations.",
      image: "https://picsum.photos/id/237/200/300",
      callToAction: "Shop Now",
      brandImg:"https://cdn.ranosys.com/wp-content/uploads/2024/05/adobe-magento.webp",
    },
    {
      preTitle: "Special Offer",
      title: "Amazing Experience",
      description: "I had an amazing experience, highly recommended!",
      image: "https://picsum.photos/id/238/200/300",
      callToAction: "Shop Now",
      brandImg:"https://cdn.ranosys.com/wp-content/uploads/2024/05/salesforce-new.webp"
    },
    {
      preTitle: "Special Offer",
      title: "Amazing Experience",
      description: "I had an amazing experience, highly recommended!",
      image: "https://picsum.photos/id/239/200/300",
      callToAction: "Shop Now",
      brandImg:"https://cdn.ranosys.com/wp-content/uploads/2024/05/outsystems2.webp"
    },
    {
      preTitle: "Special Offer",
      title: "Amazing Experience",
      description: "I had an amazing experience, highly recommended!",
      image: "https://picsum.photos/id/259/200/300",
      callToAction: "Shop Now",
      brandImg:"https://cdn.ranosys.com/wp-content/uploads/2024/05/microsoft-logo.webp"
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
      <div className="lg:max-w-[1240px] w-full mx-auto">
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
                  cta= {true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SectionContainer>
        <SectionContainer backgroundType="" backgroundContent="" heightClass="">
          <h2 className="font-normal text-4xl text-center mb-6">Teaser V2</h2>
          <div className="grid grid-cols-[50%,50%]">
            {testimonials.slice(2, 4).map((testimonial, index) => (
              <TeaserV2
                key={index}
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
          {testimonials.slice(0, 1).map((testimonial, index) => (
            <Teaser
              key={index}
              title={testimonial.title}
              description={testimonial.description}
              callToAction={testimonial.callToAction}
            />
          ))}
        </SectionContainer>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 mb-5">
      {testimonials.slice(0, 4).map((testimonial, index) => (
        <TeaserV3  img = {testimonial.brandImg} description={testimonial.description}/>
      ))}
      </div> 
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
      {testimonials.slice(0, 3).map((testimonial, index) => ( 
      <CardV4 title={testimonial.title} description={testimonial.description} />
     ))}
      </div>
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
      <Footer />
    </>
  );
};

export default Index;
