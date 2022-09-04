import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Pages/Home"
import CaseStudy from "./Pages/CaseStudy";
import ContactBar from "./Pages/Components/ContactBar";
import Footer from "./Pages/Components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ContactBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:project" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
