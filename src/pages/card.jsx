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

const Card = () => {
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
      <SectionContainer
        alignment="center"
        gridCols="1"
        isHeading="true"
        heading="Card V1 (Full width card)"
      >
          {testimonials.slice(0, 1).map((testimonial, index) => (
            <Teaser
                          key={index}
                          title={testimonial.title}
                          description={testimonial.description}
                          callToAction={testimonial.callToAction}
                        />
          ))}
      </SectionContainer>
      <SectionContainer
        alignment="center"
        gridCols="2"
        isHeading="true"
        heading="Card V2"
      >
          {testimonials.slice(2, 4).map((testimonial, index) => (
            <TeaserV2
              key={index}
              preTitle={testimonial.preTitle}
              title={testimonial.title}
              image={testimonial.image}
              callToAction={testimonial.callToAction}
            />
          ))}
      </SectionContainer>
      <SectionContainer
        alignment="center"
        gridCols="3"
        isHeading="true"
        heading="Card V3"
      >
        {testimonials.slice(-3).map((testimonial, index) => (
          <TeaserV3
            key={index}
            title={testimonial.title}
            description={testimonial.description}
            image={testimonial.brandImg}
          />
        ))}
      </SectionContainer>
      {/* <SectionContainer
        heading="Card V4"
        description=""
        gridCols="3"
        isHeading="true"
        alignment="center"
      >
        {testimonials.map((step, index) => (
          <CardV4
            key={index}
            title={step.title}
            description={step.description}
            stepNumber={index + 1}
          />
        ))}
      </SectionContainer> */}
      <SectionContainer
        heading="Card V5"
        description=""
        gridCols="3"
        isHeading="true"
        alignment="center"
      >
        {steps.map((step, index) => (
          <CardV5
            key={index}
            title={step.title}
            description={step.description}
            stepNumber={index + 1}
          />
        ))}
      </SectionContainer>
      <SectionContainer
        alignment="center"
        gridCols="3"
        isHeading="true"
        heading="Card V6 (Testimonial)"
      >
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <TestimonialCard
            key={index}
            title={testimonial.title}
            description={testimonial.description}
            image={testimonial.image}
          />
        ))}
      </SectionContainer>
      <Footer />
    </>
  );
};

export default Card;
