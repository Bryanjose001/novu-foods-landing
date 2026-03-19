import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";

function LandingPage() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <Home language={language} />
      <Features language={language} />
    </div>
  );
}

function RestaurantsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
      Restaurants Page
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
    </Routes>
  );
}

export default App;
