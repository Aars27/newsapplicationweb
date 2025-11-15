import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import EducationNews from "./pages/EducationNews.jsx";
import StudyResources from "./pages/StudyResources.jsx";
import VideoLectures from "./pages/VideoLectures.jsx";
import Scholarships from "./pages/Scholarships.jsx";
import Institutions from "./pages/Institutions.jsx";
import Schools from "./pages/institutions/Schools.jsx";
import Colleges from "./pages/institutions/Colleges.jsx";
import Universities from "./pages/institutions/Universities.jsx";
import KnowledgeHub from "./pages/KnowledgeHub.jsx";
import Contact from "./pages/Contact.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education-news" element={<EducationNews />} />
        <Route path="/study-resources" element={<StudyResources />} />
        <Route path="/video-lectures" element={<VideoLectures />} />
        <Route path="/scholarships" element={<Scholarships />} />
        
        {/* Institution Directory */}
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/institutions/schools" element={<Schools />} />
        <Route path="/institutions/colleges" element={<Colleges />} />
        <Route path="/institutions/universities" element={<Universities />} />
        
        {/* Other Pages */}
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Footer Links */}
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;