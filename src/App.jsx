// import required modules
import video from "./assets/istockphoto-1411824263-640_adpp_is.mp4"
import "./App.css";
import { BrowserRouter as Router,Route,  Routes } from "react-router-dom";
import Index from "./pages";
import Demo from "./pages/demo.jsx";
import Card from "./pages/card"
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
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
