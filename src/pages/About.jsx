import React from 'react';
import { Link } from 'react-router-dom';

const PRIMARY_COLOR = '#6F61C1'; // गहरा बैंगनी/नीला रंग
const ACCENT_COLOR = '#FFC107'; // नारंगी हाईलाइट
const LIGHT_BG_COLOR = '#f8f6fb'; // सेक्शन बैकग्राउंड
const HERO_GRADIENT_END = '#5d4e9c'; // Hero Section ग्रेडिएंट

export default function About() {
  return (
    <main className="about-page">
      <style jsx global>{`
        /* Global Custom Styles for About Page */
        .text-primary-custom {
          color: ${PRIMARY_COLOR} !important;
        }
        .text-accent-custom {
          color: ${ACCENT_COLOR} !important;
        }
        .bg-primary-custom {
          background-color: ${PRIMARY_COLOR} !important;
        }
        .btn-accent-custom {
          background-color: ${ACCENT_COLOR};
          border-color: ${ACCENT_COLOR};
          color: ${PRIMARY_COLOR};
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-accent-custom:hover {
          background-color: #f7a800; /* थोड़ा गहरा नारंगी */
          border-color: #f7a800;
        }
      `}</style>

      {/* Breadcrumb */}
      <section className="breadcrumb-area py-4" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-primary-custom">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section (Custom Gradient) */}
      <section
        className="about-hero py-5 text-white"
        style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${HERO_GRADIENT_END} 100%)` }}
      >
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                About <span className="text-accent-custom">EduPortal</span>
              </h1>
             <p className="lead mb-4 text-white">
  Your comprehensive education platform connecting students, institutions, and educational resources across India.
</p>
<p style={{ opacity: 0.9 }} className="text-white">
  We believe in democratizing education by making quality resources accessible to everyone, everywhere. Our goal is to simplify the educational journey for millions of aspirants.
</p>
            </div>
            <div className="col-lg-6">
              <img
                src={"/assets/img/about/pet_care.png"} // Placeholder image
                alt="About EduPortal"
                className="img-fluid rounded shadow-lg"
                style={{ border: `5px solid ${ACCENT_COLOR}` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Satvik Creative Media Innovations Introduction */}
      <section className="company-intro py-5" style={{ background: LIGHT_BG_COLOR }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fw-bold mb-3 text-primary-custom">
                Powered by <span className="text-accent-custom">Satvik Creative Media Innovations</span>
              </h2>
              <p className="lead text-muted mb-4">
                EduPortal is an initiative of Satvik Creative Media Innovations, a dedicated firm focused on leveraging digital platforms to transform the education and information landscape.
              </p>
              <p>
                Our parent company is committed to creating high-quality, reliable, and user-centric digital products. We bring years of expertise in content curation, technology, and user experience to ensure EduPortal remains the most trusted source for educational guidance. Our commitment extends beyond information; we strive to foster a supportive learning ecosystem for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision (Custom Style) */}
      <section className="mission-vision py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary-custom">Our Core Principles</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-lg p-4 custom-card">
                <div className="icon-box mb-3">
                  <i className="fas fa-bullseye fa-3x text-primary-custom"></i>
                </div>
                <h3 className="mb-3 fw-bold">Our Mission</h3>
                <p className="text-muted">
                  To empower students and educators with comprehensive, accurate, and timely educational information. We strive to bridge the gap between educational institutions and learners by providing a centralized platform for all education-related needs.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="fas fa-check text-accent-custom me-2"></i>
                    Democratize access to quality education
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-accent-custom me-2"></i>
                    Connect students with opportunities
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-accent-custom me-2"></i>
                    Provide verified institutional information
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-lg p-4 custom-card">
                <div className="icon-box mb-3">
                  <i className="fas fa-eye fa-3x text-accent-custom"></i>
                </div>
                <h3 className="mb-3 fw-bold">Our Vision</h3>
                <p className="text-muted">
                  To become India's most trusted and comprehensive education platform, empowering millions of students to make informed decisions about their educational journey and career paths.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="fas fa-check text-primary-custom me-2"></i>
                    Be the #1 education portal in India
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-primary-custom me-2"></i>
                    Reach 10 million+ students annually
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check text-primary-custom me-2"></i>
                    Partner with 50,000+ institutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer (Services) */}
      <section className="what-we-offer py-5" style={{ background: LIGHT_BG_COLOR }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary-custom">What We Offer</h2>
            <p className="text-muted">Comprehensive resources for your educational journey</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="icon-wrapper mb-3">
                  <i className="fas fa-newspaper fa-3x text-primary-custom"></i>
                </div>
                <h5 className="mb-3">Education News</h5>
                <p className="text-muted">
                  Latest updates on policies, exam notifications, and educational developments across India.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="icon-wrapper mb-3">
                  <i className="fas fa-book-open fa-3x text-accent-custom"></i>
                </div>
                <h5 className="mb-3">Study Resources</h5>
                <p className="text-muted">
                  Free notes, eBooks, sample papers, and study materials for all competitive exams.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="icon-wrapper mb-3">
                  <i className="fas fa-video fa-3x text-danger"></i>
                </div>
                <h5 className="mb-3">Video Lectures</h5>
                <p className="text-muted">
                  Comprehensive video tutorials from expert educators across various subjects.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="icon-wrapper mb-3">
                  <i className="fas fa-graduation-cap fa-3x text-warning"></i>
                </div>
                <h5 className="mb-3">Scholarships</h5>
                <p className="text-muted">
                  Information about scholarships, grants, and financial aid opportunities.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="icon-wrapper mb-3">
                  <i className="fas fa-university fa-3x text-info"></i>
                </div>
                <h5 className="mb-3">Institution Directory</h5>
                <p className="text-muted">
                  Verified database of schools, colleges, and universities with detailed information.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div className="icon-wrapper mb-3">
                  <i className="fas fa-lightbulb fa-3x text-secondary"></i>
                </div>
                <h5 className="mb-3">Knowledge Hub</h5>
                <p className="text-muted">
                  Articles, guides, and career advice to help you make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Custom Style) */}
      <section className="team-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary-custom">Meet Our Dedicated Team</h2>
            <p className="text-muted">Dedicated professionals working to make education accessible</p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Team Member 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="team-card text-center bg-white p-4 rounded shadow-lg h-100">
                <img
                  src={"/assets/img/team/3.png"} // Placeholder image
                  alt="Team Member"
                  className="rounded-circle mb-3 team-photo"
                />
                <h5 className="mb-1 fw-bold">Rajesh Kumar</h5>
                <p className="text-muted small mb-3 text-accent-custom">Founder & CEO</p>
                <div className="social-links">
                  <a href="#" className="me-2 social-link-custom">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="me-2 social-link-custom">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link-custom">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="team-card text-center bg-white p-4 rounded shadow-lg h-100">
                <img
                  src={"/assets/img/team/1.png"} // Placeholder image
                  alt="Team Member"
                  className="rounded-circle mb-3 team-photo"
                />
                <h5 className="mb-1 fw-bold">Priya Sharma</h5>
                <p className="text-muted small mb-3 text-accent-custom">Content Director</p>
                <div className="social-links">
                  <a href="#" className="me-2 social-link-custom">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="me-2 social-link-custom">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link-custom">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="team-card text-center bg-white p-4 rounded shadow-lg h-100">
                <img
                  src={"/assets/img/team/2.png"} // Placeholder image
                  alt="Team Member"
                  className="rounded-circle mb-3 team-photo"
                />
                <h5 className="mb-1 fw-bold">Amit Patel</h5>
                <p className="text-muted small mb-3 text-accent-custom">Tech Lead</p>
                <div className="social-links">
                  <a href="#" className="me-2 social-link-custom">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="me-2 social-link-custom">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link-custom">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Custom Style) */}
      <section className="cta-section py-5 bg-primary-custom text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0">
              <h3 className="mb-2 fw-bold">Join Thousands of Students on Their Journey</h3>
              <p className="mb-0 text-white-50">
                Get access to exclusive resources, updates, and opportunities
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/contact" className="btn btn-accent-custom btn-lg">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .about-page {
          min-height: 100vh;
        }

        /* Mission & Vision Cards */
        .custom-card {
            border-left: 5px solid ${ACCENT_COLOR} !important;
            transition: transform 0.3s ease;
        }
        .custom-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        
        .icon-box i {
            color: ${PRIMARY_COLOR}; /* Default to primary, overridden inline */
        }
        
        /* Feature Cards */
        .feature-card {
          transition: all 0.3s ease;
          border-top: 3px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
          border-top-color: ${PRIMARY_COLOR};
        }
        
        /* Team Section */
        .team-card {
          transition: all 0.3s ease;
          border-bottom: 5px solid transparent;
        }
        
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
          border-bottom-color: ${ACCENT_COLOR};
        }
        
        .team-photo {
            width: 120px;
            height: 120px;
            object-fit: cover;
            border: 3px solid ${PRIMARY_COLOR};
            transition: border-color 0.3s ease;
        }

        .team-card:hover .team-photo {
            border-color: ${ACCENT_COLOR};
        }

        /* Social Links */
        .social-link-custom {
          display: inline-block;
          width: 35px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          background: ${LIGHT_BG_COLOR};
          border-radius: 50%;
          color: ${PRIMARY_COLOR};
          transition: all 0.3s ease;
        }

        .social-link-custom:hover {
          background: ${ACCENT_COLOR};
          color: #fff;
          transform: scale(1.1);
        }
        
        /* Statistics */
        .stat-card i {
            color: ${PRIMARY_COLOR};
            transition: color 0.3s ease;
        }

        .stat-card:hover i {
            color: ${ACCENT_COLOR};
        }
        
        .stat-card h2 {
            font-size: 3rem;
            color: ${PRIMARY_COLOR};
        }
        
        /* Responsive */
        @media (max-width: 991px) {
            .display-4 {
                font-size: 2.5rem;
            }
        }
        @media (max-width: 768px) {
          .display-5 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </main>
  );
}