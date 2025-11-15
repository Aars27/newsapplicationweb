import React from 'react';

export default function Disclaimer() {
  return (
    <main className="page-content">
      <div className="page-header" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        padding: '80px 0 60px',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1>Disclaimer</h1>
        </div>
      </div>
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <p>Disclaimer content...</p>
        </div>
      </section>
    </main>
  );
}