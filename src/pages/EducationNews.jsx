import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PRIMARY_COLOR = '#6F61C1'; // गहरा बैंगनी/नीला रंग
const ACCENT_COLOR = '#FFC107'; // नारंगी हाईलाइट
const LIGHT_BG_COLOR = '#f8f6fb'; // सेक्शन बैकग्राउंड
const HERO_GRADIENT_END = '#5d4e9c'; // Hero Section ग्रेडिएंट

export default function EducationNews() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // News Data (वही रखा गया है)
  const newsData = [
    {
      id: 1,
      category: 'school',
      image: '/assets/img/news/school-news1.jpg',
      headline: 'CBSE Announces New Examination Pattern for Class 10th and 12th 2024',
      excerpt: 'Central Board of Secondary Education has introduced significant changes in the examination pattern...',
      date: '2024-11-14',
      author: 'Rajesh Kumar',
      readTime: '5 min read',
    },
    {
      id: 2,
      category: 'higher',
      image: '/assets/img/news/higher-ed1.jpg',
      headline: 'IIT Admission Process 2024: Complete Guide and Important Dates',
      excerpt: 'Indian Institute of Technology releases admission schedule for upcoming academic session...',
      date: '2024-11-13',
      author: 'Priya Sharma',
      readTime: '7 min read',
    },
    {
      id: 3,
      category: 'admission',
      image: '/assets/img/news/admission1.jpg',
      headline: 'JEE Main 2024 Registration Begins - Check Eligibility and Dates',
      excerpt: 'National Testing Agency opens registration portal for JEE Main examination...',
      date: '2024-11-12',
      author: 'Amit Verma',
      readTime: '4 min read',
    },
    {
      id: 4,
      category: 'schemes',
      image: '/assets/img/news/scholarship1.jpg',
      headline: 'Government Launches New Scholarship Scheme for Meritorious Students',
      excerpt: 'Ministry of Education announces financial assistance program for deserving students...',
      date: '2024-11-11',
      author: 'Neha Singh',
      readTime: '6 min read',
    },
    {
      id: 5,
      category: 'school',
      image: '/assets/img/news/school-news2.jpg',
      headline: 'NCERT Revises Curriculum for Classes 6-12: Key Changes Explained',
      excerpt: 'National Council of Educational Research and Training updates syllabus structure...',
      date: '2024-11-10',
      author: 'Rajesh Kumar',
      readTime: '5 min read',
    },
    {
      id: 6,
      category: 'higher',
      image: '/assets/img/news/higher-ed2.jpg',
      headline: 'Top Engineering Colleges Release First Merit List for Admissions',
      excerpt: 'Leading technical institutions announce admission results for first counseling round...',
      date: '2024-11-09',
      author: 'Priya Sharma',
      readTime: '4 min read',
    },
    {
      id: 7,
      category: 'admission',
      image: '/assets/img/news/admission2.jpg',
      headline: 'NEET UG 2024: Application Correction Window Opens',
      excerpt: 'National Eligibility cum Entrance Test allows candidates to edit application details...',
      date: '2024-11-08',
      author: 'Amit Verma',
      readTime: '3 min read',
    },
    {
      id: 8,
      category: 'schemes',
      image: '/assets/img/news/scholarship2.jpg',
      headline: 'Post-Matric Scholarship Applications Extended Till December',
      excerpt: 'State government extends deadline for scholarship applications for backward classes...',
      date: '2024-11-07',
      author: 'Neha Singh',
      readTime: '4 min read',
    },
    {
      id: 9,
      category: 'school',
      image: '/assets/img/news/school-news3.jpg',
      headline: 'Board Exams 2024: New Guidelines for Practical Examinations',
      excerpt: 'Education boards issue revised protocols for conducting practical assessments...',
      date: '2024-11-06',
      author: 'Rajesh Kumar',
      readTime: '5 min read',
    },
    {
      id: 10,
      category: 'higher',
      image: '/assets/img/news/higher-ed3.jpg',
      headline: 'UGC Approves New Courses in Emerging Technologies',
      excerpt: 'University Grants Commission gives nod to programs in AI, Data Science, and Robotics...',
      date: '2024-11-05',
      author: 'Priya Sharma',
      readTime: '6 min read',
    },
    {
      id: 11,
      category: 'admission',
      image: '/assets/img/news/admission3.jpg',
      headline: 'CLAT 2024 Results Declared: Check Scores and Counseling Dates',
      excerpt: 'Common Law Admission Test results announced, counseling process to begin soon...',
      date: '2024-11-04',
      author: 'Amit Verma',
      readTime: '4 min read',
    },
    {
      id: 12,
      category: 'schemes',
      image: '/assets/img/news/scholarship3.jpg',
      headline: 'PM Scholarship Scheme: 5000 Additional Seats Announced',
      excerpt: 'Prime Minister increases scholarship quota for children of armed forces personnel...',
      date: '2024-11-03',
      author: 'Neha Singh',
      readTime: '5 min read',
    },
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: 'fa-newspaper' },
    { id: 'school', name: 'School-Level', icon: 'fa-school' },
    { id: 'higher', name: 'Higher Education', icon: 'fa-university' },
    { id: 'admission', name: 'Admission', icon: 'fa-file-alt' },
    { id: 'schemes', name: 'Govt. Schemes', icon: 'fa-award' },
  ];

  // Filter news based on category and search (वही रखा गया है)
  const filteredNews = newsData.filter((news) => {
    const matchesCategory = activeCategory === 'all' || news.category === activeCategory;
    const matchesSearch =
      news.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="education-news-page">
      <style jsx global>{`
        :root {
          --primary-color: ${PRIMARY_COLOR};
          --accent-color: ${ACCENT_COLOR};
          --light-bg-color: ${LIGHT_BG_COLOR};
        }
        
        /* Global Reset for News */
        .card-title {
            font-size: 1.25rem;
            line-height: 1.4;
            font-weight: 700;
        }

        /* Custom Colors and Buttons (Updated) */
        .btn-primary-custom {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
          transition: all 0.3s ease;
        }

        .btn-primary-custom:hover {
          background-color: ${HERO_GRADIENT_END};
          border-color: ${HERO_GRADIENT_END};
        }
        
        .btn-accent-custom {
            background-color: var(--accent-color);
            border-color: var(--accent-color);
            color: var(--primary-color);
            font-weight: 600;
            border-radius: 50px;
            padding: 12px 30px;
        }
        
        .btn-accent-custom:hover {
            background-color: #f7a800;
            border-color: #f7a800;
            color: var(--primary-color);
        }
        
        /* Decorative Circles for Hero Section */
        .circle {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            filter: blur(5px);
        }
        .circle-lg { width: 300px; height: 300px; }
        .circle-md { width: 200px; height: 200px; }
        .circle-sm { width: 100px; height: 100px; }

        /* Category Tabs (Improved UI) */
        .category-btn {
          padding: 10px 15px;
          border: none; /* No border for cleaner look */
          background: #e9ecef; /* Light gray background */
          border-radius: 5px;
          transition: all 0.3s ease;
          cursor: pointer;
          font-weight: 500;
          color: #333;
          white-space: nowrap; /* Prevents wrapping */
        }

        .category-btn:hover {
          background: #ddd;
          color: var(--primary-color);
        }

        .category-btn.active {
          background: var(--primary-color);
          color: #fff;
          font-weight: 600;
          /* Optional: Bottom bar indicator for active tab */
          border-bottom: 3px solid var(--accent-color);
          border-radius: 5px 5px 0 0;
        }
        
        .category-tabs .row {
            overflow-x: auto; /* Enable horizontal scrolling for small screens */
            flex-wrap: nowrap;
            padding-bottom: 5px;
        }

        /* News Cards (Improved UI/UX) */
        .news-card {
          transition: all 0.3s ease;
          overflow: hidden;
          background: #fff;
          border-radius: 10px; /* Softer edges */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Lighter initial shadow */
        }

        .news-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1) !important; /* Stronger hover shadow */
        }

        .news-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 200px; /* Consistent image height */
        }
        
        .news-card .card-img-top {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .news-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smoother zoom */
        }

        .news-card:hover .news-image-wrapper img {
          transform: scale(1.1);
        }

        .category-badge {
          background: var(--accent-color);
          color: var(--primary-color);
          font-weight: 700;
          top: 15px;
          left: 15px;
          padding: 4px 12px;
          border-radius: 5px; /* Square badge for professionalism */
          z-index: 10;
        }
        
        .news-meta {
            border-bottom: 1px solid #eee;
            padding-bottom: 8px;
            margin-bottom: 15px !important;
        }

        /* Search Bar (Improved Floating Effect) */
        .search-section {
            margin-top: -50px; /* Pulls search box up into the Hero area */
            padding-bottom: 0 !important;
            background: none !important;
            position: relative;
            z-index: 50; /* Above Hero */
        }

        .search-box input {
            border: none !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
        }
        
        .newsletter-form button {
            white-space: nowrap;
        }

      `}</style>

      {/* 🔍 Search Bar (Floating) */}
      <section className="search-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="search-box position-relative">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search news by keyword (e.g., JEE, CBSE, Scholarship)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ paddingLeft: '50px', borderRadius: '50px' }}
                />
                <i
                  className="fas fa-search position-absolute"
                  style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', color: PRIMARY_COLOR }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📑 Category Tabs (Enhanced) */}
      <section className="category-section py-5">
        <div className="container">
          <div className="category-tabs border-bottom pb-2">
            <div className="row g-3 justify-content-center">
              {categories.map((cat) => (
                <div key={cat.id} className="col-auto">
                  <button
                    className={`category-btn fw-bold ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => {
                        setActiveCategory(cat.id);
                        setSearchQuery(''); // Clear search on category change
                    }}
                  >
                    <i className={`fas ${cat.icon} me-2`}></i>
                    {cat.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📰 News Grid */}
      <section className="news-grid py-5" style={{ background: LIGHT_BG_COLOR }}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h2 className='fw-bold' style={{ color: PRIMARY_COLOR }}>
                Latest Articles
              </h2>
              <p className="text-muted">
                Showing **{filteredNews.length}** {filteredNews.length === 1 ? 'article' : 'articles'} in {activeCategory === 'all' ? 'All Categories' : categories.find(c => c.id === activeCategory)?.name}
              </p>
            </div>
          </div>
          
          {filteredNews.length === 0 ? (
            <div className="text-center py-5 bg-white rounded-3 shadow-sm">
              <i className="fas fa-search-minus fa-4x text-muted mb-3"></i>
              <h4>**Oops!** No News Found for this Filter.</h4>
              <p className="text-muted">Try different keywords or select another category.</p>
            </div>
          ) : (
            <>
              <div className="row g-4">
                {filteredNews.map((news) => (
                  <div key={news.id} className="col-lg-4 col-md-6">
                    <div className="news-card card h-100 border-0">
                      <div className="news-image-wrapper">
                        <img
                          src={news.image}
                          className="card-img-top"
                          alt={news.headline}
                        />
                        <span className="category-badge">
                          {categories.find((c) => c.id === news.category)?.name}
                        </span>
                      </div>
                      <div className="card-body d-flex flex-column">
                        <div className="news-meta">
                          <span className="text-muted small">
                            <i className="far fa-calendar me-1"></i> {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="text-muted small ms-3">
                            <i className="far fa-clock me-1"></i> {news.readTime}
                          </span>
                        </div>

                        <h5 className="card-title mb-3">
                          <Link to={`/news/${news.id}`} className="text-dark text-decoration-none">
                            {news.headline}
                          </Link>
                        </h5>

                        <p className="card-text text-muted mb-3 article-excerpt">{news.excerpt}</p>

                        <div className="mt-auto pt-3 border-top">
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="author-name small text-muted fw-bold">
                              <i className="fas fa-user me-1 text-primary-custom"></i>
                              {news.author}
                            </span>
                            <Link to={`/news/${news.id}`} className="btn btn-primary-custom btn-sm rounded-pill">
                              Read More <i className="fas fa-chevron-right ms-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination (Improved UI) */}
              <div className="row mt-5">
                <div className="col-12">
                  <nav aria-label="News pagination">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex="-1">
                          <i className="fas fa-chevron-left"></i>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">1</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">2</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* 📧 Newsletter Section */}
      <section className="newsletter-section py-5">
        <div className="container">
          <div className="row align-items-center p-4 rounded-3" style={{color: '#fff' }}>
            <div className="col-lg-6 mb-3 mb-lg-0">
              <h3 className="mb-2 fw-bold">Get Daily News Updates</h3>
              <p className="text-white-50 mb-0">
                Subscribe to receive the latest education news in your inbox
              </p>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  style={{ borderRadius: '50px', padding: '12px 20px' }}
                />
                <button className="btn btn-accent-custom">
                  Subscribe <i className="fas fa-paper-plane ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}