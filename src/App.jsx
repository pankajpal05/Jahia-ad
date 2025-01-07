
// import required modules
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Demo from './pages/demo';

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
