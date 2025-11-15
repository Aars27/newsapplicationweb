import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="page-content">
      <div className="error-page" style={{
        textAlign: 'center',
        padding: '100px 0',
        minHeight: 'calc(100vh - 400px)'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '120px',
            fontWeight: 700,
            color: '#667eea',
            marginBottom: '20px'
          }}>404</h1>
          <h2>Page Not Found</h2>
          <p style={{ marginBottom: '30px' }}>The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary" style={{
            padding: '12px 30px',
            background: '#4CAF50',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            display: 'inline-block'
          }}>
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}