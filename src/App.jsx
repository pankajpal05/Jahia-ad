
// import required modules
import "./App.css";
import Index from "./pages";

import Header from "./components/Header";

const App = () => {

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
