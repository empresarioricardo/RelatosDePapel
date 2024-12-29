import { Route, Routes } from "react-router-dom";
//import "./App.css";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Offer from "./pages/Offer";
import Home from "./pages/Home";
import DetailsBook from "./pages/DetailsBook";
import Layout from "./components/Layout/Layout";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<Layout />}>
        <Route path="/main/home" element={<Home />} />
        <Route path="/main/ofertas" element={<Offer />} />
        <Route path="/main/libro/:id" element={<DetailsBook />} />
        <Route path="/main/checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
