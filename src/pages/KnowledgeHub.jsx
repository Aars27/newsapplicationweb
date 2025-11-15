import React, { useState } from 'react';

export default function KnowledgeHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles', icon: 'fas fa-th-large', count: 24 },
    { id: 'exam-tips', name: 'Exam Tips & Tricks', icon: 'fas fa-graduation-cap', count: 8 },
    { id: 'study-hacks', name: 'Study Hacks', icon: 'fas fa-brain', count: 6 },
    { id: 'career', name: 'Career Guidance', icon: 'fas fa-briefcase', count: 5 },
    { id: 'stories', name: 'Inspirational Stories', icon: 'fas fa-star', count: 5 }
  ];

  const articles = [
    {
      id: 1,
      category: 'exam-tips',
      title: '10 Proven Strategies to Ace Your Board Exams',
      excerpt: 'Master the art of exam preparation with these time-tested techniques that have helped thousands of students achieve top scores.',
      author: 'Dr. Priya Sharma',
      date: 'Nov 10, 2025',
      readTime: '8 min read',
      image: '📚',
      tags: ['CBSE', 'Board Exams', 'Tips'],
      featured: true
    },
    {
      id: 2,
      category: 'study-hacks',
      title: 'The Pomodoro Technique: A Student\'s Guide',
      excerpt: 'Learn how to maximize your study sessions using the Pomodoro Technique for better focus and retention.',
      author: 'Rahul Verma',
      date: 'Nov 8, 2025',
      readTime: '6 min read',
      image: '⏰',
      tags: ['Time Management', 'Productivity']
    },
    {
      id: 3,
      category: 'career',
      title: 'Engineering vs. Medical: Making the Right Choice',
      excerpt: 'Confused between engineering and medical? Here\'s a comprehensive guide to help you make an informed decision.',
      author: 'Prof. Amit Kumar',
      date: 'Nov 5, 2025',
      readTime: '10 min read',
      image: '🎯',
      tags: ['Career', 'Decision Making']
    },
    {
      id: 4,
      category: 'stories',
      title: 'From Failure to IIT: Rohan\'s Inspiring Journey',
      excerpt: 'Read how Rohan overcame multiple failures and rejections to finally crack JEE Advanced and secure admission to IIT Bombay.',
      author: 'Editorial Team',
      date: 'Nov 3, 2025',
      readTime: '12 min read',
      image: '🏆',
      tags: ['Success Story', 'JEE', 'Motivation'],
      featured: true
    },
    {
      id: 5,
      category: 'study-hacks',
      title: 'Cornell Note-Taking Method Explained',
      excerpt: 'Transform your note-taking skills with the Cornell method and improve your study efficiency dramatically.',
      author: 'Neha Gupta',
      date: 'Nov 1, 2025',
      readTime: '7 min read',
      image: '📝',
      tags: ['Note Making', 'Study Tips']
    },
    {
      id: 6,
      category: 'exam-tips',
      title: 'How to Overcome Exam Anxiety',
      excerpt: 'Practical strategies to manage stress and perform your best during examinations without letting anxiety take over.',
      author: 'Dr. Anjali Singh',
      date: 'Oct 28, 2025',
      readTime: '9 min read',
      image: '🧘',
      tags: ['Mental Health', 'Exam Stress']
    },
    {
      id: 7,
      category: 'career',
      title: 'Top 10 Career Options After 12th Science',
      excerpt: 'Explore diverse career paths available after completing your 12th in science stream, beyond the traditional choices.',
      author: 'Career Counselor Team',
      date: 'Oct 25, 2025',
      readTime: '11 min read',
      image: '🚀',
      tags: ['Career Options', '12th Science']
    },
    {
      id: 8,
      category: 'study-hacks',
      title: 'Active Recall: The Secret to Long-Term Memory',
      excerpt: 'Discover why active recall is more effective than passive reading and how to implement it in your study routine.',
      author: 'Memory Expert Team',
      date: 'Oct 22, 2025',
      readTime: '8 min read',
      image: '🧠',
      tags: ['Memory', 'Learning Techniques']
    },
    {
      id: 9,
      category: 'stories',
      title: 'Small Town Girl Cracks NEET with AIR 47',
      excerpt: 'Meet Priya from a small village in Bihar who defied all odds to achieve All India Rank 47 in NEET 2025.',
      author: 'Editorial Team',
      date: 'Oct 20, 2025',
      readTime: '10 min read',
      image: '💪',
      tags: ['NEET', 'Success Story', 'Inspiration']
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const filteredArticles = regularArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="knowledge-hub">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-lightbulb"></i>
              <span>Knowledge Hub</span>
            </div>
            <h1 className="hero-title">
              Unlock Your Potential with
              <span className="highlight"> Expert Insights</span>
            </h1>
            <p className="hero-description">
              Explore comprehensive guides, study tips, career advice, and inspirational stories 
              to help you succeed in your academic journey
            </p>
            
            {/* Search Bar */}
            <div className="search-container">
              <div className="search-wrapper">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
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

            {/* Quick Stats */}
            <div className="quick-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <div className="stat-info">
                  <h3>100+</h3>
                  <p>Articles</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="stat-info">
                  <h3>50K+</h3>
                  <p>Readers</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="stat-info">
                  <h3>Daily</h3>
                  <p>Updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-section">
        <div className="container">
          <div className="category-grid">
            {categories.map(category => (
              <div
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <span className="category-count">{category.count} articles</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'all' && !searchQuery && (
        <section className="featured-section">
          <div className="container">
            <div className="section-header">
              <div className="header-content">
                <h2 className="section-title">
                  <i className="fas fa-fire"></i> Featured Articles
                </h2>
                <p className="section-subtitle">Must-read articles handpicked by our experts</p>
              </div>
            </div>

            <div className="featured-grid">
              {featuredArticles.map(article => (
                <div key={article.id} className="featured-card">
                  <div className="featured-badge">
                    <i className="fas fa-star"></i> Featured
                  </div>
                  <div className="featured-emoji">{article.image}</div>
                  <div className="featured-content">
                    <div className="article-meta">
                      <span className="category-badge">{categories.find(c => c.id === article.category)?.name}</span>
                      <span className="read-time">
                        <i className="far fa-clock"></i> {article.readTime}
                      </span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-tags">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="tag">#{tag}</span>
                      ))}
                    </div>
                    <div className="article-footer">
                      <div className="author-info">
                        <div className="author-avatar">
                          {article.author.charAt(0)}
                        </div>
                        <div>
                          <p className="author-name">{article.author}</p>
                          <p className="article-date">{article.date}</p>
                        </div>
                      </div>
                      <button className="read-more-btn">
                        Read More <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header">
            <div className="header-content">
              <h2 className="section-title">
                {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="section-subtitle">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>No articles found</h3>
              <p>Try adjusting your search or category filter</p>
              <button className="reset-btn" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="articles-grid">
              {filteredArticles.map(article => (
                <div key={article.id} className="article-card">
                  <div className="article-emoji">{article.image}</div>
                  <div className="article-content">
                    <div className="article-meta">
                      <span className="category-badge">{categories.find(c => c.id === article.category)?.name}</span>
                      <span className="read-time">
                        <i className="far fa-clock"></i> {article.readTime}
                      </span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-tags">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="tag">#{tag}</span>
                      ))}
                    </div>
                    <div className="article-footer">
                      <div className="author-info">
                        <div className="author-avatar">
                          {article.author.charAt(0)}
                        </div>
                        <div>
                          <p className="author-name">{article.author}</p>
                          <p className="article-date">{article.date}</p>
                        </div>
                      </div>
                      <button className="read-more-btn">
                        Read <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="newsletter-content">
              <h2>Stay Updated with Latest Articles</h2>
              <p>Subscribe to our newsletter and get weekly insights delivered to your inbox</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email address" />
                <button>
                  Subscribe <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .knowledge-hub {
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
          overflow: hidden;
        }

        .hero-shapes {
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
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Search Container */
        .search-container {
          margin-bottom: 50px;
        }

        .search-wrapper {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .search-wrapper i {
          position: absolute;
          left: 25px;
          top: 50%;
          transform: translateY(-50%);
          color: #6F61C1;
          font-size: 18px;
        }

        .search-wrapper input {
          width: 100%;
          padding: 18px 60px 18px 60px;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          background: #fff;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          outline: none;
          transition: all 0.3s ease;
        }

        .search-wrapper input:focus {
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
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

        /* Quick Stats */
        .quick-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 24px;
          backdrop-filter: blur(10px);
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

        /* Category Section */
        .category-section {
          padding: 60px 0;
          background: #fff;
          margin-top: -30px;
          position: relative;
          z-index: 2;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .category-card {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 25px;
          background: #fff;
          border: 2px solid #e9ecef;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-card:hover {
          border-color: #6F61C1;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(111, 97, 193, 0.15);
        }

        .category-card.active {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          border-color: #6F61C1;
          color: #fff;
        }

        .category-icon {
          width: 50px;
          height: 50px;
          background: rgba(111, 97, 193, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #6F61C1;
          transition: all 0.3s ease;
        }

        .category-card.active .category-icon {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
        }

        .category-info h3 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .category-count {
          font-size: 13px;
          opacity: 0.7;
        }

        /* Section Header */
        .section-header {
          margin-bottom: 40px;
        }

        .header-content {
          text-align: center;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .section-title i {
          color: #FF6B6B;
        }

        .section-subtitle {
          font-size: 16px;
          color: #636e72;
        }

        /* Featured Section */
        .featured-section {
          padding: 60px 0;
          background: #fff;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .featured-card {
          position: relative;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .featured-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .featured-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #fff;
          padding: 8px 15px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          z-index: 1;
        }

        .featured-emoji {
          font-size: 100px;
          text-align: center;
          padding: 40px 0 20px;
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
        }

        .featured-content {
          padding: 30px;
        }

        /* Articles Section */
        .articles-section {
          padding: 60px 0;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .article-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .article-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .article-emoji {
          font-size: 80px;
          text-align: center;
          padding: 40px 0 20px;
          background: linear-gradient(135deg, rgba(111, 97, 193, 0.1) 0%, rgba(139, 95, 191, 0.1) 100%);
        }

        .article-content {
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .article-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .category-badge {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          color: #fff;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .read-time {
          font-size: 13px;
          color: #636e72;
          display: flex;
          align-items: center;
          gap: 5px;
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
          margin-bottom: 15px;
          flex: 1;
        }

        .article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tag {
          background: #f1f3f5;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 12px;
          color: #495057;
        }

        .article-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 600;
          font-size: 16px;
        }

        .author-name {
          font-size: 14px;
          font-weight: 600;
          color: #2d3436;
          margin-bottom: 3px;
        }

        .article-date {
          font-size: 12px;
          color: #636e72;
        }

        .read-more-btn {
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

        .read-more-btn:hover {
          background: rgba(111, 97, 193, 0.1);
          gap: 12px;
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
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        .reset-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(111, 97, 193, 0.3);
        }

        /* Newsletter Section */
        .newsletter-section {
          padding: 80px 0;
          background: #fff;
        }

        .newsletter-card {
          background: linear-gradient(135deg, #6F61C1 0%, #8B5FBF 100%);
          border-radius: 30px;
          padding: 60px 40px;
          display: flex;
          align-items: center;
          gap: 40px;
          position: relative;
          overflow: hidden;
        }

        .newsletter-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .newsletter-card::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -5%;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }

        .newsletter-icon {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          color: #fff;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          backdrop-filter: blur(10px);
        }

        .newsletter-content {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .newsletter-content h2 {
          font-size: 32px;
          color: #fff;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .newsletter-content p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 25px;
        }

        .newsletter-form {
          display: flex;
          gap: 15px;
          max-width: 600px;
        }

        .newsletter-form input {
          flex: 1;
          padding: 15px 25px;
          border: none;
          border-radius: 50px;
          font-size: 15px;
          outline: none;
          background: rgba(255, 255, 255, 0.9);
        }

        .newsletter-form button {
          background: #fff;
          color: #6F61C1;
          border: none;
          padding: 15px 35px;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-size: 15px;
        }

        .newsletter-form button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }

          .articles-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 42px;
          }

          .category-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          }

          .newsletter-card {
            flex-direction: column;
            text-align: center;
            padding: 50px 30px;
          }

          .newsletter-form {
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 0 60px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-description {
            font-size: 16px;
          }

          .quick-stats {
            gap: 30px;
          }

          .stat-item {
            flex-direction: column;
            text-align: center;
          }

          .section-title {
            font-size: 28px;
            flex-direction: column;
            gap: 8px;
          }

          .category-grid {
            grid-template-columns: 1fr;
          }

          .featured-grid,
          .articles-grid {
            grid-template-columns: 1fr;
          }

          .newsletter-content h2 {
            font-size: 24px;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-form button {
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 28px;
          }

          .search-wrapper input {
            padding: 15px 50px 15px 50px;
            font-size: 14px;
          }

          .quick-stats {
            flex-direction: column;
            gap: 20px;
          }

          .category-section {
            padding: 40px 0;
          }

          .featured-section,
          .articles-section {
            padding: 40px 0;
          }

          .article-card {
            border-radius: 15px;
          }

          .newsletter-section {
            padding: 50px 0;
          }

          .newsletter-card {
            padding: 40px 20px;
            border-radius: 20px;
          }

          .newsletter-icon {
            width: 80px;
            height: 80px;
            font-size: 32px;
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

        .article-card,
        .featured-card,
        .category-card {
          animation: fadeInUp 0.6s ease-out;
        }

        /* Loading States */
        .loading {
          text-align: center;
          padding: 60px 20px;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid #f1f3f5;
          border-top-color: #6F61C1;
          border-radius: 50%;
          margin: 0 auto;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Hover Effects */
        .article-card:hover .article-title {
          color: #6F61C1;
        }

        .featured-card:hover .article-title {
          color: #6F61C1;
        }

        /* Focus States */
        .search-wrapper input:focus,
        .newsletter-form input:focus {
          outline: 3px solid rgba(111, 97, 193, 0.3);
        }

        button:focus,
        .category-card:focus {
          outline: 3px solid rgba(111, 97, 193, 0.5);
          outline-offset: 2px;
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