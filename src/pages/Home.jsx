import React from 'react';
import { Link } from 'react-router-dom';

const PRIMARY_COLOR = '#6F61C1'; // गहरा बैंगनी/नीला रंग
const ACCENT_COLOR = '#FFC107'; // नारंगी हाईलाइट
const HERO_GRADIENT_END = '#5d4e9c'; // Hero Section ग्रेडिएंट

export default function Home() {
  return (
    <main className="home-page">
      <style jsx global>{`
        /* Global Custom Styles */
        .text-primary-custom {
          color: ${PRIMARY_COLOR} !important;
        }
        .text-accent-custom {
          color: ${ACCENT_COLOR} !important;
        }
        .bg-primary-custom {
          background-color: ${PRIMARY_COLOR} !important;
        }
        .btn-primary-custom {
          background-color: ${PRIMARY_COLOR};
          border-color: ${PRIMARY_COLOR};
          color: #fff;
          transition: background-color 0.3s ease;
        }
        .btn-primary-custom:hover {
          background-color: ${HERO_GRADIENT_END};
          border-color: ${HERO_GRADIENT_END};
        }
        .btn-outline-primary-custom {
          color: ${PRIMARY_COLOR};
          border-color: ${PRIMARY_COLOR};
          transition: all 0.3s ease;
        }
        .btn-outline-primary-custom:hover {
          background-color: ${PRIMARY_COLOR};
          color: #fff;
        }
        .badge-accent-custom {
            background-color: ${ACCENT_COLOR} !important;
            color: ${PRIMARY_COLOR} !important;
        }
      `}</style>

      {/* 🚀 Top Main Banner (Hero Section) - MODIFIED */}
      <section 
        className="main-banner position-relative py-5 text-white d-flex align-items-center"
        style={{ 
            background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${HERO_GRADIENT_END} 100%)`,
            minHeight: '450px' // Increased height for better visual
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              
              {/* ⚪ White Bubble/Badge */}
              <span className="badge-white bg-white mb-3 d-inline-block p-2 px-4 rounded-pill fw-bold text-primary-custom shadow-sm pulse-animation">
                💡 Your Future Starts Here!
              </span>
              
              <h1 className="display-3 fw-bold mb-3">
                Welcome to <span className="text-accent-custom">EduPortal</span>
              </h1>
              <p className="lead mb-4">
                Your Gateway to Quality Education & Learning Resources
              </p>
              <Link to="/contact" className="btn btn-accent-custom btn-lg shadow-lg">
                Explore Courses Today <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🔗 Quick Links Section */}
      <section className="quick-links-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title fw-bold text-primary-custom">Quick Access to Key Resources</h2>
              <p className="text-muted">Navigate swiftly through our extensive educational offerings.</p>
            </div>
          </div>
          <div className="row g-4">
            {/* Dynamic Link Cards */}
            {[{ icon: 'fa-newspaper', title: 'Education News', text: 'Latest updates from education sector', to: '/education-news', color: 'primary' },
              { icon: 'fa-book', title: 'Study Resources', text: 'Notes, eBooks & Study Materials', to: '/study-resources', color: 'success' },
              { icon: 'fa-video', title: 'Video Lectures', text: 'Free video tutorials & courses', to: '/video-lectures', color: 'danger' },
              { icon: 'fa-graduation-cap', title: 'Scholarships & Careers', text: 'Find scholarships & career opportunities', to: '/scholarships', color: 'warning' },
              { icon: 'fa-university', title: 'Institution Directory', text: 'Schools, Colleges & Universities', to: '/institutions', color: 'info' },
              { icon: 'fa-file-alt', title: 'Competitive Exams', text: 'Exam dates, syllabus & preparation', to: '/exams', color: 'secondary' },
            ].map((link, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <Link to={link.to} className="quick-link-card text-decoration-none">
                  <div className="card h-100 text-center p-4 shadow-sm quick-link-hover">
                    <div className="icon-wrapper mb-3">
                      <i className={`fas ${link.icon} fa-3x text-${link.color} text-primary-custom-icon`}></i>
                    </div>
                    <h4 className="fw-bold text-primary-custom">{link.title}</h4>
                    <p className="text-muted">{link.text}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 Today's Highlights Section */}
      <section className="highlights-section py-5" style={{ backgroundColor: '#f8f6fb' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title fw-bold text-primary-custom">Today's <span className='text-accent-custom'>Highlights</span></h2>
              <p className="text-muted">Don't miss out on the latest and most popular resources.</p>
            </div>
          </div>
          
          <div className="row g-4">
            {/* Major Education News */}
            <div className="col-lg-4 col-md-6">
              <div className="highlight-card card h-100 shadow-lg border-0 hover-lift">
                <img 
                  src="assets/img/offers/1.png" 
                  className="card-img-top" 
                  alt="Education News"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <span className="badge badge-accent-custom mb-2">Breaking News</span>
                  <h5 className="card-title fw-bold text-primary-custom">
                    New Education Policy 2024: Major Changes Announced
                  </h5>
                  <p className="card-text text-muted small">
                    Government announces revolutionary changes in curriculum and examination pattern...
                  </p>
                  <div className="meta-info border-top pt-2 mt-2">
                    <small className="text-muted">
                      <i className="far fa-clock me-1"></i> 2 hours ago
                    </small>
                  </div>
                  <Link to="/education-news" className="btn btn-outline-primary-custom btn-sm mt-3">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Video Lecture */}
            <div className="col-lg-4 col-md-6">
              <div className="highlight-card card h-100 shadow-lg border-0 hover-lift">
                <div className="video-thumbnail position-relative" style={{ height: '200px' }}>
                  <img 
                    src="assets/img/offers/1.png" 
                    className="card-img-top" 
                    alt="Video Lecture"
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                  <div className="play-button-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                    style={{ background: 'rgba(0,0,0,0.4)', cursor: 'pointer' }}
                  >
                    <i className="fas fa-play-circle fa-4x text-accent-custom"></i>
                  </div>
                </div>
                <div className="card-body">
                  <span className="badge bg-danger mb-2">New Video</span>
                  <h5 className="card-title fw-bold text-primary-custom">
                    Complete Mathematics Tutorial - Class 12th
                  </h5>
                  <p className="card-text text-muted small">
                    Comprehensive lecture covering calculus and algebra topics by expert teachers...
                  </p>
                  <div className="meta-info border-top pt-2 mt-2">
                    <small className="text-muted">
                      <i className="far fa-eye me-1"></i> 1.2k views
                    </small>
                  </div>
                  <Link to="/video-lectures" className="btn btn-outline-primary-custom btn-sm mt-3">
                    Watch Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Notes/eBook */}
            <div className="col-lg-4 col-md-6">
              <div className="highlight-card card h-100 shadow-lg border-0 hover-lift">
                <img 
                  src="assets/img/offers/1.png" 
                  className="card-img-top" 
                  alt="Study Notes"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <span className="badge bg-success mb-2">Free Download</span>
                  <h5 className="card-title fw-bold text-primary-custom">
                    Complete Physics Notes - JEE/NEET 2024
                  </h5>
                  <p className="card-text text-muted small">
                    Comprehensive study material with solved examples and practice questions...
                  </p>
                  <div className="meta-info border-top pt-2 mt-2">
                    <small className="text-muted">
                      <i className="fas fa-download me-1"></i> 5.4k downloads
                    </small>
                  </div>
                  <Link to="/study-resources" className="btn btn-outline-primary-custom btn-sm mt-3">
                    Download PDF
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏫 Featured Institutions Section */}
      <section className="featured-institutions py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2 className="section-title fw-bold text-primary-custom">Top Institutions Near You</h2>
              <p className="text-muted">Explore our curated list of high-quality educational institutes.</p>
            </div>
          </div>
          
          <div className="row g-4">
            {/* Institution Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="institution-card card h-100 shadow-lg border-0 hover-lift">
                <img 
                  src="assets/img/offers/1.png" 
                  className="card-img-top" 
                  alt="School"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <span className="badge bg-info mb-2">School</span>
                  <h5 className="card-title fw-bold text-primary-custom">Delhi Public School</h5>
                  <p className="card-text small text-muted">
                    <i className="fas fa-map-marker-alt me-2 text-accent-custom"></i>
                    Sector 45, Noida, UP
                  </p>
                  <ul className="list-unstyled small mt-3">
                    <li><i className="fas fa-check text-success me-2"></i>CBSE Affiliated</li>
                    <li><i className="fas fa-check text-success me-2"></i>Classes: Pre-KG to 12th</li>
                    <li><i className="fas fa-check text-success me-2"></i>Co-ed Institution</li>
                  </ul>
                  <Link to="/institutions/dps-noida" className="btn btn-primary-custom w-100 mt-3">
                    Know More
                  </Link>
                </div>
              </div>
            </div>

            {/* Institution Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="institution-card card h-100 shadow-lg border-0 hover-lift">
                <img 
                  src="assets/img/offers/1.png" 
                  className="card-img-top" 
                  alt="College"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <span className="badge badge-accent-custom mb-2">College</span>
                  <h5 className="card-title fw-bold text-primary-custom">St. Stephen's College</h5>
                  <p className="card-text small text-muted">
                    <i className="fas fa-map-marker-alt me-2 text-accent-custom"></i>
                    Delhi University, New Delhi
                  </p>
                  <ul className="list-unstyled small mt-3">
                    <li><i className="fas fa-check text-success me-2"></i>UGC Approved</li>
                    <li><i className="fas fa-check text-success me-2"></i>B.A., B.Sc., B.Com</li>
                    <li><i className="fas fa-check text-success me-2"></i>NAAC A+ Accredited</li>
                  </ul>
                  <Link to="/institutions/st-stephens" className="btn btn-primary-custom w-100 mt-3">
                    Know More
                  </Link>
                </div>
              </div>
            </div>

            {/* Institution Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="institution-card card h-100 shadow-lg border-0 hover-lift">
                <img 
                  src="assets/img/offers/1.png" 
                  className="card-img-top" 
                  alt="University"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <span className="badge bg-danger mb-2">University</span>
                  <h5 className="card-title fw-bold text-primary-custom">IIT Delhi</h5>
                  <p className="card-text small text-muted">
                    <i className="fas fa-map-marker-alt me-2 text-accent-custom"></i>
                    Hauz Khas, New Delhi
                  </p>
                  <ul className="list-unstyled small mt-3">
                    <li><i className="fas fa-check text-success me-2"></i>Autonomous Institute</li>
                    <li><i className="fas fa-check text-success me-2"></i>B.Tech, M.Tech, PhD</li>
                    <li><i className="fas fa-check text-success me-2"></i>NIRF Rank #1</li>
                  </ul>
                  <Link to="/institutions/iit-delhi" className="btn btn-primary-custom w-100 mt-3">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <Link to="/institutions" className="btn btn-lg btn-outline-primary-custom fw-bold">
                View All Institutions
                <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 📧 Newsletter Section (CTA) */}
      <section className="newsletter-section py-5 bg-primary-custom text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h3 className='fw-bold'>Subscribe to Our Newsletter</h3>
              <p className="mb-0 text-white-50">Get latest education news and updates directly to your inbox</p>
            </div>
            <div className="col-lg-6">
              <div className="input-group input-group-lg">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email address"
                />
                <button className="btn btn-accent-custom fw-bold" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .home-page {
          min-height: 100vh;
        }

        /* Banner Styling - MODIFIED */
        .main-banner {
          /* No image, just the gradient background */
        }
        .banner-overlay {
          /* This overlay is no longer needed as there's no background image to overlay */
          /* Keeping for reference, but essentially removed from visual effect */
          background: none !important; 
        }

        /* White Bubble/Badge specific style */
        .badge-white {
            color: ${PRIMARY_COLOR} !important; /* Text color for the white bubble */
            font-size: 1.1rem;
            letter-spacing: 0.8px;
        }

        .pulse-animation {
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }


        /* Quick Links */
        .quick-link-card {
          color: inherit;
          text-decoration: none;
        }
        .quick-link-hover {
          transition: all 0.3s ease;
          border-bottom: 4px solid transparent;
        }
        .quick-link-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
          border-bottom-color: ${ACCENT_COLOR};
        }
        /* Custom icon coloring for quick links */
        .text-primary-custom-icon {
            color: ${PRIMARY_COLOR} !important;
        }
        .quick-link-hover:hover .text-primary-custom-icon {
             color: ${ACCENT_COLOR} !important;
        }


        /* Highlights & Institutions */
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
        }
      
        /* Play Button Overlay - Video */
        .play-button-overlay:hover i {
          transform: scale(1.1);
          color: #fff !important;
        }
        .play-button-overlay i {
          transition: transform 0.3s ease, color 0.3s ease;
        }


        /* Responsive Adjustments */
        @media (max-width: 991px) {
            .display-3 {
                font-size: 2.5rem;
            }
        }
      `}</style>
    </main>
  );
}
