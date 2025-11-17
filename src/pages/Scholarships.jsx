import { useState } from 'react';

export default function Scholarships() {
  const [activeTab, setActiveTab] = useState('scholarships');
  const [filterLevel, setFilterLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Scholarships Data
  const scholarships = [
    {
      id: 1,
      name: 'National Scholarship Portal (NSP)',
      level: 'national',
      amount: 'Varies',
      eligibility: 'Students from economically weaker sections',
      deadline: '31st December 2024',
      category: 'Merit-cum-Means',
      status: 'Active',
      students: 'Class 1-12, UG, PG',
      description: 'Central government scholarship for all levels'
    },
    {
      id: 2,
      name: 'PM Scholarship Scheme',
      level: 'national',
      amount: '₹2,500/month',
      eligibility: 'Children of armed forces personnel',
      deadline: '15th November 2024',
      category: 'Service-based',
      status: 'Active',
      students: 'Class 12 Pass',
      description: 'For children/wards of ex-servicemen'
    },
    {
      id: 3,
      name: 'Post-Matric Scholarship for SC/ST',
      level: 'national',
      amount: 'Up to ₹2 Lakh/year',
      eligibility: 'SC/ST students pursuing higher education',
      deadline: '20th December 2024',
      category: 'Merit',
      status: 'Active',
      students: 'Post-Matric',
      description: 'Support for SC/ST students in higher education'
    },
    {
      id: 4,
      name: 'Central Sector Scholarship',
      level: 'national',
      amount: '₹12,000-₹20,000/year',
      eligibility: 'Students with family income below ₹4.5 Lakh',
      deadline: '30th November 2024',
      category: 'Merit-cum-Means',
      status: 'Active',
      students: 'Class 12 Pass',
      description: 'Merit scholarship for college students'
    },
    {
      id: 5,
      name: 'UP State Scholarship',
      level: 'state',
      amount: 'Varies',
      eligibility: 'Domicile of Uttar Pradesh',
      deadline: '10th January 2025',
      category: 'Merit',
      status: 'Active',
      students: 'All Levels',
      description: 'State-level scholarship for UP students'
    },
    {
      id: 6,
      name: 'Delhi Merit Scholarship',
      level: 'state',
      amount: '₹5,000/year',
      eligibility: 'Resident of Delhi with 60% marks',
      deadline: '5th December 2024',
      category: 'Merit',
      status: 'Active',
      students: 'Class 10-12',
      description: 'Merit-based scholarship for Delhi students'
    },
    {
      id: 7,
      name: 'Maharashtra State Scholarship',
      level: 'state',
      amount: 'Up to ₹60,000/year',
      eligibility: 'Maharashtra domicile students',
      deadline: '25th December 2024',
      category: 'Merit-cum-Means',
      status: 'Active',
      students: 'Post-Matric',
      description: 'Financial support for Maharashtra students'
    },
    {
      id: 8,
      name: 'INSPIRE Scholarship - DST',
      level: 'national',
      amount: '₹80,000/year',
      eligibility: 'Science students with 60%+ in Class 12',
      deadline: '15th December 2024',
      category: 'Merit',
      status: 'Active',
      students: 'B.Sc/B.Tech',
      description: 'For excellence in science education'
    }
  ];

  // Career Articles Data
  const careerArticles = [
    {
      id: 1,
      title: 'What to Do After Class 12th - Complete Guide',
      excerpt: 'Explore all career options available after completing your 12th grade including engineering, medical, commerce, and arts streams.',
      icon: '🎓',
      readTime: '8 min read',
      category: 'Career Planning'
    },
    {
      id: 2,
      title: 'Engineering vs Medical - Which Path to Choose?',
      excerpt: 'A comprehensive comparison to help you make the right decision between engineering and medical career paths.',
      icon: '⚕️',
      readTime: '6 min read',
      category: 'Career Choice'
    },
    {
      id: 3,
      title: 'Top 10 Emerging Career Fields in 2024',
      excerpt: 'Discover the most promising career opportunities in AI, Data Science, Blockchain, and other modern fields.',
      icon: '🚀',
      readTime: '7 min read',
      category: 'Future Careers'
    },
    {
      id: 4,
      title: 'How to Choose the Right Course After Graduation',
      excerpt: 'Expert advice on selecting postgraduate programs and specializations that align with your career goals.',
      icon: '📚',
      readTime: '5 min read',
      category: 'Higher Education'
    },
    {
      id: 5,
      title: 'Best Internship Opportunities for Students',
      excerpt: 'Find the right internships to boost your career prospects and gain practical industry experience.',
      icon: '💼',
      readTime: '6 min read',
      category: 'Internships'
    },
    {
      id: 6,
      title: 'Skill Development Courses That Matter',
      excerpt: 'Essential skills and certifications for career advancement in the digital age and competitive job market.',
      icon: '🎯',
      readTime: '7 min read',
      category: 'Skill Development'
    }
  ];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesLevel = filterLevel === 'all' || scholarship.level === filterLevel;
    const matchesSearch = scholarship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scholarship.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scholarship.eligibility.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <main className="scholarships-page">
      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-header">
            <h1>Scholarships & Career Guidance</h1>
            <p>Discover scholarships and get expert career guidance to shape your future</p>
          </div>
          
          <div className="search-wrapper">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search scholarships by name, category, or eligibility..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-btn" onClick={() => setSearchQuery('')}>
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-wrapper">
            <button
              className={`tab-btn ${activeTab === 'scholarships' ? 'active' : ''}`}
              onClick={() => setActiveTab('scholarships')}
            >
              <i className="fas fa-graduation-cap"></i>
              <span>Scholarships</span>
              <span className="count">{scholarships.length}</span>
            </button>
            
            <button
              className={`tab-btn ${activeTab === 'career' ? 'active' : ''}`}
              onClick={() => setActiveTab('career')}
            >
              <i className="fas fa-briefcase"></i>
              <span>Career Guidance</span>
              <span className="count">{careerArticles.length}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Scholarships Content */}
      {activeTab === 'scholarships' && (
        <section className="content-section">
          <div className="container">
            {/* Filter Buttons */}
            <div className="filter-section">
              <div className="filter-title">
                <i className="fas fa-filter"></i>
                <span>Filter by Level</span>
              </div>
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${filterLevel === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterLevel('all')}
                >
                  <i className="fas fa-th-large"></i>
                  All ({scholarships.length})
                </button>
                <button
                  className={`filter-btn ${filterLevel === 'national' ? 'active' : ''}`}
                  onClick={() => setFilterLevel('national')}
                >
                  <i className="fas fa-flag"></i>
                  National ({scholarships.filter(s => s.level === 'national').length})
                </button>
                <button
                  className={`filter-btn ${filterLevel === 'state' ? 'active' : ''}`}
                  onClick={() => setFilterLevel('state')}
                >
                  <i className="fas fa-map-marker-alt"></i>
                  State ({scholarships.filter(s => s.level === 'state').length})
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="results-header">
              <h3>
                {filteredScholarships.length} Scholarship{filteredScholarships.length !== 1 ? 's' : ''} Found
              </h3>
              <p>Showing {filterLevel === 'all' ? 'all' : filterLevel} level scholarships</p>
            </div>

            {/* Scholarships Grid */}
            {filteredScholarships.length === 0 ? (
              <div className="no-results">
                <div className="no-results-icon">
                  <i className="fas fa-search"></i>
                </div>
                <h3>No scholarships found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button className="reset-btn" onClick={() => { setSearchQuery(''); setFilterLevel('all'); }}>
                  <i className="fas fa-redo"></i> Reset Filters
                </button>
              </div>
            ) : (
              <div className="scholarships-grid">
                {filteredScholarships.map(scholarship => (
                  <div key={scholarship.id} className="scholarship-card">
                    <div className="card-header">
                      <div className="badges">
                        <span className={`level-badge ${scholarship.level}`}>
                          <i className={`fas fa-${scholarship.level === 'national' ? 'flag' : 'map-marker-alt'}`}></i>
                          {scholarship.level === 'national' ? 'National' : 'State'}
                        </span>
                        <span className="status-badge">
                          <i className="fas fa-circle"></i>
                          {scholarship.status}
                        </span>
                      </div>
                      <span className="category-tag">{scholarship.category}</span>
                    </div>

                    <div className="card-body">
                      <h4 className="scholarship-name">{scholarship.name}</h4>
                      <p className="scholarship-description">{scholarship.description}</p>

                      <div className="details-grid">
                        <div className="detail-item">
                          <div className="detail-icon amount">
                            <i className="fas fa-rupee-sign"></i>
                          </div>
                          <div className="detail-content">
                            <span className="detail-label">Amount</span>
                            <span className="detail-value">{scholarship.amount}</span>
                          </div>
                        </div>

                        <div className="detail-item">
                          <div className="detail-icon students">
                            <i className="fas fa-users"></i>
                          </div>
                          <div className="detail-content">
                            <span className="detail-label">For</span>
                            <span className="detail-value">{scholarship.students}</span>
                          </div>
                        </div>

                        <div className="detail-item full">
                          <div className="detail-icon eligibility">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="detail-content">
                            <span className="detail-label">Eligibility</span>
                            <span className="detail-value">{scholarship.eligibility}</span>
                          </div>
                        </div>

                        <div className="detail-item deadline-item">
                          <div className="detail-icon deadline">
                            <i className="fas fa-calendar-alt"></i>
                          </div>
                          <div className="detail-content">
                            <span className="detail-label">Deadline</span>
                            <span className="detail-value deadline-value">{scholarship.deadline}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button className="action-btn primary">
                        <i className="fas fa-info-circle"></i>
                        View Details
                      </button>
                      <button className="action-btn secondary">
                        <i className="fas fa-external-link-alt"></i>
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Application Process */}
            <div className="process-section">
              <div className="process-header">
                <h3>
                  <i className="fas fa-clipboard-list"></i>
                  How to Apply for Scholarships
                </h3>
                <p>Follow these simple steps to apply for any scholarship</p>
              </div>

              <div className="process-steps">
                <div className="step-card">
                  <div className="step-number">01</div>
                  <div className="step-icon">
                    <i className="fas fa-user-plus"></i>
                  </div>
                  <h4>Register</h4>
                  <p>Create your account on the scholarship portal</p>
                </div>

                <div className="step-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>

                <div className="step-card">
                  <div className="step-number">02</div>
                  <div className="step-icon">
                    <i className="fas fa-edit"></i>
                  </div>
                  <h4>Fill Form</h4>
                  <p>Complete the application with accurate details</p>
                </div>

                <div className="step-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>

                <div className="step-card">
                  <div className="step-number">03</div>
                  <div className="step-icon">
                    <i className="fas fa-upload"></i>
                  </div>
                  <h4>Upload Documents</h4>
                  <p>Submit all required documents and certificates</p>
                </div>

                <div className="step-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>

                <div className="step-card">
                  <div className="step-number">04</div>
                  <div className="step-icon">
                    <i className="fas fa-check-double"></i>
                  </div>
                  <h4>Track Status</h4>
                  <p>Monitor your application progress online</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Career Guidance Content */}
      {activeTab === 'career' && (
        <section className="content-section career-section">
          <div className="container">
            {/* Career Articles */}
            <div className="section-header">
              <h3>
                <i className="fas fa-newspaper"></i>
                Career Guidance Articles
              </h3>
              <p>Expert advice and insights for your career planning</p>
            </div>

            <div className="career-articles-grid">
              {careerArticles.map(article => (
                <div key={article.id} className="career-article-card">
                  <div className="article-icon">{article.icon}</div>
                  <div className="article-content">
                    <span className="article-category">{article.category}</span>
                    <h4 className="article-title">{article.title}</h4>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-footer">
                      <span className="read-time">
                        <i className="far fa-clock"></i>
                        {article.readTime}
                      </span>
                      <button className="read-btn">
                        Read Article <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Career Paths */}
            <div className="section-header mt-5">
              <h3>
                <i className="fas fa-route"></i>
                Popular Career Paths
              </h3>
              <p>Explore diverse career options across different fields</p>
            </div>

            <div className="career-paths-grid">
              {[
                { name: 'Engineering', icon: 'fas fa-cogs', color: '#6F61C1' },
                { name: 'Medical', icon: 'fas fa-heartbeat', color: '#e74c3c' },
                { name: 'Commerce', icon: 'fas fa-chart-line', color: '#27ae60' },
                { name: 'Arts & Humanities', icon: 'fas fa-palette', color: '#f39c12' },
                { name: 'Law', icon: 'fas fa-gavel', color: '#34495e' },
                { name: 'Design', icon: 'fas fa-pencil-ruler', color: '#9b59b6' },
                { name: 'Management', icon: 'fas fa-briefcase', color: '#3498db' },
                { name: 'Science Research', icon: 'fas fa-flask', color: '#16a085' }
              ].map((career, idx) => (
                <div key={idx} className="career-path-card">
                  <div className="path-icon" style={{ background: `${career.color}15` }}>
                    <i className={career.icon} style={{ color: career.color }}></i>
                  </div>
                  <h5>{career.name}</h5>
                  <button className="explore-btn" style={{ color: career.color }}>
                    Explore <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              ))}
            </div>

            {/* Internships & Skills */}
            <div className="info-cards-grid">
              <div className="info-card internships">
                <div className="info-card-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3>Internship Opportunities</h3>
                <p>Gain practical experience and boost your resume with industry internships from top companies</p>
                <button className="info-btn">
                  Find Internships <i className="fas fa-arrow-right"></i>
                </button>
              </div>

              <div className="info-card skills">
                <div className="info-card-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3>Skill Development</h3>
                <p>Enhance your skills with online courses and certifications from leading educational platforms</p>
                <button className="info-btn">
                  Browse Courses <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .scholarships-page {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* Search Section */
        .search-section {
          background: #fff;
          padding: 40px 0;
          border-bottom: 1px solid #e9ecef;
        }

        .search-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .search-header h1 {
          font-size: 36px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 10px;
        }

        .search-header p {
          font-size: 16px;
          color: #636e72;
        }

        .search-wrapper {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
        }

        .search-wrapper i:first-child {
          position: absolute;
          left: 25px;
          top: 50%;
          transform: translateY(-50%);
          color: #6F61C1;
          font-size: 18px;
        }

        .search-wrapper input {
          width: 100%;
          padding: 18px 60px;
          border: 2px solid #e9ecef;
          border-radius: 50px;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-wrapper input:focus {
          border-color: #6F61C1;
          box-shadow: 0 0 0 4px rgba(111, 97, 193, 0.1);
        }

        .clear-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 35px;
          height: 35px;
          border: none;
          background: #f1f3f5;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          transition: all 0.3s ease;
        }

        .clear-btn:hover {
          background: #e9ecef;
          color: #333;
        }

        /* Tabs Section */
        .tabs-section {
          padding: 40px 0;
          background: #fff;
        }

        .tabs-wrapper {
          display: flex;
          gap: 20px;
          max-width: 600px;
          margin: 0 auto;
        }

        .tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 30px;
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 15px;
          font-size: 16px;
          font-weight: 600;
          color: #495057;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .tab-btn i {
          font-size: 20px;
        }

        .tab-btn .count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #6F61C1;
          color: #fff;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        .tab-btn:hover {
          background: rgba(111, 97, 193, 0.05);
          border-color: #6F61C1;
          color: #6F61C1;
        }

        .tab-btn.active {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          border-color: #6F61C1;
          color: #fff;
        }

        .tab-btn.active .count {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Content Section */
        .content-section {
          padding: 60px 0;
        }

        /* Filter Section */
        .filter-section {
          background: #fff;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .filter-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: #2d3436;
          font-size: 16px;
        }

        .filter-title i {
          color: #6F61C1;
        }

        .filter-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          flex: 1;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 25px;
          font-weight: 600;
          color: #495057;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .filter-btn:hover {
          background: rgba(111, 97, 193, 0.05);
          border-color: #6F61C1;
          color: #6F61C1;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          border-color: #6F61C1;
          color: #fff;
        }

        /* Results Header */
        .results-header {
          margin-bottom: 30px;
        }

        .results-header h3 {
          font-size: 24px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 5px;
        }

        .results-header p {
          font-size: 14px;
          color: #636e72;
        }

        /* Scholarships Grid */
        .scholarships-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .scholarship-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .scholarship-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border-color: #6F61C1;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 25px 25px 0;
          flex-wrap: wrap;
          gap: 15px;
        }

        .badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .level-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .level-badge.national {
          background: #e3f2fd;
          color: #1976d2;
        }

        .level-badge.state {
          background: #f3e5f5;
          color: #7b1fa2;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          background: #e8f5e9;
          color: #4caf50;
        }

        .status-badge i {
          font-size: 8px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .category-tag {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #fff;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .card-body {
          padding: 25px;
        }

        .scholarship-name {
          font-size: 20px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .scholarship-description {
          font-size: 14px;
          color: #636e72;
          margin-bottom: 25px;
          line-height: 1.6;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .detail-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .detail-item.full {
          grid-column: 1 / -1;
        }

        .detail-item.deadline-item {
          grid-column: 1 / -1;
          background: #fff3cd;
          padding: 15px;
          border-radius: 12px;
          border: 2px dashed #ffc107;
        }

        .detail-icon {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .detail-icon.amount {
          background: #e8f5e9;
          color: #4caf50;
        }

        .detail-icon.students {
          background: #e3f2fd;
          color: #2196f3;
        }

        .detail-icon.eligibility {
          background: #f3e5f5;
          color: #9c27b0;
        }

        .detail-icon.deadline {
          background: #ffebee;
          color: #f44336;
        }

        .detail-content {
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex: 1;
        }

        .detail-label {
          font-size: 13px;
          color: #636e72;
          font-weight: 500;
        }

        .detail-value {
          font-size: 14px;
          color: #2d3436;
          font-weight: 600;
        }

        .deadline-value {
          color: #d32f2f;
          font-size: 15px;
        }

        .card-footer {
          padding: 25px;
          background: #f8f9fa;
          display: flex;
          gap: 15px;
        }

        .action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn.primary {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          color: #fff;
        }

        .action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(111, 97, 193, 0.3);
        }

        .action-btn.secondary {
          background: #fff;
          color: #6F61C1;
          border: 2px solid #6F61C1;
        }

        .action-btn.secondary:hover {
          background: #6F61C1;
          color: #fff;
        }

        /* Process Section */
        .process-section {
          background: #fff;
          padding: 50px;
          border-radius: 25px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .process-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .process-header h3 {
          font-size: 32px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .process-header h3 i {
          color: #6F61C1;
        }

        .process-header p {
          font-size: 16px;
          color: #636e72;
        }

        .process-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .step-card {
          flex: 1;
          min-width: 200px;
          max-width: 220px;
          background: linear-gradient(135deg, rgba(111, 97, 193, 0.05) 0%, rgba(139, 95, 191, 0.05) 100%);
          padding: 30px 20px;
          border-radius: 20px;
          text-align: center;
          position: relative;
          border: 2px solid #e9ecef;
          transition: all 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-10px);
          border-color: #6F61C1;
          box-shadow: 0 10px 30px rgba(111, 97, 193, 0.15);
        }

        .step-number {
          position: absolute;
          top: -15px;
          right: 20px;
          width: 35px;
          height: 35px;
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
        }

        .step-icon {
          width: 70px;
          height: 70px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 28px;
          color: #6F61C1;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .step-card h4 {
          font-size: 18px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 10px;
        }

        .step-card p {
          font-size: 14px;
          color: #636e72;
          line-height: 1.6;
        }

        .step-arrow {
          font-size: 24px;
          color: #6F61C1;
          opacity: 0.3;
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 80px 20px;
        }

        .no-results-icon {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, rgba(111, 97, 193, 0.1) 0%, rgba(139, 95, 191, 0.1) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 40px;
          color: #6F61C1;
        }

        .no-results h3 {
          font-size: 24px;
          color: #2d3436;
          margin-bottom: 10px;
        }

        .no-results p {
          font-size: 16px;
          color: #636e72;
          margin-bottom: 30px;
        }

        .reset-btn {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          color: #fff;
          border: none;
          padding: 14px 30px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        .reset-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(111, 97, 193, 0.3);
        }

        /* Career Section */
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-header h3 {
          font-size: 36px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .section-header h3 i {
          color: #6F61C1;
        }

        .section-header p {
          font-size: 16px;
          color: #636e72;
        }

        .mt-5 {
          margin-top: 80px;
        }

        /* Career Articles Grid */
        .career-articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .career-article-card {
          background: #fff;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .career-article-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .article-icon {
          font-size: 60px;
          margin-bottom: 20px;
        }

        .article-category {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          color: #fff;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 15px;
        }

        .article-title {
          font-size: 20px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .article-excerpt {
          font-size: 14px;
          color: #636e72;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .article-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }

        .read-time {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #636e72;
        }

        .read-btn {
          background: transparent;
          color: #6F61C1;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .read-btn:hover {
          background: rgba(111, 97, 193, 0.1);
          gap: 12px;
        }

        /* Career Paths Grid */
        .career-paths-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 25px;
          margin-bottom: 60px;
        }

        .career-path-card {
          background: #fff;
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .career-path-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .path-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 28px;
        }

        .career-path-card h5 {
          font-size: 18px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 15px;
        }

        .explore-btn {
          background: transparent;
          border: none;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .explore-btn:hover {
          background: rgba(111, 97, 193, 0.05);
          gap: 12px;
        }

        /* Info Cards Grid */
        .info-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .info-card {
          padding: 50px;
          border-radius: 25px;
          text-align: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .info-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .info-card.internships {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
        }

        .info-card.skills {
          background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
        }

        .info-card-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          font-size: 36px;
          position: relative;
          z-index: 1;
        }

        .info-card h3 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 15px;
          position: relative;
          z-index: 1;
        }

        .info-card p {
          font-size: 16px;
          margin-bottom: 30px;
          opacity: 0.95;
          position: relative;
          z-index: 1;
        }

        .info-btn {
          background: #fff;
          color: #2d3436;
          border: none;
          padding: 14px 30px;
          border-radius: 25px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          font-size: 15px;
          position: relative;
          z-index: 1;
        }

        .info-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .scholarships-grid {
            grid-template-columns: 1fr;
          }

          .career-articles-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 992px) {
          .process-steps {
            flex-direction: column;
          }

          .step-arrow {
            transform: rotate(90deg);
          }

          .info-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .search-section {
            padding: 30px 0;
          }

          .search-header h1 {
            font-size: 28px;
          }

          .search-header p {
            font-size: 14px;
          }

          .tabs-wrapper {
            flex-direction: column;
          }

          .filter-section {
            flex-direction: column;
            align-items: flex-start;
          }

          .filter-buttons {
            width: 100%;
          }

          .filter-btn {
            flex: 1;
          }

          .scholarships-grid {
            grid-template-columns: 1fr;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .card-footer {
            flex-direction: column;
          }

          .process-section {
            padding: 30px 20px;
          }

          .process-header h3 {
            font-size: 24px;
            flex-direction: column;
          }

          .career-articles-grid,
          .career-paths-grid {
            grid-template-columns: 1fr;
          }

          .section-header h3 {
            font-size: 28px;
            flex-direction: column;
          }

          .info-card {
            padding: 40px 30px;
          }
        }

        @media (max-width: 576px) {
          .search-wrapper input {
            padding: 15px 50px;
            font-size: 14px;
          }

          .tab-btn {
            font-size: 14px;
            padding: 15px 20px;
          }

          .scholarship-card {
            border-radius: 15px;
          }

          .process-section {
            border-radius: 15px;
          }

          .step-card {
            min-width: 100%;
          }
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scholarship-card,
        .career-article-card,
        .career-path-card,
        .step-card {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </main>
  );
}