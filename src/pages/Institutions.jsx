import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Institutions() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const stats = [
    { count: '15,000+', label: 'Schools', icon: 'fa-school', color: 'primary' },
    { count: '8,500+', label: 'Colleges', icon: 'fa-university', color: 'success' },
    { count: '1,200+', label: 'Universities', icon: 'fa-graduation-cap', color: 'danger' }
  ];

  const categories = [
    {
      id: 'schools',
      title: 'Schools Directory',
      description: 'Find CBSE, ICSE, and State Board schools with complete information',
      icon: 'fa-school',
      color: 'primary',
      link: '/institutions/schools',
      count: '15,000+',
      features: ['Board Affiliation', 'Facilities Info', 'Admission Process', 'Fee Structure', 'Photo Gallery']
    },
    {
      id: 'colleges',
      title: 'Colleges Directory',
      description: 'Explore government and private colleges with course details',
      icon: 'fa-university',
      color: 'success',
      link: '/institutions/colleges',
      count: '8,500+',
      features: ['Courses Offered', 'Faculty Info', 'Placement Records', 'Hostel Details', 'Infrastructure']
    },
    {
      id: 'universities',
      title: 'Universities Directory',
      description: 'Browse universities with department and research information',
      icon: 'fa-graduation-cap',
      color: 'danger',
      link: '/institutions/universities',
      count: '1,200+',
      features: ['Departments', 'Research Areas', 'Affiliations', 'Notifications', 'Rankings']
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

      {/* Hero Section */}
      <section className="institutions-hero py-5 bg-info text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-white text-info mb-3">Key Highlight Feature</span>
              <h1 className="display-4 fw-bold mb-3">Institution Directory</h1>
              <p className="lead mb-4">
                Comprehensive database of verified schools, colleges, and universities across India
              </p>
              <div className="hero-features">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Verified Information</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-search"></i>
                  <span>Advanced Search</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-filter"></i>
                  <span>Smart Filters</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-balance-scale"></i>
                  <span>Compare Institutions</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-stats-grid">
                {stats.map((stat, idx) => (
                  <div key={idx} className={`stat-card bg-${stat.color}`}>
                    <i className={`fas ${stat.icon}`}></i>
                    <h3>{stat.count}</h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section py-5">
        <div className="container">
          <div className="search-card shadow-lg">
            <h3 className="text-center mb-4">Find Your Perfect Institution</h3>
            <div className="row g-3">
              <div className="col-lg-5">
                <div className="search-input-wrapper">
                  <i className="fas fa-search"></i>
                  <input 
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search by name or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <select 
                  className="form-select form-select-lg"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="all">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
              <div className="col-lg-3">
                <button className="btn btn-info btn-lg w-100">
                  <i className="fas fa-search me-2"></i>
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Browse by Category</h2>
            <p className="text-muted">Choose your institution type and explore verified listings</p>
          </div>

          <div className="row g-4">
            {categories.map(category => (
              <div key={category.id} className="col-lg-4">
                <div className={`category-card border-${category.color}`}>
                  <div className={`category-icon bg-${category.color}`}>
                    <i className={`fas ${category.icon}`}></i>
                  </div>
                  <h3>{category.title}</h3>
                  <p className="text-muted mb-3">{category.description}</p>
                  <div className="category-count mb-4">
                    <span className={`text-${category.color} fw-bold`}>{category.count}</span>
                    <span className="text-muted"> Institutions Listed</span>
                  </div>

                  <div className="features-list mb-4">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={category.link} className={`btn btn-${category.color} w-100`}>
                    Explore {category.title.split(' ')[0]}
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Institutions */}
      <section className="featured-section py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 className="mb-1">Featured Institutions</h3>
              <p className="text-muted mb-0">Top-rated and most viewed institutions</p>
            </div>
            <Link to="/institutions/schools" className="btn btn-outline-info">
              View All <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>

          <div className="row g-4">
            {featuredInstitutions.map(inst => (
              <div key={inst.id} className="col-lg-4">
                <div className="featured-card card border-0 shadow-sm">
                  <div className="featured-image">
                    <img src={inst.image} alt={inst.name} />
                    <span className="type-badge">{inst.type}</span>
                    <div className="rating-badge">
                      <i className="fas fa-star"></i>
                      <span>{inst.rating}</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mb-2">{inst.name}</h5>
                    <p className="location mb-3">
                      <i className="fas fa-map-marker-alt text-danger me-2"></i>
                      {inst.location}
                    </p>
                    <div className="institution-info mb-3">
                      {inst.board && (
                        <span className="info-badge">
                          <i className="fas fa-certificate me-1"></i>
                          {inst.board}
                        </span>
                      )}
                      {inst.affiliation && (
                        <span className="info-badge">
                          <i className="fas fa-university me-1"></i>
                          {inst.affiliation}
                        </span>
                      )}
                      {inst.ranking && (
                        <span className="info-badge">
                          <i className="fas fa-trophy me-1"></i>
                          {inst.ranking}
                        </span>
                      )}
                      <span className="info-badge">
                        <i className="fas fa-calendar me-1"></i>
                        Est. {inst.established}
                      </span>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-info btn-sm flex-grow-1">
                        View Details
                      </button>
                      <button className="btn btn-outline-info btn-sm">
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="mb-3">Why Use Our Directory?</h3>
            <p className="text-muted">Trusted by thousands of students and parents</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="feature-box text-center">
                <div className="feature-icon bg-primary">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h5>Verified Data</h5>
                <p className="text-muted">All institutions are verified and regularly updated</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-box text-center">
                <div className="feature-icon bg-success">
                  <i className="fas fa-filter"></i>
                </div>
                <h5>Smart Filters</h5>
                <p className="text-muted">Find exactly what you need with advanced filters</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-box text-center">
                <div className="feature-icon bg-warning">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h5>Compare</h5>
                <p className="text-muted">Compare multiple institutions side by side</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-box text-center">
                <div className="feature-icon bg-danger">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h5>Direct Contact</h5>
                <p className="text-muted">Get in touch with institutions directly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-info text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="mb-2">Can't Find Your Institution?</h3>
              <p className="mb-0">Submit your institution details and we'll add it to our directory</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button className="btn btn-light btn-lg">
                <i className="fas fa-plus-circle me-2"></i>
                Add Institution
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .breadcrumb-item a {
          color: #17a2b8;
          text-decoration: none;
        }

        .institutions-hero {
          background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
        }

        .hero-features {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .hero-features .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.2);
          padding: 8px 15px;
          border-radius: 20px;
        }

        .hero-features .feature-item i {
          font-size: 18px;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .stat-card {
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          color: #fff;
        }

        .stat-card:nth-child(3) {
          grid-column: 1 / -1;
        }

        .stat-card i {
          font-size: 30px;
          margin-bottom: 10px;
        }

        .stat-card h3 {
          font-size: 32px;
          font-weight: bold;
          margin: 10px 0 5px;
        }

        .stat-card p {
          margin: 0;
          font-size: 14px;
        }

        /* Search Section */
        .search-card {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          margin-top: -50px;
        }

        .search-input-wrapper {
          position: relative;
        }

        .search-input-wrapper i {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
          font-size: 18px;
        }

        .search-input-wrapper input {
          padding-left: 45px;
          border-radius: 10px;
        }

        .form-select {
          border-radius: 10px;
        }

        /* Category Cards */
        .category-card {
          background: #fff;
          padding: 35px;
          border-radius: 20px;
          border: 3px solid;
          transition: all 0.3s ease;
          height: 100%;
        }

        .category-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .category-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .category-icon i {
          font-size: 35px;
          color: #fff;
        }

        .category-card h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .category-count {
          padding: 15px;
          background: #f8f9fa;
          border-radius: 10px;
          text-align: center;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .features-list .feature-item {
          font-size: 14px;
          color: #666;
        }

        /* Featured Cards */
        .featured-card {
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .featured-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15) !important;
        }

        .featured-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .featured-card:hover .featured-image img {
          transform: scale(1.1);
        }

        .type-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #17a2b8;
          color: #fff;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .rating-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #ffc107;
          color: #000;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .location {
          color: #666;
          font-size: 14px;
        }

        .institution-info {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .info-badge {
          background: #f8f9fa;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 12px;
          color: #666;
          white-space: nowrap;
        }

        /* Features Section */
        .feature-box {
          padding: 30px 20px;
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .feature-icon i {
          font-size: 28px;
          color: #fff;
        }

        .feature-box h5 {
          font-weight: 700;
          margin-bottom: 10px;
        }

        @media (max-width: 991px) {
          .display-4 {
            font-size: 2rem;
          }

          .hero-stats-grid {
            grid-template-columns: 1fr;
            margin-top: 30px;
          }

          .stat-card:nth-child(3) {
            grid-column: auto;
          }

          .search-card {
            padding: 25px;
          }

          .hero-features {
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}