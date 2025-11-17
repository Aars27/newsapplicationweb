import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Login credentials
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'admin@123';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      if (credentials.username === ADMIN_USERNAME && credentials.password === ADMIN_PASSWORD) {
        localStorage.setItem('isAdminLoggedIn', 'true');
        localStorage.setItem('adminUsername', credentials.username);
navigate('/admin/dashboard'); // admin navigate
      } else {
        setError('Invalid username or password');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="admin-login-page">
      <div className="login-card">
        <div className="logo-section">
          <div className="logo-circle">
            <i className="fas fa-newspaper"></i>
          </div>
          <h1>CampusBulletin</h1>
          <p className="subtitle">Admin Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <h2>Welcome Back</h2>
          <p className="form-subtitle">Sign in to continue to admin panel</p>

          {error && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-wrapper">
              <i className="fas fa-user"></i>
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                required
                autoFocus
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <i className="fas fa-lock"></i>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <i className={`fas fa-eye${showPassword ? '-slash' : ''}`}></i>
              </button>
            </div>
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Signing in...
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt"></i>
                Sign In
              </>
            )}
          </button>
        </form>

        <div className="back-link">
          <button onClick={() => navigate('/')} className="back-button">
            <i className="fas fa-arrow-left"></i>
            Back to Website
          </button>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .admin-login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .admin-login-page::before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          top: -200px;
          right: -200px;
          animation: float 6s ease-in-out infinite;
        }

        .admin-login-page::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          bottom: -150px;
          left: -150px;
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }

        .login-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 440px;
          padding: 50px 40px;
          position: relative;
          z-index: 1;
          animation: slideUp 0.6s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-section {
          text-align: center;
          margin-bottom: 40px;
        }

        .logo-circle {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .logo-circle i {
          font-size: 32px;
          color: #fff;
        }

        .logo-section h1 {
          font-size: 28px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 5px;
        }

        .subtitle {
          font-size: 14px;
          color: #636e72;
          font-weight: 500;
        }

        .login-form {
          margin-bottom: 25px;
        }

        .login-form h2 {
          font-size: 24px;
          font-weight: 700;
          color: #2d3436;
          margin-bottom: 8px;
        }

        .form-subtitle {
          font-size: 14px;
          color: #636e72;
          margin-bottom: 30px;
        }

        .error-message {
          background: #fee2e2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          animation: shake 0.5s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
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

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-wrapper i:first-child {
          position: absolute;
          left: 16px;
          color: #9ca3af;
          font-size: 16px;
          z-index: 1;
          pointer-events: none;
        }

        .input-wrapper input {
          width: 100%;
          padding: 14px 50px 14px 45px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 15px;
          transition: all 0.3s ease;
          outline: none;
          background: #f9fafb;
        }

        .input-wrapper input:focus {
          border-color: #667eea;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .toggle-password {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 8px;
          transition: all 0.3s ease;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .toggle-password:hover {
          color: #667eea;
          background: #f3f4f6;
        }

        .toggle-password:active {
          transform: scale(0.95);
        }

        .toggle-password i {
          font-size: 16px;
        }

        .login-button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
          margin-top: 25px;
        }

        .login-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
        }

        .login-button:active:not(:disabled) {
          transform: translateY(0);
        }

        .login-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .login-button i {
          font-size: 18px;
        }

        .back-link {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }

        .back-button {
          background: none;
          border: none;
          color: #636e72;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          background: #f3f4f6;
          color: #667eea;
        }

        .back-button i {
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .login-card {
            padding: 40px 30px;
            max-width: 100%;
          }

          .logo-circle {
            width: 60px;
            height: 60px;
          }

          .logo-circle i {
            font-size: 28px;
          }

          .logo-section h1 {
            font-size: 24px;
          }

          .login-form h2 {
            font-size: 22px;
          }
        }

        @media (max-width: 480px) {
          .admin-login-page {
            padding: 15px;
          }

          .login-card {
            padding: 30px 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;