// import required modules
import "./App.css";
import { BrowserRouter as Router,Route,  Routes } from "react-router-dom";
import Index from "./pages";
import Demo from "./pages/demo.jsx";
import Card from "./pages/card"
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
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
