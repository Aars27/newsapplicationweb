import React from 'react';
import { Link } from 'react-router-dom';

const PRIMARY_COLOR = '#6F61C1'; // गहरा बैंगनी/नीला
const ACCENT_COLOR = '#FFC107'; // नारंगी हाईलाइट

// --- Component for a single news item (reusable) ---
const NewsItem = ({ title, category, date, to, image, isFeatured = false }) => (
    <div className={`card mb-3 news-item ${isFeatured ? 'featured-card' : 'shadow-sm'}`}>
        <div className="row g-0">
            {/* Image Column (Visible for all, larger for featured) */}
            <div className={`${isFeatured ? 'col-md-7' : 'col-md-4'}`}>
                <img 
                    src={image || "assets/img/news/default.jpg"} 
                    className="img-fluid rounded-start news-img" 
                    alt={title}
                    style={{ height: isFeatured ? '300px' : '100%', minHeight: '120px', objectFit: 'cover' }}
                />
            </div>
            {/* Content Column */}
            <div className={`${isFeatured ? 'col-md-5' : 'col-md-8'}`}>
                <div className="card-body p-3">
                    <span className="badge badge-accent-custom mb-2 small fw-bold">{category}</span>
                    <h5 className={`card-title ${isFeatured ? 'fw-bold fs-4' : 'fw-semibold fs-6'} text-primary-custom mb-1`}>
                        <Link to={to} className="text-decoration-none text-primary-custom hover-link">{title}</Link>
                    </h5>
                    <p className="card-text small text-muted">
                        <i className="far fa-clock me-1"></i> {date}
                    </p>
                    {isFeatured && (
                        <p className="card-text mt-3 d-none d-md-block">
                            <small>Detailed analysis on the latest policy changes and their impact on students...</small>
                        </p>
                    )}
                </div>
            </div>
        </div>
    </div>
);

// --- Component for Sidebar Trending List ---
const TrendingSidebar = ({ trendingNews }) => (
    <div className="sidebar-block p-4 bg-white shadow-sm rounded">
        <h4 className="border-bottom pb-2 mb-3 fw-bold text-accent-custom">
            <i className="fas fa-fire-alt me-2 text-danger"></i> Trending
        </h4>
        <ul className="list-unstyled">
            {trendingNews.map((item, index) => (
                <li key={index} className="mb-3 pb-2 border-bottom">
                    <h6 className="fw-semibold small lh-base">
                        <Link to={item.to} className="text-decoration-none text-dark hover-link">{item.title}</Link>
                    </h6>
                    <small className="text-muted">{item.date}</small>
                </li>
            ))}
        </ul>
        <Link to="/trending" className="btn btn-outline-primary-custom btn-sm w-100 mt-2">View All Hot Topics</Link>
    </div>
);


