import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import "./App.css";

function App() {
  return (
    <>
      <SpeedInsights />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
