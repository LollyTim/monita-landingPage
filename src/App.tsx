import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; // Import the 404 component
import ReceiveMoney from './pages/ReceiveMoney';
import OneCard from './pages/OneCard';
import SendMoney from './pages/SendMoney';
import BillPayment from './pages/BillPayment';

const App = () => {
  return (
    <Router>
      <div className="h-full w-full bg-[#000000] overflow-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receive-money" element={<ReceiveMoney />} />
          <Route path="/one-card" element={<OneCard />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/bill-payment" element={<BillPayment />} />



          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;