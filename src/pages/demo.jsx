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

const Demo = () => {
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
    {
        preTitle: "Special Offer",
        title: "Amazing Experience",
        description: "I had an amazing experience, highly recommended!",
        image: "https://picsum.photos/id/289/200/300",
        callToAction: "Shop Now",
        brandImg:"https://cdn.ranosys.com/wp-content/uploads/2024/05/adobe-magento.webp",
    },{
        preTitle: "Special Offer",
        title: "Amazing Experience",
        description: "I had an amazing experience, highly recommended!",
        image: "https://picsum.photos/id/289/200/300",
        callToAction: "Shop Now",
        brandImg:"https://cdn.ranosys.com/wp-content/uploads/2024/05/salesforce-new.webp",
    },{
        preTitle: "Special Offer",
        title: "Amazing Experience",
        description: "I had an amazing experience, highly recommended!",
        image: "https://picsum.photos/id/289/200/300",
        callToAction: "Shop Now",
        brandImg:"https://cdn.ranosys.com/wp-content/uploads/2024/05/outsystems2.webp",
    }
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
        <Hero
          title="Accelerate Your Digital Future with End-to-End Consulting and Transformational Solutions"
          subtitle=""
          description="At Ayasya, we empower businesses with e-Commerce, CMS, Data Engineering, and AI/ML services—delivering innovative strategies and solutions that drive measurable growth in the digital era."
          ctaText="Get Started"
          ctaLink="#"
          backgroundType="video"
          backgroundContent="./sarai-at-toria-apple-pie-bonfire.mp4"
          theme="dark"
          alignment="center"
        />
        <SectionContainer 
        alignment="center" 
        isHeading="true"
        title="Who We Are"
        heading="Client-Centric to the bone"
        description="We are a consulting and professional services firm dedicated to transforming how organizations engage with their audiences and manage operations in the digital realm. Our team of seasoned experts crafts robust strategies across e-Commerce, Content Management Systems (CMS), Data Engineering, and advanced Analytics, powered by AI and Generative AI. Rooted in a deep understanding of industry challenges and global market trends, we collaborate with enterprise-level clients as well as EdTech and Government entities to enable seamless digital transformations. By merging best-in-class technology stacks and proprietary frameworks, we help you innovate, scale, and thrive in today’s rapidly evolving ecosystem.">
        </SectionContainer>
        <SectionContainer alignment="center" gridCols="3" isHeading="true" heading="Industries We Serve">
            {testimonials.slice(-3).map((testimonial, index) => (
                <TeaserV3 key={index}
                  title={testimonial.title}
                  description={testimonial.description}
                  image={testimonial.brandImg}
                />
            ))}
        </SectionContainer>
        <SectionContainer alignment="center" gridCols="3" isHeading="true" heading="Success Stories / Testimonials">
            {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard key={index}
                  title={testimonial.title}
                  description={testimonial.description}
                  image={testimonial.image}
                />
            ))}
        </SectionContainer>
        <SectionContainer 
        heading="Our Approach" 
        description="We combine strategic consulting, engineering excellence, and cutting-edge research to guide you through every phase of your transformation journey" 
        gridCols="3" 
        isHeading="true" 
        alignment="center">
            {steps.map((step, index) => (
                <CardV5
                    key={index}
                    title={step.title}
                    description={step.description}
                    stepNumber={index + 1}
                />
            ))}
        </SectionContainer>
      <Footer />
    </>
  );
};

export default Demo;