export default function Home() {

    // Placeholder Data for News Blocks
    const trendingNews = [
        { title: "UPSC Prelims 2025: Exam pattern revised", date: "Oct 28, 2025", to: "/news/upsc-2025" },
        { title: "Top 10 AI Courses for 2026 Graduates", date: "Oct 27, 2025", to: "/news/ai-courses" },
        { title: "NEET Counselling process simplified by NTA", date: "Oct 26, 2025", to: "/news/neet-counselling" },
        { title: "Government announces new internship programs", date: "Oct 25, 2025", to: "/news/govt-internship" },
        { title: "Financial aid for female students in tech field", date: "Oct 24, 2025", to: "/news/financial-aid" },
    ];

    const educationNews = [
        { title: "New policy focuses on skill-based learning", category: "Policy", date: "Nov 14, 2025", to: "/news/new-skill-policy", image: "assets/img/news/edu1.jpg" },
        { title: "Delhi schools to implement blended learning model", category: "Local News", date: "Nov 12, 2025", to: "/news/delhi-schools", image: "assets/img/news/edu2.jpg" },
        { title: "Impact of technology on student enrollment", category: "Analysis", date: "Nov 11, 2025", to: "/news/tech-impact", image: "assets/img/news/edu3.jpg" },
        { title: "Global ranking of Indian Universities improved", category: "Rankings", date: "Nov 10, 2025", to: "/news/global-ranking", image: "assets/img/news/edu4.jpg" },
    ];

    const examNews = [
        { title: "JEE Mains 2026 Registration Date Extended", category: "Alert", date: "Nov 15, 2025", to: "/news/jee-extension", image: "assets/img/news/exam1.jpg" },
        { title: "CBSE board practical exams schedule announced", category: "CBSE", date: "Nov 13, 2025", to: "/news/cbse-schedule", image: "assets/img/news/exam2.jpg" },
        { title: "GATE 2026 cut-offs expected to rise this year", category: "Analysis", date: "Nov 9, 2025", to: "/news/gate-cutoffs", image: "assets/img/news/exam3.jpg" },
        { title: "SSC notification released: 10,000 vacancies", category: "Govt Jobs", date: "Nov 8, 2025", to: "/news/ssc-vacancies", image: "assets/img/news/exam4.jpg" },
    ];
    
    return (
        <main className="news-portal-page">
            <style jsx global>{`
                /* Global Theme Styles */
                .text-primary-custom { color: ${PRIMARY_COLOR} !important; }
                .text-accent-custom { color: ${ACCENT_COLOR} !important; }
                .bg-primary-custom { background-color: ${PRIMARY_COLOR} !important; }
                .badge-accent-custom { background-color: ${ACCENT_COLOR} !important; color: ${PRIMARY_COLOR} !important; }
                .btn-primary-custom {
                  background-color: ${PRIMARY_COLOR};
                  border-color: ${PRIMARY_COLOR};
                  color: #fff;
                  transition: background-color 0.3s ease;
                }
                .btn-primary-custom:hover {
                  background-color: #5d4e9c;
                  border-color: #5d4e9c;
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

                /* News Specific Styles */
                .news-item {
                    border: 1px solid #eee;
                    transition: box-shadow 0.3s ease;
                    background: #fff;
                }
                .news-item:hover {
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08) !important;
                }
                .hover-link:hover {
                    color: ${ACCENT_COLOR} !important; /* Headline hover effect */
                }
                .section-header {
                    border-left: 5px solid ${ACCENT_COLOR};
                    padding-left: 15px;
                    margin-bottom: 25px;
                }
                .featured-card {
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                    border: none;
                }
            `}</style>

            {/* 📰 Top News Banner (Kept) */}
            <section className="top-news-banner shadow-sm">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 text-center text-md-start mb-2 mb-md-0">
                            <span className="badge bg-danger p-2 rounded-pill fw-bold">🔥 LIVE NEWS</span>
                        </div>
                        <div className="col-md-9 text-center text-md-start">
                            <p className="mb-0 small d-flex align-items-center justify-content-center justify-content-md-start text-white">
                                <i className="fas fa-bullhorn me-2 text-accent-custom"></i> 
                                **Govt. Job Alert:** 1500+ vacancies announced for Central Sector. 
                                <Link to="/latest-jobs" className="ms-2">Check Details <i className="fas fa-arrow-right ms-1"></i></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🌍 Main News Feed Section */}
            <section className="main-news-feed py-5" style={{ backgroundColor: '#f8f6fb' }}>
                <div className="container">
                    <div className="row g-5">
                        
                        {/* ------------------ Left Column: Main News Area (col-lg-8) ------------------ */}
                        <div className="col-lg-8">
                            
                            {/* 🥇 Featured Top Story (The biggest news item) */}
                            <div className="section-header">
                                <h2 className="fw-bold text-primary-custom mb-0">Top Story</h2>
                            </div>
                            <NewsItem
                                title="Revolutionary Shift: NEP Implementation in Higher Education Kicks Off"
                                category="National"
                                date="November 15, 2025"
                                to="/news/nep-kickoff"
                                image="assets/img/news/main-feature.jpg"
                                isFeatured={true}
                            />
                            
                            <hr className="my-5" />

                            {/* 📚 Education News Block */}
                            <div className="section-header">
                                <h3 className="fw-bold text-primary-custom mb-0">Education News</h3>
                            </div>
                            <div className="row g-4">
                                {educationNews.map((item, index) => (
                                    <div className="col-md-6" key={`edu-${index}`}>
                                        <NewsItem {...item} />
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-4">
                                <Link to="/category/education" className="btn btn-outline-primary-custom">
                                    More Education News
                                </Link>
                            </div>
                        </div>

                        {/* ------------------ Right Column: Sidebar (col-lg-4) ------------------ */}
                        <div className="col-lg-4">
                            
                            {/* 🔥 Trending News Sidebar */}
                            <TrendingSidebar trendingNews={trendingNews} />

                            {/* 📢 Advertisement / Notice */}
                            <div className="ad-block mt-5 text-center p-4 bg-white shadow-sm rounded">
                                <h5 className="fw-bold text-danger">ADVERTISEMENT</h5>
                                <div style={{ height: '250px', backgroundColor: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6c757d' }}>
                                    Your Coaching Ad Goes Here
                                </div>
                                <small className="text-muted mt-2 d-block">Contact us for ad placement.</small>
                            </div>
                            
                            {/* 💡 Quick Links (Re-styled as news blocks) */}
                            <div className="sidebar-block p-4 mt-5 bg-white shadow-sm rounded">
                                <h4 className="border-bottom pb-2 mb-3 fw-bold text-primary-custom">Quick Links</h4>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><Link to="/exams" className="text-dark hover-link fw-semibold"><i className="fas fa-search me-2 text-accent-custom"></i> Exam Dates & Results</Link></li>
                                    <li className="mb-2"><Link to="/syllabus" className="text-dark hover-link fw-semibold"><i className="fas fa-clipboard-list me-2 text-accent-custom"></i> Download Syllabus</Link></li>
                                    <li className="mb-2"><Link to="/careers" className="text-dark hover-link fw-semibold"><i className="fas fa-briefcase me-2 text-accent-custom"></i> Career Counselling</Link></li>
                                    <li className="mb-2"><Link to="/contact" className="text-dark hover-link fw-semibold"><i className="fas fa-headset me-2 text-accent-custom"></i> Ask An Expert</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            
            {/* 📅 Competitive Exams News Block (Full Width) */}
            <section className="category-news-exams py-5">
                <div className="container">
                    <div className="section-header">
                        <h3 className="fw-bold text-primary-custom mb-0">Competitive Exams</h3>
                    </div>
                    <div className="row g-4">
                        {examNews.map((item, index) => (
                            <div className="col-lg-3 col-md-6" key={`exam-${index}`}>
                                <div className="card h-100 shadow-sm news-item">
                                    <img 
                                        src={item.image || "assets/img/news/school-news1.jpg"} 
                                    
                                        className="card-img-top" 
                                        alt={item.title}
                                        style={{ height: '180px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body p-3">
                                        <span className="badge bg-secondary mb-2 small fw-bold">{item.category}</span>
                                        <h6 className="card-title fw-semibold mb-1">
                                            <Link to={item.to} className="text-decoration-none text-dark hover-link">{item.title}</Link>
                                        </h6>
                                        <p className="card-text small text-muted"><i className="far fa-clock me-1"></i> {item.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/category/exams" className="btn btn-primary-custom btn-lg">
                            Explore All Exam News
                        </Link>
                    </div>
                </div>
            </section>
            
        </main>
    );
}