import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; // Import the 404 component

const App = () => {
  return (
    <Router>
      <div className="h-full w-full bg-[#000000] overflow-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;