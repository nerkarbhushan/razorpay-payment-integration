import productsData from "./components/data";
import Product from "./components/Product.jsx";
import PaymentSuccess from "./components/PaymentSuccess.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Product products={productsData} />} />
          <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
