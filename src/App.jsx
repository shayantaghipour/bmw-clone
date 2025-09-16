import "./index.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/common/Home/Header.jsx";
import Home from "./components/layout/Home.jsx";
import CircularWorld from "./components/layout/CircularWorld.jsx";
import CustomLoader from "./components/specific/CustomLoader.jsx";
import DigitalJourney from "./components/layout/DigitalJourney.jsx";
import ElectricFuture from "./components/layout/ElectricFuture.jsx";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [location]);

  return loading ? (
    <CustomLoader />
  ) : (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/circular-world" element={<CircularWorld />} />
        <Route path="/digital-journey" element={<DigitalJourney />} />
        <Route path="/electric-future" element={<ElectricFuture />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
