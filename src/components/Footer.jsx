import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const popularPosts = [
    {
      id: 1,
      image: "/assets/img/gallery/footer_post1.png",
      title: "New CBSE Examination Pattern 2024",
      category: "Education News",
      time: "2 hours ago"
    },
    {
      id: 2,
      image: "/assets/img/gallery/footer_post2.png",
      title: "Top Engineering Colleges Admissions Open",
      category: "Admissions",
      time: "5 hours ago"
    },
    {
      id: 3,
      image: "/assets/img/gallery/footer_post3.png",
      title: "Free Scholarship for Meritorious Students",
      category: "Scholarships",
      time: "1 day ago"
    }
  ];

  return (
    <footer>
      <div className="footer-main footer-bg">
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row d-flex justify-content-between">
              {/* About Section */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="single-footer-caption mb-50">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src="/assets/img/logo/logo2_footer.png" alt="EduPortal Logo" />
                    </Link>
                  </div>
                  <div className="footer-tittle">
                    <div className="footer-pera">
                      <p className="info1">
                        Your trusted source for education news, study materials, and institutional information across India.
                      </p>
                    </div>
                  </div>
                  
                  {/* Social Media Icons */}
                  <div className="footer-social mt-4">
                    <h4 className="mb-3">Follow Us</h4>
                    <div className="social-icons">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/education-news">Education News</Link></li>
                      <li><Link to="/study-resources">Study Resources</Link></li>
                      <li><Link to="/video-lectures">Video Lectures</Link></li>
                      <li><Link to="/institutions">Institution Directory</Link></li>
                      <li><Link to="/scholarships">Scholarships</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Popular Posts */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Popular Posts</h4>
                  </div>
                  {popularPosts.map(post => (
                    <div key={post.id} className="whats-right-single mb-20">
                      <div className="whats-right-img">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="whats-right-cap">
                        <span className="footer-category">{post.category}</span>
                        <h4>
                          <Link to="/education-news">{post.title}</Link>
                        </h4>
                        <p className="footer-time">
                          <i className="far fa-clock"></i> {post.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Contact Info</h4>
                  </div>
                  <div className="footer-contact">
                    <div className="contact-item mb-3">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>123 Education Street, New Delhi, India - 110001</span>
                    </div>
                    <div className="contact-item mb-3">
                      <i className="fas fa-phone-alt"></i>
                      <span>+91 (11) 2345 6789</span>
                    </div>
                    <div className="contact-item mb-3">
                      <i className="fas fa-envelope"></i>
                      <span>info@eduportal.com</span>
                    </div>
                    <div className="contact-item">
                      <i className="fas fa-clock"></i>
                      <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="footer-newsletter mt-4">
                    <h5>Subscribe Newsletter</h5>
                    <div className="newsletter-form">
                      <input 
                        type="email" 
                        placeholder="Your email" 
                        className="form-control"
                      />
                      <button type="submit" className="btn-newsletter">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-area footer-bg">
          <div className="container">
            <div className="footer-border">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <div className="footer-copy-right text-center">
                    <p className="mb-2">
                      Copyright &copy; {new Date().getFullYear()} EduPortal. All rights reserved.
                    </p>
                    <div className="footer-bottom-links">
                      <Link to="/disclaimer">Disclaimer</Link>
                      <span className="separator">|</span>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                      <span className="separator">|</span>
                      <Link to="/terms-conditions">Terms & Conditions</Link>
                      <span className="separator">|</span>
                      <Link to="/about">About Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Footer Styling */
        .footer-main {
          background-color: #1a1a2e;
          color: #fff;
        }

        .footer-area {
          padding: 80px 0 40px;
        }

        .footer-logo img {
          max-width: 180px;
          margin-bottom: 20px;
        }

        .footer-pera .info1 {
          color: #b8b8b8;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        /* Social Media Icons */
        .footer-social h4 {
          font-size: 18px;
          margin-bottom: 15px;
          color: #fff;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-icons a {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          background: #4CAF50;
          transform: translateY(-3px);
        }

        /* Quick Links */
        .footer-tittle h4 {
          font-size: 20px;
          margin-bottom: 25px;
          font-weight: 600;
          color: #fff;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-tittle h4::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background: #4CAF50;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-links li a {
          color: #b8b8b8;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-links li a:hover {
          color: #4CAF50;
          padding-left: 5px;
        }

        /* Popular Posts */
        .whats-right-single {
          display: flex;
          gap: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .whats-right-img {
          flex-shrink: 0;
        }

        .whats-right-img img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 5px;
        }

        .whats-right-cap {
          flex-grow: 1;
        }

        .footer-category {
          display: inline-block;
          font-size: 11px;
          color: #4CAF50;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .whats-right-cap h4 {
          font-size: 14px;
          margin: 5px 0;
          line-height: 1.4;
        }

        .whats-right-cap h4 a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;
        }

        .whats-right-cap h4 a:hover {
          color: #4CAF50;
        }

        .footer-time {
          font-size: 12px;
          color: #888;
          margin: 0;
        }

        /* Contact Info */
        .footer-contact .contact-item {
          display: flex;
          align-items: start;
          gap: 12px;
          color: #b8b8b8;
        }

        .footer-contact .contact-item i {
          color: #4CAF50;
          font-size: 16px;
          margin-top: 3px;
        }

        /* Newsletter */
        .footer-newsletter h5 {
          font-size: 16px;
          margin-bottom: 15px;
          color: #fff;
        }

        .newsletter-form {
          display: flex;
          gap: 10px;
        }

        .newsletter-form .form-control {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-radius: 5px;
        }

        .newsletter-form .form-control:focus {
          outline: none;
          border-color: #4CAF50;
          background: rgba(255, 255, 255, 0.15);
        }

        .newsletter-form .form-control::placeholder {
          color: #888;
        }

        .btn-newsletter {
          padding: 10px 20px;
          background: #4CAF50;
          border: none;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-newsletter:hover {
          background: #45a049;
          transform: scale(1.05);
        }

        /* Footer Bottom */
        .footer-bottom-area {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 25px 0;
        }

        .footer-copy-right p {
          color: #b8b8b8;
          font-size: 14px;
        }

        .footer-bottom-links {
          margin-top: 10px;
        }

        .footer-bottom-links a {
          color: #b8b8b8;
          text-decoration: none;
          transition: color 0.3s;
          font-size: 14px;
        }

        .footer-bottom-links a:hover {
          color: #4CAF50;
        }

        .footer-bottom-links .separator {
          margin: 0 10px;
          color: #555;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-area {
            padding: 50px 0 30px;
          }

          .single-footer-caption {
            margin-bottom: 40px;
          }

          .footer-logo img {
            max-width: 150px;
          }

          .social-icons {
            flex-wrap: wrap;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .btn-newsletter {
            width: 100%;
          }

          .footer-bottom-links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 5px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;