import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isFirstRouteChange = useRef(true);
  useEffect(() => {
    if (isFirstRouteChange.current) {
      isFirstRouteChange.current = false;
      return;
    }
    window.requestAnimationFrame(() => {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    });
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <header className={`header-wrapper ${isSticky ? 'is-sticky' : ''}`}>
        {/* Top Bar - Hidden on Sticky */}
        <div className="header-top">
          <div className="container">
            <div className="top-content">
              <div className="top-left">
                <div className="trending-badge">
                  {/* <i className="fas fa-bolt"></i> TRENDING */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="header-main">
          <div className="container">
            <div className="header-content">
              {/* Logo */}
              <div className="logo-section">
                <Link to="/" className="logo">
                  <div className="logo-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="logo-text">
                    <span className="logo-title">CampusBulletin</span>
                    <span className="logo-tagline">Education Portal</span>
                  </div>
                </Link>
              </div>

              {/* Navigation */}
              <nav className="main-nav d-none d-lg-flex">
                <ul className="nav-menu">
                  <li>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                      Home
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                      About
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/education-news" className={location.pathname === '/education-news' ? 'active' : ''}>
                      Education News
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/study-resources" className={location.pathname === '/study-resources' ? 'active' : ''}>
                      Study Resources
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/video-lectures" className={location.pathname === '/video-lectures' ? 'active' : ''}>
                      Video Lectures
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/scholarships" className={location.pathname === '/scholarships' ? 'active' : ''}>
                      Scholarships
                    </Link>
                  </li>
                  
                  <li className="has-dropdown">
                    <Link to="/institutions">
                      Institution Directory <i className="fas fa-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link to="/institutions/schools"><i className="fas fa-school"></i> Schools</Link></li>
                      <li><Link to="/institutions/colleges"><i className="fas fa-building"></i> Colleges</Link></li>
                      <li><Link to="/institutions/universities"><i className="fas fa-university"></i> Universities</Link></li>
                    </ul>
                  </li>
                  
                  <li>
                    <Link to="/knowledge-hub" className={location.pathname === '/knowledge-hub' ? 'active' : ''}>
                      Knowledge Hub
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Header Actions */}
              <div className="header-actions">
                <button className="search-btn" onClick={toggleSearch} aria-label="Search">
                  <i className="fas fa-search"></i>
                </button>
                
                <div className="social-links d-none d-xl-flex">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>

                <button className="mobile-toggle d-lg-none" onClick={toggleMobileMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <i className="fas fa-graduation-cap"></i>
            <span>CampusBulletin</span>
          </div>
          <button className="close-btn" onClick={toggleMobileMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <nav className="mobile-nav">
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-info-circle"></i> About
              </Link>
            </li>
            <li>
              <Link to="/education-news" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-newspaper"></i> Education News
              </Link>
            </li>
            <li>
              <Link to="/study-resources" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-book"></i> Study Resources
              </Link>
            </li>
            <li>
              <Link to="/video-lectures" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-video"></i> Video Lectures
              </Link>
            </li>
            <li>
              <Link to="/scholarships" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-graduation-cap"></i> Scholarships
              </Link>
            </li>
            
            <li className={`has-dropdown ${openDropdown === 'institutions' ? 'open' : ''}`}>
              <div className="dropdown-toggle" onClick={() => toggleDropdown('institutions')}>
                <span><i className="fas fa-university"></i> Institution Directory</span>
                <i className={`fas fa-chevron-${openDropdown === 'institutions' ? 'up' : 'down'}`}></i>
              </div>
              <ul className="submenu">
                <li><Link to="/institutions/schools" onClick={() => setIsMobileMenuOpen(false)}>Schools</Link></li>
                <li><Link to="/institutions/colleges" onClick={() => setIsMobileMenuOpen(false)}>Colleges</Link></li>
                <li><Link to="/institutions/universities" onClick={() => setIsMobileMenuOpen(false)}>Universities</Link></li>
              </ul>
            </li>
            
            <li>
              <Link to="/knowledge-hub" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-lightbulb"></i> Knowledge Hub
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fas fa-envelope"></i> Contact
              </Link>
            </li>
          </ul>

          <div className="mobile-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay active">
          <button className="search-close" onClick={toggleSearch}>
            <i className="fas fa-times"></i>
          </button>
          <div className="search-content">
            <h2>What are you looking for?</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="search-input-wrapper">
                <i className="fas fa-search"></i>
                <input 
                  type="text" 
                  placeholder="Search for education news, resources, institutions..." 
                  autoFocus
                />
              </div>
              <button type="submit">Search</button>
            </form>
            <div className="popular-searches">
              <span className="label">Popular Searches:</span>
              <div className="tags">
                <span>CBSE Results</span>
                <span>JEE Mains</span>
                <span>NEET</span>
                <span>Scholarships</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Header Wrapper */
        .header-wrapper {
          position: relative;
          z-index: 999;
          transition: all 0.3s ease;
        }

        .header-wrapper.is-sticky {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
          animation: slideDown 0.3s ease;
        }

        .header-wrapper.is-sticky .header-top {
          display: none;
        }

        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }

        /* Top Bar */
        {/* .header-top {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          padding: 10px 0;
          color: #fff;
          font-size: 13px;
        } */}

        .top-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .top-left {
          display: flex;
          align-items: center;
          gap: 15px;
          flex: 1;
          overflow: hidden;
        }

        {/* .trending-badge {
          background: #ff4757;
          padding: 5px 12px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
        } */}

        .trending-text {
          white-space: nowrap;
          animation: scroll-left 25s linear infinite;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        .top-right {
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        /* Main Header */
        .header-main {
          background: #fff;
          padding: 15px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        /* Logo */
        .logo-section {
          flex-shrink: 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .logo:hover {
          transform: translateY(-2px);
        }

        .logo-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 24px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .logo-title {
          font-size: 22px;
          font-weight: 700;
          color: #2d3436;
          line-height: 1;
        }

        .logo-tagline {
          font-size: 11px;
          color: #636e72;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        /* Navigation */
        .main-nav {
          flex: 1;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 5px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-menu > li {
          position: relative;
        }

        .nav-menu > li > a {
          display: block;
          padding: 12px 16px;
          color: #2d3436;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-menu > li > a:hover,
        .nav-menu > li > a.active {
          color: #667eea;
          background: rgba(102, 126, 234, 0.08);
        }

        .nav-menu > li > a i {
          font-size: 10px;
          margin-left: 5px;
        }

        /* Dropdown */
        .has-dropdown .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          min-width: 220px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.12);
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          list-style: none;
          padding: 8px;
          margin-top: 10px;
        }

        .has-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-menu li a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          color: #2d3436;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .dropdown-menu li a:hover {
          background: rgba(102, 126, 234, 0.08);
          color: #667eea;
          transform: translateX(5px);
        }

        .dropdown-menu li a i {
          width: 18px;
          color: #667eea;
        }

        /* Header Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .search-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .search-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-links a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #f1f3f5;
          color: #495057;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          transform: translateY(-3px);
        }

        /* Mobile Toggle */
        .mobile-toggle {
          width: 42px;
          height: 42px;
          border: none;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 10px;
        }

        .mobile-toggle span {
          width: 20px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Mobile Menu */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.5);
          z-index: 998;
          backdrop-filter: blur(5px);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          max-width: 85%;
          height: 100vh;
          background: #fff;
          z-index: 999;
          transition: all 0.3s ease;
          overflow-y: auto;
          box-shadow: -5px 0 30px rgba(0,0,0,0.2);
        }

        .mobile-menu.active {
          right: 0;
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
        }

        .mobile-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 700;
        }

        .mobile-logo i {
          font-size: 24px;
        }

        .close-btn {
          width: 40px;
          height: 40px;
          border: none;
          background: rgba(255,255,255,0.2);
          color: #fff;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .mobile-nav {
          padding: 20px 0;
        }

        .mobile-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-nav ul li {
          border-bottom: 1px solid #f1f3f5;
        }

        .mobile-nav ul li a,
        .mobile-nav ul li .dropdown-toggle {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 20px;
          color: #2d3436;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .mobile-nav ul li a:hover,
        .mobile-nav ul li .dropdown-toggle:hover {
          background: rgba(102, 126, 234, 0.05);
          color: #667eea;
          padding-left: 25px;
        }

        .mobile-nav ul li a i:first-child {
          width: 20px;
          color: #667eea;
        }

        .dropdown-toggle {
          justify-content: space-between;
        }

        .mobile-nav .submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: #f8f9fa;
        }

        .mobile-nav .has-dropdown.open .submenu {
          max-height: 300px;
        }

        .mobile-nav .submenu li a {
          padding-left: 50px;
          font-size: 14px;
        }

        .mobile-social {
          display: flex;
          justify-content: center;
          gap: 15px;
          padding: 20px;
          margin: 20px;
          border-top: 1px solid #f1f3f5;
        }

        .mobile-social a {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .mobile-social a:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        /* Search Overlay */
        .search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .search-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .search-close {
          position: absolute;
          top: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          border: none;
          background: #fff;
          color: #333;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: all 0.3s ease;
        }

        .search-close:hover {
          transform: rotate(90deg);
          background: #ff4757;
          color: #fff;
        }

        .search-content {
          max-width: 700px;
          width: 90%;
          text-align: center;
        }

        .search-content h2 {
          color: #fff;
          font-size: 32px;
          margin-bottom: 30px;
          font-weight: 600;
        }

        .search-input-wrapper {
          position: relative;
          margin-bottom: 20px;
        }

        .search-input-wrapper i {
          position: absolute;
          left: 25px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
          font-size: 18px;
        }

        .search-content input {
          width: 100%;
          padding: 20px 25px 20px 60px;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          outline: none;
          background: #fff;
        }

        .search-content button[type="submit"] {
          padding: 15px 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .search-content button[type="submit"]:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }

        .popular-searches {
          margin-top: 30px;
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
        }

        .popular-searches .label {
          font-size: 14px;
          opacity: 0.7;
        }

        .popular-searches .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .popular-searches .tags span {
          padding: 8px 20px;
          background: rgba(255,255,255,0.1);
          border-radius: 20px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .popular-searches .tags span:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 991px) {
          .header-main {
            padding: 12px 0;
          }

          .main-nav {
            display: none !important;
          }

          .logo-icon {
            width: 45px;
            height: 45px;
            font-size: 20px;
          }

          .logo-title {
            font-size: 18px;
          }

          .logo-tagline {
            font-size: 10px;
          }
        }

        @media (max-width: 768px) {
          .header-top {
            padding: 8px 0;
          }

          .top-content {
            font-size: 11px;
          }

          .trending-badge {
            font-size: 10px;
            padding: 4px 8px;
          }

          .top-right .date-text {
            display: none;
          }

          .search-content h2 {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .logo-text {
            display: none;
          }

          .header-actions {
            gap: 10px;
          }

          .search-btn,
          .mobile-toggle {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;