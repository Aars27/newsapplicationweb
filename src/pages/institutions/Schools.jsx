import React from 'react';

export default function Schools() {
  
  const [schools, setSchools] = React.useState([
    {
      id: 1,
      name: "Delhi Public School",
      address: "Mathura Road, New Delhi - 110065",
      board: "CBSE",
      facilities: ["Library", "Sports Complex", "Lab", "Auditorium"],
      fees: "₹2,50,000/year",
      admissionProcess: "Online application from January to March",
      images: ["https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800"],
      location: "Delhi"
    },
    {
      id: 2,
      name: "Ryan International School",
      address: "Sector 40, Noida - 201301",
      board: "CBSE",
      facilities: ["Smart Classes", "Swimming Pool", "Lab", "Library"],
      fees: "₹1,80,000/year",
      admissionProcess: "Walk-in interviews in February",
      images: ["https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"],
      location: "Noida"
    },
    {
      id: 3,
      name: "Bishop Cotton School",
      address: "Bangalore - 560051",
      board: "ICSE",
      facilities: ["Hostel", "Sports Grounds", "Music Room", "Art Studio"],
      fees: "₹3,20,000/year",
      admissionProcess: "Entrance test in December",
      images: ["https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"],
      location: "Bangalore"
    },
    {
      id: 4,
      name: "Kendriya Vidyalaya",
      address: "Cantonment Area, Mumbai - 400001",
      board: "CBSE",
      facilities: ["Library", "Computer Lab", "Playground", "Canteen"],
      fees: "₹25,000/year",
      admissionProcess: "Online registration in March",
      images: ["https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800"],
      location: "Mumbai"
    }
  ]);

  const [filters, setFilters] = React.useState({
    location: "",
    board: "",
    maxFees: ""
  });

  const [selectedSchool, setSelectedSchool] = React.useState(null);
  const [showProfile, setShowProfile] = React.useState(false);

  const locations = [...new Set(schools.map(s => s.location))];
  const boards = [...new Set(schools.map(s => s.board))];

  const filteredSchools = schools.filter(school => {
    if (filters.location && school.location !== filters.location) return false;
    if (filters.board && school.board !== filters.board) return false;
    if (filters.maxFees) {
      const schoolFees = parseInt(school.fees.replace(/[^0-9]/g, ''));
      const maxFees = parseInt(filters.maxFees);
      if (schoolFees > maxFees) return false;
    }
    return true;
  });

  const openProfile = (school) => {
    setSelectedSchool(school);
    setShowProfile(true);
  };

  return (
    <main className="page-content">
      {/* <div className="page-header" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        padding: '80px 0 60px',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1>Schools Directory</h1>
          <p>Find the best schools across India</p>
        </div>
      </div> */}

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          {/* Filters */}
          <div style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            marginBottom: '40px'
          }}>
            <h3 style={{ marginBottom: '20px', color: '#333' }}>Filter Schools</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555' }}>Location</label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="">All Locations</option>
                  {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555' }}>Board Type</label>
                <select
                  value={filters.board}
                  onChange={(e) => setFilters({...filters, board: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                >
                  <option value="">All Boards</option>
                  {boards.map(board => <option key={board} value={board}>{board}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555' }}>Max Fees (₹/year)</label>
                <input
                  type="number"
                  value={filters.maxFees}
                  onChange={(e) => setFilters({...filters, maxFees: e.target.value})}
                  placeholder="e.g., 200000"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>
            <button
              onClick={() => setFilters({ location: "", board: "", maxFees: "" })}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                background: '#667eea',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Clear Filters
            </button>
          </div>

          {/* Schools Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
            {filteredSchools.map(school => (
              <div key={school.id} style={{
                background: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
              }}
              onClick={() => openProfile(school)}
              >
                <img src={school.images[0]} alt={school.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ marginBottom: '10px', color: '#333', fontSize: '20px' }}>{school.name}</h3>
                  <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>{school.address}</p>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                    <span style={{
                      background: '#667eea',
                      color: '#fff',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px'
                    }}>{school.board}</span>
                    <span style={{
                      background: '#f0f0f0',
                      color: '#333',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px'
                    }}>{school.location}</span>
                  </div>
                  <p style={{ color: '#764ba2', fontWeight: '600', fontSize: '16px' }}>{school.fees}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredSchools.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
              <p>No schools found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Profile Modal */}
      {showProfile && selectedSchool && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}
        onClick={() => setShowProfile(false)}
        >
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowProfile(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#fff',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                zIndex: 1
              }}
            >×</button>
            
            <img src={selectedSchool.images[0]} alt={selectedSchool.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            
            <div style={{ padding: '40px' }}>
              <h2 style={{ marginBottom: '20px', color: '#333' }}>{selectedSchool.name}</h2>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#667eea', marginBottom: '8px' }}>Address</h4>
                <p style={{ color: '#666' }}>{selectedSchool.address}</p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#667eea', marginBottom: '8px' }}>Board</h4>
                <p style={{ color: '#666' }}>{selectedSchool.board}</p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#667eea', marginBottom: '8px' }}>Facilities</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedSchool.facilities.map((facility, idx) => (
                    <span key={idx} style={{
                      background: '#f0f0f0',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      color: '#333'
                    }}>{facility}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#667eea', marginBottom: '8px' }}>Annual Fees</h4>
                <p style={{ color: '#764ba2', fontWeight: '600', fontSize: '20px' }}>{selectedSchool.fees}</p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#667eea', marginBottom: '8px' }}>Admission Process</h4>
                <p style={{ color: '#666' }}>{selectedSchool.admissionProcess}</p>
              </div>

              <button style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '20px'
              }}>
                Contact School
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
