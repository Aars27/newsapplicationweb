import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Institutions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = [
    {
      id: 'schools',
      title: 'Schools Directory',
      description: 'Find CBSE, ICSE, and State Board schools with complete information',
      icon: 'fa-school',
      color: 'primary',
      link: '/institutions/schools',
      count: '15,000+',
      features: ['Board Affiliation', 'Facilities Info', 'Admission Process', 'Fee Structure']
    },
    {
      id: 'colleges',
      title: 'Colleges Directory',
      description: 'Explore government and private colleges with course details',
      icon: 'fa-university',
      color: 'success',
      link: '/institutions/colleges',
      count: '8,500+',
      features: ['Courses Offered', 'Faculty Info', 'Placement Records', 'Hostel Details']
    },
    {
      id: 'universities',
      title: 'Universities Directory',
      description: 'Browse universities with department and research information',
      icon: 'fa-graduation-cap',
      color: 'danger',
      link: '/institutions/universities',
      count: '1,200+',
      features: ['Departments', 'Research Areas', 'Affiliations', 'Rankings']
    }
  ];

  const featuredInstitutions = [
    {
      id: 1,
      name: 'Delhi Public School',
      type: 'School',
      location: 'New Delhi',
      rating: 4.8,
      image: '/assets/img/institutions/dps.jpg',
      board: 'CBSE',
      established: '1949'
    },
    {
      id: 2,
      name: 'St. Stephen\'s College',
      type: 'College',
      location: 'Delhi',
      rating: 4.9,
      image: '/assets/img/institutions/stephens.jpg',
      affiliation: 'Delhi University',
      established: '1881'
    },
    {
      id: 3,
      name: 'IIT Delhi',
      type: 'University',
      location: 'New Delhi',
      rating: 5.0,
      image: '/assets/img/institutions/iit.jpg',
      ranking: 'NIRF Rank #1',
      established: '1961'
    }
  ];

  const locations = ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune', 'Lucknow'];

  return (
    <main className="institutions-page">
      {/* Breadcrumb */}
      <section className="breadcrumb-area py-4" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Institution Directory</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section - Newsletter Style */}
      <section className="institutions-hero py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-gradient-primary mb-3 px-4 py-2">📚 India's Largest Education Database</span>
            <h1 className="display-3 fw-bold mb-3 hero-title">
              Discover Your Perfect <br/>
              <span className="text-gradient">Educational Institution</span>
            </h1>
            <p className="lead text-muted mb-4 mx-auto" style={{maxWidth: '700px'}}>
              Explore 24,700+ verified schools, colleges & universities across India. 
              Find detailed information, compare institutions, and make informed decisions.
            </p>
            
            {/* Newsletter-style Stats Row */}
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-number text-primary">15,000+</div>
                <div className="stat-label">Schools</div>
              </div>
              <div className="stat-divider">|</div>
              <div className="stat-item">
                <div className="stat-number text-success">8,500+</div>
                <div className="stat-label">Colleges</div>
              </div>
              <div className="stat-divider">|</div>
              <div className="stat-item">
                <div className="stat-number text-danger">1,200+</div>
                <div className="stat-label">Universities</div>
              </div>
              <div className="stat-divider">|</div>
              <div className="stat-item">
                <div className="stat-number text-warning">100%</div>
                <div className="stat-label">Verified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section - Minimal Newsletter Style */}
      <section className="search-section py-5 bg-light">
        <div className="container">
          <div className="search-card-minimal">
            <div className="text-center mb-4">
              <h3 className="fw-bold mb-2">🔍 Quick Search</h3>
              <p className="text-muted small">Find institutions by name, location or type</p>
            </div>
            <div className="row g-3 justify-content-center">
              <div className="col-lg-5">
                <input 
                  type="text"
                  className="form-control form-control-lg rounded-pill"
                  placeholder="Search institutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="col-lg-3">
                <select 
                  className="form-select form-select-lg rounded-pill"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="all">📍 All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              <div className="col-lg-2">
                <button className="btn btn-primary btn-lg w-100 rounded-pill">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Newsletter Grid Style */}
      <section className="categories-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Browse by Institution Type</h2>
            <p className="text-muted">Click on any category to explore detailed listings</p>
          </div>

          <div className="row g-4">
            {categories.map(category => (
              <div key={category.id} className="col-lg-4">
                <Link to={category.link} className="text-decoration-none">
                  <div className="newsletter-card">
                    <div className="card-header-section">
                      <div className={`icon-wrapper bg-${category.color}-subtle`}>
                        <i className={`fas ${category.icon} text-${category.color}`}></i>
                      </div>
                      <div className="ms-3">
                        <h4 className="mb-1">{category.title.split(' ')[0]}</h4>
                        <span className={`badge bg-${category.color}-subtle text-${category.color}`}>
                          {category.count} Listed
                        </span>
                      </div>
                    </div>

                    <p className="card-description text-muted mb-3">
                      {category.description}
                    </p>

                    <div className="features-grid">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="feature-tag">
                          ✓ {feature}
                        </div>
                      ))}
                    </div>

                    <div className="card-footer-section">
                      <span className={`explore-btn text-${category.color}`}>
                        Explore Directory →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Institutions - Newsletter Style */}
      <section className="featured-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold mb-2">⭐ Featured This Week</h3>
            <p className="text-muted">Top-rated institutions selected by our editors</p>
          </div>

          <div className="row g-4">
            {featuredInstitutions.map(inst => (
              <div key={inst.id} className="col-lg-4">
                <div className="featured-newsletter-card">
                  <div className="image-container">
                    <img src={inst.image} alt={inst.name} />
                    <div className="overlay-badges">
                      <span className="type-badge">{inst.type}</span>
                      <span className="rating-badge">⭐ {inst.rating}</span>
                    </div>
                  </div>
                  
                  <div className="content-section">
                    <h5 className="institution-name">{inst.name}</h5>
                    <p className="location-text">
                      📍 {inst.location}
                    </p>
                    
                    <div className="info-tags">
                      {inst.board && <span className="info-tag">📋 {inst.board}</span>}
                      {inst.affiliation && <span className="info-tag">🎓 {inst.affiliation}</span>}
                      {inst.ranking && <span className="info-tag">🏆 {inst.ranking}</span>}
                      <span className="info-tag">📅 Est. {inst.established}</span>
                    </div>
                    
                    <div className="action-section">
                      <button className="btn-view-details">
                        View Full Details
                      </button>
                      <button className="btn-bookmark">
                        <i className="fas fa-bookmark"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/institutions/schools" className="btn btn-outline-primary btn-lg rounded-pill px-5">
              View All Institutions →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Newsletter Style */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h3 className="fw-bold mb-3">Why Choose Our Directory?</h3>
              <p className="text-muted mb-4">
                Trusted by 100,000+ students, parents, and education seekers across India
              </p>
              
              <div className="features-list-newsletter">
                <div className="feature-item-newsletter">
                  <div className="feature-icon-small bg-primary-subtle">
                    <i className="fas fa-shield-alt text-primary"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">100% Verified Data</h6>
                    <p className="text-muted small mb-0">All institutions verified and updated regularly</p>
                  </div>
                </div>

                <div className="feature-item-newsletter">
                  <div className="feature-icon-small bg-success-subtle">
                    <i className="fas fa-filter text-success"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Smart Search & Filters</h6>
                    <p className="text-muted small mb-0">Advanced filters to find exactly what you need</p>
                  </div>
                </div>

                <div className="feature-item-newsletter">
                  <div className="feature-icon-small bg-warning-subtle">
                    <i className="fas fa-balance-scale text-warning"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Compare Institutions</h6>
                    <p className="text-muted small mb-0">Side-by-side comparison tool for better decisions</p>
                  </div>
                </div>

                <div className="feature-item-newsletter">
                  <div className="feature-icon-small bg-danger-subtle">
                    <i className="fas fa-phone-alt text-danger"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Direct Contact Info</h6>
                    <p className="text-muted small mb-0">Connect directly with institutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="stats-grid-newsletter">
                <div className="stat-card-newsletter">
                  <h4 className="text-primary mb-0">24,700+</h4>
                  <p className="text-muted small mb-0">Total Institutions</p>
                </div>
                <div className="stat-card-newsletter">
                  <h4 className="text-success mb-0">50+</h4>
                  <p className="text-muted small mb-0">Cities Covered</p>
                </div>
                <div className="stat-card-newsletter">
                  <h4 className="text-warning mb-0">100K+</h4>
                  <p className="text-muted small mb-0">Monthly Visitors</p>
                </div>
                <div className="stat-card-newsletter">
                  <h4 className="text-danger mb-0">4.8/5</h4>
                  <p className="text-muted small mb-0">User Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Newsletter Style */}
      <section className="cta-section py-5 bg-gradient-primary">
        <div className="container">
          <div className="cta-newsletter-card">
            <div className="text-center">
              <h3 className="fw-bold mb-2">📢 Can't Find Your Institution?</h3>
              <p className="text-muted mb-4">
                Submit your institution details and join 24,700+ institutions in our directory
              </p>
              <button className="btn btn-primary btn-lg rounded-pill px-5">
                <i className="fas fa-plus-circle me-2"></i>
                Add Your Institution
              </button>
              <p className="text-muted small mt-3 mb-0">
                ✓ Free Listing  •  ✓ Verified Badge  •  ✓ Enhanced Visibility
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* General */
        .breadcrumb-item a {
          color: #0d6efd;
          text-decoration: none;
        }

        /* Hero Section - Newsletter Style */
        .institutions-hero {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .hero-title {
          color: #212529;
          line-height: 1.2;
        }

        .text-gradient {
          background: linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .badge.bg-gradient-primary {
          background: linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%);
          color: white;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .stats-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 14px;
          color: #6c757d;
          font-weight: 500;
        }

        .stat-divider {
          font-size: 32px;
          color: #dee2e6;
          font-weight: 300;
        }

        /* Search Section - Minimal */
        .search-card-minimal {
          background: white;
          padding: 40px;
          border-radius: 20px;
          border: 1px solid #e9ecef;
        }

        .form-control-lg, .form-select-lg {
          border: 2px solid #e9ecef;
          padding: 12px 24px;
          font-size: 15px;
        }

        .form-control-lg:focus, .form-select-lg:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.1);
        }

        /* Newsletter Cards */
        .newsletter-card {
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 16px;
          padding: 30px;
          transition: all 0.3s ease;
          height: 100%;
          cursor: pointer;
        }

        .newsletter-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-color: #dee2e6;
        }

        .card-header-section {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-wrapper i {
          font-size: 28px;
        }

        .card-header-section h4 {
          font-size: 22px;
          font-weight: 700;
          color: #212529;
        }

        .card-description {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 25px;
        }

        .feature-tag {
          background: #f8f9fa;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          color: #495057;
        }

        .card-footer-section {
          border-top: 1px solid #e9ecef;
          padding-top: 20px;
        }

        .explore-btn {
          font-weight: 600;
          font-size: 15px;
        }

        /* Color Utilities */
        .bg-primary-subtle { background: rgba(13, 110, 253, 0.1); }
        .bg-success-subtle { background: rgba(25, 135, 84, 0.1); }
        .bg-danger-subtle { background: rgba(220, 53, 69, 0.1); }
        .bg-warning-subtle { background: rgba(255, 193, 7, 0.1); }

        .text-primary { color: #0d6efd !important; }
        .text-success { color: #198754 !important; }
        .text-danger { color: #dc3545 !important; }
        .text-warning { color: #ffc107 !important; }

        /* Featured Newsletter Cards */
        .featured-newsletter-card {
          background: white;
          border: 1px solid #e9ecef;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .featured-newsletter-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
        }

        .image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .featured-newsletter-card:hover .image-container img {
          transform: scale(1.05);
        }

        .overlay-badges {
          position: absolute;
          top: 15px;
          left: 15px;
          right: 15px;
          display: flex;
          justify-content: space-between;
        }

        .type-badge {
          background: white;
          color: #212529;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .rating-badge {
          background: white;
          color: #212529;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .content-section {
          padding: 25px;
        }

        .institution-name {
          font-size: 20px;
          font-weight: 700;
          color: #212529;
          margin-bottom: 10px;
        }

        .location-text {
          color: #6c757d;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .info-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .info-tag {
          background: #f8f9fa;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          color: #495057;
        }

        .action-section {
          display: flex;
          gap: 10px;
        }

        .btn-view-details {
          flex: 1;
          background: #0d6efd;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-view-details:hover {
          background: #0b5ed7;
          transform: translateY(-2px);
        }

        .btn-bookmark {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          color: #6c757d;
          padding: 10px 15px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-bookmark:hover {
          background: #e9ecef;
          color: #0d6efd;
        }

        /* Features Newsletter Style */
        .features-list-newsletter {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-item-newsletter {
          display: flex;
          gap: 15px;
        }

        .feature-icon-small {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-icon-small i {
          font-size: 20px;
        }

        .feature-item-newsletter h6 {
          font-weight: 700;
          color: #212529;
        }

        .stats-grid-newsletter {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .stat-card-newsletter {
          background: white;
          border: 1px solid #e9ecef;
          padding: 25px;
          border-radius: 12px;
          text-align: center;
        }

        .stat-card-newsletter h4 {
          font-size: 32px;
          font-weight: 800;
        }

        /* CTA Newsletter */
        .bg-gradient-primary {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .cta-newsletter-card {
          background: white;
          padding: 50px;
          border-radius: 20px;
          border: 1px solid #e9ecef;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .stats-row {
            gap: 20px;
          }

          .stat-number {
            font-size: 28px;
          }

          .stat-divider {
            display: none;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid-newsletter {
            grid-template-columns: 1fr;
          }

          .cta-newsletter-card {
            padding: 30px;
          }
        }

        @media (max-width: 768px) {
          .display-3 {
            font-size: 2rem;
          }

          .search-card-minimal {
            padding: 25px;
          }
        }
      `}</style>
    </main>
  );
}