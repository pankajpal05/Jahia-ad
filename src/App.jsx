
// import required modules
import "./App.css";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

import TestimonialCard from "./components/TestimonialCard";
import CardV5 from "./components/CardV5";

const App = () => {

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
