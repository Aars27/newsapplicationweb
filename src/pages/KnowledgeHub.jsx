import { useState } from 'react';

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
      {/* Header Section */}
      <section className="header-section">
        <div className="container">
          <div className="header-content">
            <h1>Knowledge Hub</h1>
            <p>Expert insights, study tips, and inspiring stories to help you succeed</p>
          </div>
          
          {/* Search Bar */}
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
      </section>

      {/* Category Filter */}
      <section className="category-section">
        <div className="container">
          <div className="category-scroll">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <i className={category.icon}></i>
                <span>{category.name}</span>
                <span className="count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'all' && !searchQuery && (
        <section className="featured-section">
          <div className="container">
            <div className="section-header">
              <h2>
                <i className="fas fa-fire"></i> Featured Articles
              </h2>
              <p>Must-read articles handpicked by our experts</p>
            </div>

            <div className="featured-grid">
              {featuredArticles.map(article => (
                <div key={article.id} className="featured-card">
                  <div className="featured-badge">
                    <i className="fas fa-star"></i> Featured
                  </div>
                  <div className="card-image">
                    <div className="emoji-icon">{article.image}</div>
                  </div>
                  <div className="card-content">
                    <div className="meta-info">
                      <span className="category">{categories.find(c => c.id === article.category)?.name}</span>
                      <span className="read-time">
                        <i className="far fa-clock"></i> {article.readTime}
                      </span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <div className="tags">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="tag">#{tag}</span>
                      ))}
                    </div>
                    <div className="card-footer">
                      <div className="author">
                        <div className="avatar">{article.author.charAt(0)}</div>
                        <div className="author-details">
                          <span className="name">{article.author}</span>
                          <span className="date">{article.date}</span>
                        </div>
                      </div>
                      <button className="read-btn">
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
            <h2>
              {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p>{filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found</p>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>No articles found</h3>
              <p>Try adjusting your search or category filter</p>
              <button className="reset-btn" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                <i className="fas fa-redo"></i> Reset Filters
              </button>
            </div>
          ) : (
            <div className="articles-grid">
              {filteredArticles.map(article => (
                <div key={article.id} className="article-card">
                  <div className="card-image">
                    <div className="emoji-icon">{article.image}</div>
                  </div>
                  <div className="card-content">
                    <div className="meta-info">
                      <span className="category">{categories.find(c => c.id === article.category)?.name}</span>
                      <span className="read-time">
                        <i className="far fa-clock"></i> {article.readTime}
                      </span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <div className="tags">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="tag">#{tag}</span>
                      ))}
                    </div>
                    <div className="card-footer">
                      <div className="author">
                        <div className="avatar">{article.author.charAt(0)}</div>
                        <div className="author-details">
                          <span className="name">{article.author}</span>
                          <span className="date">{article.date}</span>
                        </div>
                      </div>
                      <button className="read-btn">
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

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: 32px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .section-header h2 i {
          color: #ff6b6b;
        }

        .section-header p {
          font-size: 15px;
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
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          position: relative;
          border: 2px solid transparent;
        }

        .featured-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border-color: #667eea;
        }

        .featured-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #fff;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          z-index: 1;
        }

        .card-image {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          padding: 40px;
          text-align: center;
        }

        .emoji-icon {
          font-size: 80px;
        }

        .card-content {
          padding: 25px;
        }

        .meta-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .category {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 11px;
          font-weight: 600;
        }

        .read-time {
          font-size: 12px;
          color: #636e72;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .card-content h3 {
          font-size: 20px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .card-content p {
          font-size: 14px;
          color: #636e72;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tag {
          background: #f1f3f5;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 11px;
          color: #495057;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }

        .author {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .avatar {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 600;
          font-size: 14px;
        }

        .author-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .name {
          font-size: 13px;
          font-weight: 600;
          color: #2d3436;
        }

        .date {
          font-size: 11px;
          color: #636e72;
        }

        .read-btn {
          background: transparent;
          color: #667eea;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          font-size: 13px;
        }

        .read-btn:hover {
          background: rgba(102, 126, 234, 0.1);
          gap: 12px;
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
          border: 2px solid transparent;
        }

        .article-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border-color: #667eea;
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 80px 20px;
        }

        .no-results-icon {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 40px;
          color: #667eea;
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
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .reset-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        /* Newsletter Section */
        .newsletter-section {
          padding: 80px 0;
          background: #fff;
        }

        .newsletter-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 25px;
          padding: 50px 40px;
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

        .newsletter-icon {
          width: 90px;
          height: 90px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          color: #fff;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .newsletter-content {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .newsletter-content h2 {
          font-size: 28px;
          color: #fff;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .newsletter-content p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 20px;
        }

        .newsletter-form {
          display: flex;
          gap: 12px;
          max-width: 550px;
        }

        .newsletter-form input {
          flex: 1;
          padding: 14px 20px;
          border: none;
          border-radius: 12px;
          font-size: 14px;
          outline: none;
        }

        .newsletter-form button {
          background: #fff;
          color: #667eea;
          border: none;
          padding: 14px 28px;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-size: 14px;
        }

        .newsletter-form button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .featured-grid,
          .articles-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 992px) {
          .newsletter-card {
            flex-direction: column;
            text-align: center;
            padding: 40px 30px;
          }

          .newsletter-form {
            margin: 0 auto;
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

          .section-header h2 {
            font-size: 24px;
            flex-direction: column;
            gap: 6px;
          }

          .featured-grid,
          .articles-grid {
            grid-template-columns: 1fr;
          }

          .featured-section,
          .articles-section {
            padding: 40px 0;
          }

          .newsletter-section {
            padding: 50px 0;
          }

          .newsletter-content h2 {
            font-size: 22px;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-form button {
            justify-content: center;
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

          .newsletter-card {
            padding: 30px 20px;
            border-radius: 20px;
          }

          .newsletter-icon {
            width: 70px;
            height: 70px;
            font-size: 28px;
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
        .featured-card {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </main>
  );
}