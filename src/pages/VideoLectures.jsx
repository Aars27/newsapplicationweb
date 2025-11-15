import React, { useState } from 'react';

export default function VideoLectures() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  // Video Data
  const videos = [
    {
      id: 1,
      category: 'mathematics',
      title: 'Complete Calculus Tutorial - Class 12',
      duration: '45:23',
      views: '125K',
      uploadDate: '2 weeks ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Dr. Rajesh Kumar',
      level: 'Advanced',
      description: 'Master calculus concepts with detailed explanations'
    },
    {
      id: 2,
      category: 'physics',
      title: 'Newton\'s Laws of Motion Explained',
      duration: '32:15',
      views: '98K',
      uploadDate: '1 week ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Prof. Priya Sharma',
      level: 'Intermediate',
      description: 'Understanding fundamental physics principles'
    },
    {
      id: 3,
      category: 'chemistry',
      title: 'Organic Chemistry - Complete Guide',
      duration: '1:02:45',
      views: '215K',
      uploadDate: '3 days ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Dr. Amit Verma',
      level: 'Advanced',
      description: 'Comprehensive organic chemistry tutorial'
    },
    {
      id: 4,
      category: 'biology',
      title: 'Cell Biology - Quick Revision',
      duration: '2:45',
      views: '67K',
      uploadDate: '5 days ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Dr. Neha Singh',
      level: 'Beginner',
      isShort: true,
      description: 'Quick revision of cell structure'
    },
    {
      id: 5,
      category: 'english',
      title: 'English Grammar - Tenses Made Easy',
      duration: '28:30',
      views: '143K',
      uploadDate: '1 month ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Ms. Anita Desai',
      level: 'Beginner',
      description: 'Master English tenses with examples'
    },
    {
      id: 6,
      category: 'motivation',
      title: 'How to Stay Motivated During Exams',
      duration: '2:30',
      views: '245K',
      uploadDate: '2 weeks ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Sandeep Maheshwari',
      level: 'All',
      isShort: true,
      description: 'Motivational tips for exam success'
    },
    {
      id: 7,
      category: 'career',
      title: 'Career Options After Class 12th - Complete Guide',
      duration: '38:15',
      views: '189K',
      uploadDate: '1 week ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Career Counselor',
      level: 'All',
      description: 'Explore all career options after 12th'
    },
    {
      id: 8,
      category: 'mathematics',
      title: 'Trigonometry Tricks - Quick Methods',
      duration: '2:15',
      views: '76K',
      uploadDate: '4 days ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Math Guru',
      level: 'Intermediate',
      isShort: true,
      description: 'Learn quick trigonometry tricks'
    },
    {
      id: 9,
      category: 'physics',
      title: 'Electromagnetism - Complete Chapter',
      duration: '55:40',
      views: '112K',
      uploadDate: '2 weeks ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Physics Academy',
      level: 'Advanced',
      description: 'Complete electromagnetism explanation'
    },
    {
      id: 10,
      category: 'chemistry',
      title: 'Periodic Table - Memory Tricks',
      duration: '2:50',
      views: '198K',
      uploadDate: '1 week ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Chemistry Pro',
      level: 'Beginner',
      isShort: true,
      description: 'Easy memory tricks for periodic table'
    },
    {
      id: 11,
      category: 'motivation',
      title: 'Success Story - From Failure to IIT',
      duration: '2:40',
      views: '567K',
      uploadDate: '3 days ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Student Stories',
      level: 'All',
      isShort: true,
      description: 'Inspiring IIT success story'
    },
    {
      id: 12,
      category: 'career',
      title: 'Engineering vs Medical - Which to Choose?',
      duration: '42:20',
      views: '234K',
      uploadDate: '5 days ago',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      instructor: 'Career Guide India',
      level: 'All',
      description: 'Compare engineering and medical careers'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Videos', icon: 'fas fa-th-large', count: videos.length },
    { id: 'mathematics', name: 'Mathematics', icon: 'fas fa-calculator', count: videos.filter(v => v.category === 'mathematics').length },
    { id: 'physics', name: 'Physics', icon: 'fas fa-atom', count: videos.filter(v => v.category === 'physics').length },
    { id: 'chemistry', name: 'Chemistry', icon: 'fas fa-flask', count: videos.filter(v => v.category === 'chemistry').length },
    { id: 'biology', name: 'Biology', icon: 'fas fa-dna', count: videos.filter(v => v.category === 'biology').length },
    { id: 'english', name: 'English', icon: 'fas fa-book', count: videos.filter(v => v.category === 'english').length },
    { id: 'motivation', name: 'Motivation', icon: 'fas fa-fire', count: videos.filter(v => v.category === 'motivation').length },
    { id: 'career', name: 'Career Guidance', icon: 'fas fa-briefcase', count: videos.filter(v => v.category === 'career').length }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === 'all' || video.category === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const shortVideos = filteredVideos.filter(v => v.isShort);
  const regularVideos = filteredVideos.filter(v => !v.isShort);

  return (
    <main className="video-lectures-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="animated-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-play-circle"></i>
              <span>Video Learning Hub</span>
            </div>
            
            <h1 className="hero-title">
              Learn Smarter with
              <span className="highlight"> Expert Video Lectures</span>
            </h1>
            
            <p className="hero-description">
              Access thousands of free educational videos from top educators. 
              Watch, learn, and excel in your studies!
            </p>

            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-video"></i>
                </div>
                <div className="stat-info">
                  <h3>{videos.length}+</h3>
                  <p>Video Lectures</p>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="stat-info">
                  <h3>{shortVideos.length}</h3>
                  <p>Quick Shorts</p>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="stat-info">
                  <h3>500K+</h3>
                  <p>Students Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-wrapper">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search videos by topic, subject, or instructor..."
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

      {/* Category Tabs */}
      <section className="category-section">
        <div className="container">
          <div className="category-scroll">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <i className={cat.icon}></i>
                <span className="cat-name">{cat.name}</span>
                <span className="cat-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Short Videos Section */}
      {shortVideos.length > 0 && (
        <section className="shorts-section">
          <div className="container">
            <div className="section-header">
              <div className="header-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="header-content">
                <h2>Quick Explainers</h2>
                <p>{shortVideos.length} short videos • 2-3 minutes each</p>
              </div>
            </div>

            <div className="shorts-grid">
              {shortVideos.map(video => (
                <div key={video.id} className="short-card">
                  <div className="short-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="short-overlay">
                      <div className="play-button">
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                    <span className="short-badge">
                      <i className="fas fa-bolt"></i> SHORT
                    </span>
                    <span className="duration-badge">{video.duration}</span>
                  </div>
                  <div className="short-info">
                    <h4 className="short-title">{video.title}</h4>
                    <div className="short-meta">
                      <span className="views">
                        <i className="fas fa-eye"></i> {video.views}
                      </span>
                      <span className="level-tag">{video.level}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Videos Section */}
      <section className="videos-section">
        <div className="container">
          <div className="videos-header">
            <div>
              <h2>Complete Video Lectures</h2>
              <p>{regularVideos.length} comprehensive lectures available</p>
            </div>
            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <i className="fas fa-th-large"></i>
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
          </div>

          {regularVideos.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">
                <i className="fas fa-video-slash"></i>
              </div>
              <h3>No videos found</h3>
              <p>Try adjusting your search or category filter</p>
              <button className="reset-btn" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                <i className="fas fa-redo"></i> Reset Filters
              </button>
            </div>
          ) : (
            <div className={`videos-grid ${viewMode}`}>
              {regularVideos.map(video => (
                <div key={video.id} className="video-card">
                  <div className="video-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="video-overlay">
                      <div className="play-button-large">
                        <i className="fas fa-play-circle"></i>
                      </div>
                    </div>
                    <span className="duration-badge-large">{video.duration}</span>
                    <span className="category-badge">
                      {categories.find(c => c.id === video.category)?.name}
                    </span>
                  </div>
                  
                  <div className="video-details">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-description">{video.description}</p>
                    
                    <div className="instructor-section">
                      <div className="instructor-avatar">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div className="instructor-info">
                        <p className="instructor-name">{video.instructor}</p>
                        <p className="video-meta">
                          <span><i className="fas fa-eye"></i> {video.views}</span>
                          <span className="dot">•</span>
                          <span><i className="far fa-clock"></i> {video.uploadDate}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="video-footer">
                      <span className={`level-badge ${video.level.toLowerCase()}`}>
                        {video.level}
                      </span>
                      <button className="watch-btn">
                        <i className="fab fa-youtube"></i>
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Motivation CTA */}
      <section className="motivation-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h2>Need Motivation?</h2>
            <p>Watch inspiring success stories and stay motivated on your journey to success</p>
            <button 
              className="cta-btn"
              onClick={() => setActiveCategory('motivation')}
            >
              <i className="fas fa-fire"></i>
              Watch Motivational Videos
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .video-lectures-page {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .animated-shapes {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -100px;
          animation: float 20s ease-in-out infinite;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          bottom: -50px;
          left: 10%;
          animation: float 15s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 200px;
          height: 200px;
          top: 50%;
          left: -50px;
          animation: float 25s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 20px;
          border-radius: 50px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hero-title {
          font-size: 56px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-title .highlight {
          background: linear-gradient(90deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 50px;
          line-height: 1.6;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 800px;
          margin: 0 auto;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.15);
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-5px);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #fff;
        }

        .stat-info h3 {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 5px;
        }

        .stat-info p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        /* Search Section */
        .search-section {
          padding: 40px 0;
          background: #fff;
          margin-top: -30px;
          position: relative;
          z-index: 2;
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

        /* Category Section */
        .category-section {
          padding: 30px 0;
          background: #fff;
        }

        .category-scroll {
          display: flex;
          gap: 15px;
          overflow-x: auto;
          padding-bottom: 10px;
          scrollbar-width: thin;
          scrollbar-color: #6F61C1 #f1f3f5;
        }

        .category-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .category-scroll::-webkit-scrollbar-track {
          background: #f1f3f5;
          border-radius: 10px;
        }

        .category-scroll::-webkit-scrollbar-thumb {
          background: #6F61C1;
          border-radius: 10px;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 25px;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          color: #495057;
          font-size: 14px;
        }

        .category-btn i {
          font-size: 16px;
        }

        .cat-count {
          background: rgba(111, 97, 193, 0.1);
          color: #6F61C1;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
        }

        .category-btn:hover {
          border-color: #6F61C1;
          background: rgba(111, 97, 193, 0.05);
          color: #6F61C1;
        }

        .category-btn.active {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          border-color: #6F61C1;
          color: #fff;
        }

        .category-btn.active .cat-count {
          background: rgba(255, 255, 255, 0.3);
          color: #fff;
        }

        /* Shorts Section */
        .shorts-section {
          padding: 60px 0;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .header-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: #fff;
        }

        .header-content h2 {
          font-size: 32px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 5px;
        }

        .header-content p {
          font-size: 14px;
          color: #636e72;
        }

        .shorts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 25px;
        }

        .short-card {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .short-card:hover {
          transform: translateY(-8px);
        }

        .short-thumbnail {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          height: 350px;
          background: #000;
        }

        .short-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .short-card:hover .short-thumbnail img {
          opacity: 0.8;
          transform: scale(1.05);
        }

        .short-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .short-card:hover .short-overlay {
          opacity: 1;
        }

        .play-button {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #6F61C1;
          transition: all 0.3s ease;
        }

        .short-card:hover .play-button {
          transform: scale(1.1);
        }

        .play-button i {
          margin-left: 3px;
        }

        .short-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #fff;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .duration-badge {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: rgba(0, 0, 0, 0.85);
          color: #fff;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .short-info {
          padding: 15px 5px;
        }

        .short-title {
          font-size: 15px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 10px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .short-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .views {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 13px;
          color: #636e72;
        }

        .level-tag {
          background: #f1f3f5;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          color: #495057;
        }

        /* Videos Section */
        .videos-section {
          padding: 60px 0;
          background: #fff;
        }

        .videos-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .videos-header h2 {
          font-size: 32px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 5px;
        }

        .videos-header p {
          font-size: 14px;
          color: #636e72;
        }

        .view-toggle {
          display: flex;
          gap: 10px;
        }

        .view-btn {
          width: 40px;
          height: 40px;
          border: 2px solid #e9ecef;
          background: #fff;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #495057;
          transition: all 0.3s ease;
        }

        .view-btn:hover {
          border-color: #6F61C1;
          color: #6F61C1;
        }

        .view-btn.active {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          border-color: #6F61C1;
          color: #fff;
        }

        .videos-grid {
          display: grid;
          gap: 30px;
        }

        .videos-grid.grid {
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
        }

        .videos-grid.list {
          grid-template-columns: 1fr;
        }

        .video-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          display: flex;
        }

        .videos-grid.grid .video-card {
          flex-direction: column;
        }

        .videos-grid.list .video-card {
          flex-direction: row;
        }

        .video-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .video-thumbnail {
          position: relative;
          overflow: hidden;
          background: #000;
        }

        .videos-grid.grid .video-thumbnail {
          height: 240px;
        }

        .videos-grid.list .video-thumbnail {
          width: 320px;
          height: 220px;
          flex-shrink: 0;
        }

        .video-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .video-card:hover .video-thumbnail img {
          transform: scale(1.1);
          opacity: 0.8;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(111, 97, 193, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .video-card:hover .video-overlay {
          opacity: 1;
        }

        .play-button-large {
          font-size: 64px;
          color: #fff;
          transition: all 0.3s ease;
        }

        .video-card:hover .play-button-large {
          transform: scale(1.1);
        }

        .duration-badge-large {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: rgba(0, 0, 0, 0.9);
          color: #fff;
          padding: 8px 15px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .category-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          color: #fff;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .video-details {
          padding: 25px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          flex: 1;
        }

        .video-title {
          font-size: 18px;
          font-weight: 700;
          color: #2d3436;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .video-description {
          font-size: 14px;
          color: #636e72;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .instructor-section {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .instructor-avatar {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 45px;
          color: #6F61C1;
          flex-shrink: 0;
        }

        .instructor-name {
          font-size: 14px;
          font-weight: 600;
          color: #2d3436;
          margin-bottom: 5px;
        }

        .video-meta {
          font-size: 13px;
          color: #636e72;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dot {
          opacity: 0.5;
        }

        .video-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid #e9ecef;
          margin-top: auto;
        }

        .level-badge {
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .level-badge.beginner {
          background: #e8f5e9;
          color: #4caf50;
        }

        .level-badge.intermediate {
          background: #fff3cd;
          color: #f57c00;
        }

        .level-badge.advanced {
          background: #ffebee;
          color: #d32f2f;
        }

        .level-badge.all {
          background: #e3f2fd;
          color: #1976d2;
        }

        .watch-btn {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .watch-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(111, 97, 193, 0.3);
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

        /* Motivation CTA */
        .motivation-cta {
          padding: 80px 0;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          position: relative;
          overflow: hidden;
        }

        .motivation-cta::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .motivation-cta::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta-icon {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          font-size: 48px;
          color: #fff;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .cta-content h2 {
          font-size: 40px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 15px;
        }

        .cta-content p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 35px;
          line-height: 1.6;
        }

        .cta-btn {
          background: #fff;
          color: #FFA500;
          border: none;
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
        }

        .cta-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .videos-grid.grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 42px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }

          .shorts-grid {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          }

          .videos-grid.list .video-card {
            flex-direction: column;
          }

          .videos-grid.list .video-thumbnail {
            width: 100%;
            height: 240px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 0 60px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-description {
            font-size: 16px;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .videos-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .videos-grid.grid {
            grid-template-columns: 1fr;
          }

          .shorts-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }

          .short-thumbnail {
            height: 280px;
          }

          .cta-content h2 {
            font-size: 32px;
          }

          .cta-content p {
            font-size: 16px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 28px;
          }

          .search-wrapper input {
            padding: 15px 50px;
            font-size: 14px;
          }

          .category-btn {
            font-size: 13px;
            padding: 10px 18px;
          }

          .cat-name {
            display: none;
          }

          .shorts-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }

          .short-thumbnail {
            height: 300px;
            border-radius: 15px;
          }

          .header-icon {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }

          .header-content h2 {
            font-size: 24px;
          }

          .videos-header h2 {
            font-size: 24px;
          }

          .cta-icon {
            width: 80px;
            height: 80px;
            font-size: 36px;
          }

          .cta-content h2 {
            font-size: 26px;
          }

          .cta-btn {
            padding: 14px 30px;
            font-size: 15px;
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

        .video-card,
        .short-card {
          animation: fadeInUp 0.6s ease-out;
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Selection Color */
        ::selection {
          background: #6F61C1;
          color: #fff;
        }
      `}</style>
    </main>
  );
}