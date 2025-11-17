import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Import Pages
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import EducationNews from "./pages/EducationNews.jsx";
import Home from "./pages/Home.jsx";
import Institutions from "./pages/Institutions.jsx";
import Colleges from "./pages/institutions/Colleges.jsx";
import Schools from "./pages/institutions/Schools.jsx";
import Universities from "./pages/institutions/Universities.jsx";
import KnowledgeHub from "./pages/KnowledgeHub.jsx";
import NotFound from "./pages/NotFound.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Scholarships from "./pages/Scholarships.jsx";
import StudyResources from "./pages/StudyResources.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import VideoLectures from "./pages/VideoLectures.jsx";

// Import Admin
import AdminDashboard from "./admin/admindashboard.jsx";
import AdminLogin from "./admin/login.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* Admin Routes - WITHOUT Header/Footer */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* All Other Routes - WITH Header/Footer */}
        <Route path="*" element={
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
        } />
      </Routes>
    </>
  );
}

export default App;