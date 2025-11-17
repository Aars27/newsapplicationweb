import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [newsForm, setNewsForm] = useState({
    title: '',
    category: '',
    content: '',
    image: '',
    author: '',
    tags: ''
  });

  // Check if admin is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminUsername');
    navigate('/admin/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('News Data:', newsForm);
    alert('News article published successfully!');
    // Reset form
    setNewsForm({
      title: '',
      category: '',
      content: '',
      image: '',
      author: '',
      tags: ''
    });
  };

  const adminUsername = localStorage.getItem('adminUsername') || 'Admin';

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <i className="fas fa-newspaper"></i>
            <span>CampusBulletin</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <i className="fas fa-chart-line"></i>
            <span>Dashboard</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'add-news' ? 'active' : ''}`}
            onClick={() => setActiveTab('add-news')}
          >
            <i className="fas fa-plus-circle"></i>
            <span>Add News</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'all-news' ? 'active' : ''}`}
            onClick={() => setActiveTab('all-news')}
          >
            <i className="fas fa-newspaper"></i>
            <span>All News</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'categories' ? 'active' : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            <i className="fas fa-folder"></i>
            <span>Categories</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'scholarships' ? 'active' : ''}`}
            onClick={() => setActiveTab('scholarships')}
          >
            <i className="fas fa-graduation-cap"></i>
            <span>Scholarships</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            <i className="fas fa-book"></i>
            <span>Resources</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <header className="topbar">
          <button className="menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <i className="fas fa-bars"></i>
          </button>

          <div className="topbar-right">
            <button className="view-site-btn" onClick={() => navigate('/')}>
              <i className="fas fa-eye"></i>
              View Site
            </button>
            
            <div className="admin-profile">
              <div className="profile-info">
                <span className="profile-name">{adminUsername}</span>
                <span className="profile-role">Administrator</span>
              </div>
              <div className="profile-avatar">
                <i className="fas fa-user-shield"></i>
              </div>
              <button className="logout-btn" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="content-area">
          {activeTab === 'dashboard' && (
            <div className="dashboard-content">
              <h1>Dashboard Overview</h1>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon" style={{background: '#667eea'}}>
                    <i className="fas fa-newspaper"></i>
                  </div>
                  <div className="stat-details">
                    <h3>Total News</h3>
                    <p className="stat-number">245</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon" style={{background: '#f093fb'}}>
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="stat-details">
                    <h3>Scholarships</h3>
                    <p className="stat-number">32</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon" style={{background: '#4facfe'}}>
                    <i className="fas fa-book"></i>
                  </div>
                  <div className="stat-details">
                    <h3>Resources</h3>
                    <p className="stat-number">156</p>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon" style={{background: '#43e97b'}}>
                    <i className="fas fa-eye"></i>
                  </div>
                  <div className="stat-details">
                    <h3>Total Views</h3>
                    <p className="stat-number">12.5K</p>
                  </div>
                </div>
              </div>

              <div className="recent-activity">
                <h2>Recent Activity</h2>
                <div className="activity-list">
                  <div className="activity-item">
                    <i className="fas fa-plus-circle"></i>
                    <div className="activity-details">
                      <p><strong>New article published</strong></p>
                      <span>JEE Main 2025 Registration Opens - 2 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <i className="fas fa-edit"></i>
                    <div className="activity-details">
                      <p><strong>Article updated</strong></p>
                      <span>CBSE Board Exam Updates - 5 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <i className="fas fa-graduation-cap"></i>
                    <div className="activity-details">
                      <p><strong>Scholarship added</strong></p>
                      <span>Merit Scholarship 2025 - 1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'add-news' && (
            <div className="add-news-content">
              <h1>Add New Article</h1>
              
              <form onSubmit={handleSubmit} className="news-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="title">Article Title *</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={newsForm.title}
                      onChange={handleInputChange}
                      placeholder="Enter article title"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Category *</label>
                    <select
                      id="category"
                      name="category"
                      value={newsForm.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="education-news">Education News</option>
                      <option value="board-exams">Board Exams</option>
                      <option value="entrance-exams">Entrance Exams</option>
                      <option value="results">Results</option>
                      <option value="admissions">Admissions</option>
                      <option value="scholarships">Scholarships</option>
                      <option value="study-tips">Study Tips</option>
                      <option value="career-guidance">Career Guidance</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="author">Author Name</label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={newsForm.author}
                      onChange={handleInputChange}
                      placeholder="Enter author name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="image">Featured Image URL</label>
                    <input
                      type="text"
                      id="image"
                      name="image"
                      value={newsForm.image}
                      onChange={handleInputChange}
                      placeholder="Enter image URL"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="content">Article Content *</label>
                  <textarea
                    id="content"
                    name="content"
                    value={newsForm.content}
                    onChange={handleInputChange}
                    placeholder="Write your article content here..."
                    rows="10"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="tags">Tags (comma separated)</label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={newsForm.tags}
                    onChange={handleInputChange}
                    placeholder="e.g., CBSE, JEE, NEET, Education"
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary">
                    <i className="fas fa-check"></i>
                    Publish Article
                  </button>
                  <button type="button" className="btn-secondary" onClick={() => setNewsForm({
                    title: '', category: '', content: '', image: '', author: '', tags: ''
                  })}>
                    <i className="fas fa-times"></i>
                    Clear Form
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'all-news' && (
            <div className="all-news-content">
              <h1>All News Articles</h1>
              <p className="coming-soon">News management interface coming soon...</p>
            </div>
          )}

          {activeTab === 'categories' && (
            <div className="categories-content">
              <h1>Manage Categories</h1>
              <p className="coming-soon">Category management coming soon...</p>
            </div>
          )}

          {activeTab === 'scholarships' && (
            <div className="scholarships-content">
              <h1>Manage Scholarships</h1>
              <p className="coming-soon">Scholarship management coming soon...</p>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="resources-content">
              <h1>Manage Resources</h1>
              <p className="coming-soon">Resource management coming soon...</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-content">
              <h1>Settings</h1>
              <p className="coming-soon">Settings panel coming soon...</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .admin-dashboard {
          display: flex;
          min-height: 100vh;
          background: #f5f7fa;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Sidebar */
        .sidebar {
          width: 260px;
          background: #2d3436;
          color: #fff;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          transition: all 0.3s ease;
          z-index: 1000;
          overflow-y: auto;
        }

        .sidebar.closed {
          transform: translateX(-260px);
        }

        .sidebar-header {
          padding: 25px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          font-weight: 700;
        }

        .logo i {
          font-size: 28px;
          color: #667eea;
        }

        .sidebar-nav {
          padding: 20px 0;
        }

        .nav-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          background: none;
          border: none;
          color: #b2bec3;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .nav-item:hover {
          background: rgba(255,255,255,0.05);
          color: #fff;
        }

        .nav-item.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
        }

        .nav-item i {
          width: 20px;
          font-size: 18px;
        }

        /* Main Content */
        .main-content {
          flex: 1;
          margin-left: 260px;
          transition: all 0.3s ease;
        }

        .sidebar.closed ~ .main-content {
          margin-left: 0;
        }

        /* Topbar */
        .topbar {
          background: #fff;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .menu-toggle {
          background: none;
          border: none;
          font-size: 24px;
          color: #2d3436;
          cursor: pointer;
          padding: 8px;
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .view-site-btn {
          padding: 10px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .view-site-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .admin-profile {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .profile-name {
          font-size: 14px;
          font-weight: 600;
          color: #2d3436;
        }

        .profile-role {
          font-size: 12px;
          color: #636e72;
        }

        .profile-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 18px;
        }

        .logout-btn {
          padding: 8px 12px;
          background: #ff4757;
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .logout-btn:hover {
          background: #ff3838;
        }

        /* Content Area */
        .content-area {
          padding: 30px;
        }

        .content-area h1 {
          font-size: 28px;
          color: #2d3436;
          margin-bottom: 25px;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 24px;
        }

        .stat-details h3 {
          font-size: 14px;
          color: #636e72;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 700;
          color: #2d3436;
        }

        /* Recent Activity */
        .recent-activity {
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .recent-activity h2 {
          font-size: 20px;
          color: #2d3436;
          margin-bottom: 20px;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .activity-item i {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .activity-details p {
          margin-bottom: 5px;
          color: #2d3436;
        }

        .activity-details span {
          font-size: 13px;
          color: #636e72;
        }

        /* News Form */
        .news-form {
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #2d3436;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 15px;
          transition: all 0.3s ease;
          outline: none;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .form-group textarea {
          resize: vertical;
        }

        .form-actions {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }

        .btn-primary,
        .btn-secondary {
          padding: 14px 28px;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: #f1f3f5;
          color: #495057;
        }

        .btn-secondary:hover {
          background: #e9ecef;
        }

        .coming-soon {
          text-align: center;
          color: #636e72;
          font-size: 16px;
          padding: 60px 20px;
          background: #fff;
          border-radius: 12px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-260px);
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .main-content {
            margin-left: 0;
          }

          .content-area {
            padding: 20px 15px;
          }

          .topbar {
            padding: 15px;
          }

          .profile-info {
            display: none;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;