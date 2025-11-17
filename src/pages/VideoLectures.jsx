import { useState } from 'react';

export default function VideoLectures() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const videos = [
    {
      id: 1,
      category: 'mathematics',
      title: 'Complete Calculus Tutorial - Class 12: Differentiation & Integration',
      duration: '45:23',
      views: '125K',
      uploadDate: '2 weeks ago',
      thumbnail: '🔢',
      instructor: 'Dr. Rajesh Kumar',
      level: 'Advanced',
      description: 'Master calculus concepts with detailed explanations of differentiation, integration, and differential equations.',
      isBreaking: true,
    },
    {
      id: 2,
      category: 'physics',
      title: "Newton's Laws of Motion Explained: Fundamentals of Classical Mechanics",
      duration: '32:15',
      views: '98K',
      uploadDate: '1 week ago',
      thumbnail: '⚛️',
      instructor: 'Prof. Priya Sharma',
      level: 'Intermediate',
      description: 'Understanding fundamental physics principles covering inertia, force, and action-reaction.',
    },
    {
      id: 3,
      category: 'chemistry',
      title: 'Organic Chemistry - Complete Guide to Reactions and Mechanisms',
      duration: '1:02:45',
      views: '215K',
      uploadDate: '3 days ago',
      thumbnail: '🧪',
      instructor: 'Dr. Amit Verma',
      level: 'Advanced',
      description: 'Comprehensive organic chemistry tutorial covering nomenclature, reactions, and mechanisms.',
      isTrending: true,
    },
    {
      id: 4,
      category: 'biology',
      title: 'Cell Biology - Quick Revision of Structure and Organelles',
      duration: '15:45',
      views: '67K',
      uploadDate: '5 days ago',
      thumbnail: '🧬',
      instructor: 'Dr. Neha Singh',
      level: 'Beginner',
      description: 'Quick revision of cell structure, organelles, and basic functions for exam preparation.',
    },
    {
      id: 5,
      category: 'english',
      title: 'English Grammar - Tenses Made Easy: Simple, Continuous, Perfect',
      duration: '28:30',
      views: '143K',
      uploadDate: '1 month ago',
      thumbnail: '📚',
      instructor: 'Ms. Anita Desai',
      level: 'Beginner',
      description: 'Master English tenses with simple rules, examples, and practice questions.',
    },
    {
      id: 6,
      category: 'motivation',
      title: 'Exam Motivation: How to Stay Focused and Beat Procrastination',
      duration: '12:30',
      views: '245K',
      uploadDate: '2 weeks ago',
      thumbnail: '🔥',
      instructor: 'Sandeep Maheshwari',
      level: 'All',
      description: 'Motivational tips for maintaining focus, reducing stress, and achieving exam success.',
      isTrending: true,
    },
    {
      id: 7,
      category: 'career',
      title: 'Career Options After Class 12th - The Complete Guidance Report',
      duration: '38:15',
      views: '189K',
      uploadDate: '1 week ago',
      thumbnail: '💼',
      instructor: 'Career Counselor',
      level: 'All',
      description: 'Explore all career options after 12th grade across science, commerce, and arts streams.',
    },
    {
      id: 8,
      category: 'mathematics',
      title: 'Trigonometry Tricks - Quick Methods for Competitive Exams',
      duration: '18:15',
      views: '76K',
      uploadDate: '4 days ago',
      thumbnail: '📐',
      instructor: 'Math Guru',
      level: 'Intermediate',
      description: 'Learn quick trigonometry tricks and shortcuts for competitive exams.',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Videos', icon: 'fas fa-th-large', count: videos.length },
    { id: 'mathematics', name: 'Mathematics', icon: 'fas fa-calculator', count: videos.filter(v => v.category === 'mathematics').length },
    { id: 'physics', name: 'Physics', icon: 'fas fa-atom', count: videos.filter(v => v.category === 'physics').length },
    { id: 'chemistry', name: 'Chemistry', icon: 'fas fa-flask', count: videos.filter(v => v.category === 'chemistry').length },
    { id: 'biology', name: 'Biology', icon: 'fas fa-dna', count: videos.filter(v => v.category === 'biology').length },
    { id: 'english', name: 'English', icon: 'fas fa-book', count: videos.filter(v => v.category === 'english').length },
    { id: 'motivation', name: 'Motivation', icon: 'fas fa-fire', count: videos.filter(v => v.category === 'motivation').length },
    { id: 'career', name: 'Career', icon: 'fas fa-briefcase', count: videos.filter(v => v.category === 'career').length },
  ];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === 'all' || video.category === activeCategory;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredVideo = filteredVideos[0];
  const trendingVideos = filteredVideos.filter(v => v.isTrending).slice(0, 3);
  const regularVideos = filteredVideos.slice(1);

  return (
    <div className="video-lectures">
      {/* Header Section */}
      <section className="header-section">
        <div className="container">
          <div className="header-content">
            <h1>Video Lectures</h1>
            <p>Learn from expert educators with comprehensive video tutorials</p>
          </div>
          
          <div className="search-wrapper">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search lectures, topics, instructors..."
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
                onClick={() => setActiveCategory(cat.id)}
                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                <i className={cat.icon}></i>
                <span>{cat.name}</span>
                <span className="count">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container main-content">
        <div className="content-grid">
          
          {/* Left Column - Videos */}
          <div className="videos-column">
            
            {/* Featured Video */}
            {featuredVideo && (
              <article className="featured-video-card">
                {featuredVideo.isBreaking && (
                  <div className="breaking-badge">
                    <i className="fas fa-bolt"></i> NEW UPLOAD
                  </div>
                )}
                <div className="video-thumbnail featured">
                  <div className="emoji-thumb">{featuredVideo.thumbnail}</div>
                  <div className="play-overlay">
                    <div className="play-button">
                      <i className="fas fa-play"></i>
                    </div>
                  </div>
                  <div className="duration-badge">{featuredVideo.duration}</div>
                </div>
                
                <div className="video-content">
                  <div className="meta-row">
                    <span className="category-tag">
                      {categories.find(c => c.id === featuredVideo.category)?.name}
                    </span>
                    <span className="upload-date">
                      <i className="far fa-clock"></i> {featuredVideo.uploadDate}
                    </span>
                  </div>
                  
                  <h2 className="video-title">{featuredVideo.title}</h2>
                  <p className="video-description">{featuredVideo.description}</p>
                  
                  <div className="video-footer">
                    <div className="instructor-info">
                      <div className="instructor-avatar">
                        {featuredVideo.instructor.charAt(0)}
                      </div>
                      <div className="instructor-details">
                        <span className="instructor-name">{featuredVideo.instructor}</span>
                        <span className="level-badge">{featuredVideo.level} Level</span>
                      </div>
                    </div>
                    <div className="video-stats">
                      <span className="views">
                        <i className="fas fa-eye"></i> {featuredVideo.views}
                      </span>
                      <button className="bookmark-btn">
                        <i className="far fa-bookmark"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Regular Videos */}
            <div className="videos-list">
              {regularVideos.map(video => (
                <article key={video.id} className="video-card">
                  <div className="video-thumbnail">
                    <div className="emoji-thumb">{video.thumbnail}</div>
                    <div className="play-overlay">
                      <div className="play-button-sm">
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                    {video.isTrending && (
                      <div className="trending-badge">
                        <i className="fas fa-fire"></i> TRENDING
                      </div>
                    )}
                    <div className="duration-badge">{video.duration}</div>
                  </div>

                  <div className="video-content">
                    <div className="meta-row">
                      <span className="category-tag">
                        {categories.find(c => c.id === video.category)?.name}
                      </span>
                      <span className="upload-date">{video.uploadDate}</span>
                    </div>
                    
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-description">{video.description}</p>
                    
                    <div className="video-footer">
                      <div className="instructor-info">
                        <span className="instructor-name">{video.instructor}</span>
                      </div>
                      <div className="video-stats">
                        <span className="views">
                          <i className="fas fa-eye"></i> {video.views}
                        </span>
                        <button className="bookmark-btn">
                          <i className="far fa-bookmark"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="sidebar-column">
            
            {/* Trending Videos */}
            <div className="sidebar-card">
              <div className="sidebar-header">
                <i className="fas fa-fire"></i>
                <h3>Trending Now</h3>
              </div>
              
              <div className="trending-list">
                {trendingVideos.map((video, index) => (
                  <div key={video.id} className="trending-item">
                    <div className="trending-rank">{index + 1}</div>
                    <div className="trending-content">
                      <h4>{video.title}</h4>
                      <div className="trending-meta">
                        <span><i className="fas fa-eye"></i> {video.views}</span>
                        <span>•</span>
                        <span>{video.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Popular Topics */}
              <div className="popular-topics">
                <h4>Popular Topics</h4>
                <div className="topics-grid">
                  {['Calculus', 'Physics', 'JEE', 'NEET', 'Board Exams', 'Career'].map(tag => (
                    <span key={tag} className="topic-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="newsletter-card">
              <i className="fas fa-bell"></i>
              <h3>Get Notified</h3>
              <p>Subscribe for daily video updates and study tips</p>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .video-lectures {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 15px;
        }

        /* Header Section */
        .header-section {
          background: #fff;
          padding: 40px 0;
          border-bottom: 1px solid #e9ecef;
        }

        .header-content {
          text-align: center;
          margin-bottom: 30px;
        }

        .header-content h1 {
          font-size: 36px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 10px;
        }

        .header-content p {
          font-size: 16px;
          color: #636e72;
        }

        .search-wrapper {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .search-wrapper i {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #667eea;
          font-size: 16px;
        }

        .search-wrapper input {
          width: 100%;
          padding: 14px 50px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 15px;
          outline: none;
          transition: all 0.3s ease;
        }

        .search-wrapper input:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .clear-btn {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border: none;
          background: #f1f3f5;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          transition: all 0.3s ease;
        }

        .clear-btn:hover {
          background: #e9ecef;
        }

        /* Category Section */
        .category-section {
          background: #fff;
          padding: 30px 0;
          border-bottom: 1px solid #e9ecef;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .category-scroll {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 10px;
        }

        .category-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .category-scroll::-webkit-scrollbar-track {
          background: #f1f3f5;
          border-radius: 10px;
        }

        .category-scroll::-webkit-scrollbar-thumb {
          background: #667eea;
          border-radius: 10px;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #f8f9fa;
          border: 2px solid #e9ecef;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 500;
          color: #495057;
        }

        .category-btn:hover {
          background: rgba(102, 126, 234, 0.05);
          border-color: #667eea;
          color: #667eea;
        }

        .category-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: #667eea;
          color: #fff;
        }

        .category-btn .count {
          font-size: 12px;
          opacity: 0.8;
        }

        /* Main Content */
        .main-content {
          padding: 40px 15px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 40px;
        }

        .videos-column {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        /* Featured Video */
        .featured-video-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          position: relative;
          border: 2px solid transparent;
        }

        .featured-video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border-color: #667eea;
        }

        .breaking-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
          color: #fff;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 10;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .video-thumbnail {
          position: relative;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          padding: 60px;
          text-align: center;
          cursor: pointer;
        }

        .video-thumbnail.featured {
          padding: 100px;
        }

        .emoji-thumb {
          font-size: 120px;
        }

        .video-thumbnail:not(.featured) .emoji-thumb {
          font-size: 80px;
        }

        .play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0);
          transition: all 0.3s ease;
        }

        .video-card:hover .play-overlay,
        .featured-video-card:hover .play-overlay {
          background: rgba(0, 0, 0, 0.4);
        }

        .play-button {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          font-size: 28px;
          transform: scale(0.8);
          opacity: 0;
          transition: all 0.3s ease;
          padding-left: 5px;
        }

        .featured-video-card:hover .play-button {
          transform: scale(1);
          opacity: 1;
        }

        .play-button-sm {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          font-size: 20px;
          transform: scale(0.8);
          opacity: 0;
          transition: all 0.3s ease;
          padding-left: 4px;
        }

        .video-card:hover .play-button-sm {
          transform: scale(1);
          opacity: 1;
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
        }

        .trending-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: linear-gradient(135deg, #ff6b6b, #ffa500);
          color: #fff;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .video-content {
          padding: 25px;
        }

        .meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .category-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 11px;
          font-weight: 600;
        }

        .upload-date {
          font-size: 12px;
          color: #636e72;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .video-title {
          font-size: 22px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 12px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .featured-video-card .video-title {
          font-size: 26px;
        }

        .video-description {
          font-size: 14px;
          color: #636e72;
          line-height: 1.6;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .video-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }

        .instructor-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .instructor-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 600;
          font-size: 16px;
        }

        .instructor-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .instructor-name {
          font-size: 14px;
          font-weight: 600;
          color: #2d3436;
        }

        .level-badge {
          font-size: 11px;
          color: #636e72;
        }

        .video-stats {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .views {
          font-size: 13px;
          color: #636e72;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .bookmark-btn {
          background: transparent;
          border: none;
          color: #636e72;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .bookmark-btn:hover {
          color: #667eea;
        }

        /* Videos List */
        .videos-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .video-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          display: flex;
          gap: 20px;
          border: 2px solid transparent;
        }

        .video-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: #667eea;
        }

        .video-card .video-thumbnail {
          width: 280px;
          flex-shrink: 0;
          padding: 40px;
        }

        .video-card .video-content {
          flex: 1;
          padding: 20px 20px 20px 0;
        }

        .video-card .video-title {
          font-size: 18px;
        }

        /* Sidebar */
        .sidebar-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .sidebar-card {
          background: #fff;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          position: sticky;
          top: 120px;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #e9ecef;
        }

        .sidebar-header i {
          color: #ff6b6b;
          font-size: 20px;
        }

        .sidebar-header h3 {
          font-size: 18px;
          font-weight: 700;
          color: #2d3436;
        }

        .trending-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .trending-item {
          display: flex;
          gap: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .trending-item:hover {
          transform: translateX(5px);
        }

        .trending-rank {
          font-size: 24px;
          font-weight: 700;
          color: #e9ecef;
          width: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .trending-item:hover .trending-rank {
          color: #667eea;
        }

        .trending-content {
          flex: 1;
        }

        .trending-content h4 {
          font-size: 14px;
          font-weight: 600;
          color: #2d3436;
          margin-bottom: 5px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .trending-item:hover .trending-content h4 {
          color: #667eea;
        }

        .trending-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: #636e72;
        }

        .popular-topics {
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }

        .popular-topics h4 {
          font-size: 14px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 15px;
        }

        .topics-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .topic-tag {
          background: #f8f9fa;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 12px;
          color: #495057;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .topic-tag:hover {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
        }

        /* Newsletter */
        .newsletter-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .newsletter-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .newsletter-card i {
          font-size: 40px;
          margin-bottom: 15px;
          position: relative;
          z-index: 1;
        }

        .newsletter-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .newsletter-card p {
          font-size: 14px;
          opacity: 0.9;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .newsletter-card input {
          width: 100%;
          padding: 12px 18px;
          border: none;
          border-radius: 12px;
          font-size: 14px;
          outline: none;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .newsletter-card button {
          width: 100%;
          background: #fff;
          color: #667eea;
          border: none;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          position: relative;
          z-index: 1;
        }

        .newsletter-card button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .content-grid {
            grid-template-columns: 1fr 300px;
            gap: 30px;
          }
        }

        @media (max-width: 992px) {
          .content-grid {
            grid-template-columns: 1fr;
          }

          .sidebar-column {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .sidebar-card {
            position: static;
          }

          .video-card {
            flex-direction: column;
          }

          .video-card .video-thumbnail {
            width: 100%;
            padding: 60px;
          }

          .video-card .video-content {
            padding: 20px;
          }
        }

        @media (max-width: 768px) {
          .header-section {
            padding: 30px 0;
          }

          .header-content h1 {
            font-size: 28px;
          }

          .header-content p {
            font-size: 14px;
          }

          .category-section {
            padding: 20px 0;
          }

          .main-content {
            padding: 30px 15px;
          }

          .sidebar-column {
            grid-template-columns: 1fr;
          }

          .featured-video-card .video-title {
            font-size: 22px;
          }

          .video-thumbnail.featured {
            padding: 60px;
          }

          .emoji-thumb {
            font-size: 80px;
          }
        }

        @media (max-width: 576px) {
          .search-wrapper input {
            padding: 12px 45px;
            font-size: 14px;
          }

          .category-btn {
            padding: 8px 16px;
            font-size: 13px;
          }

          .video-thumbnail {
            padding: 40px;
          }

          .video-thumbnail:not(.featured) .emoji-thumb {
            font-size: 60px;
          }

          .video-title {
            font-size: 18px;
          }

          .video-card .video-title {
            font-size: 16px;
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
        .featured-video-card {
          animation: fadeInUp 0.6s ease-out;
        }

        /* Hover Effects */
        .video-card:hover .video-title,
        .featured-video-card:hover .video-title {
          color: #667eea;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f3f5;
        }

        ::-webkit-scrollbar-thumb {
          background: #667eea;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #764ba2;
        }
      `}</style>
    </div>
  );
}