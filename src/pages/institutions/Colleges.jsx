import React from 'react';

export default function Colleges() {
  const [colleges, setColleges] = React.useState([
    {
      id: 1,
      name: "St. Stephen's College",
      location: "Delhi",
      type: "Government",
      stream: ["Arts", "Science"],
      courses: ["BA English", "BA History", "BSc Physics", "BSc Chemistry"],
      faculty: {
        total: 85,
        phd: 62,
        experience: "15+ years avg"
      },
      placement: {
        percentage: "92%",
        avgPackage: "₹12 LPA",
        topPackage: "₹45 LPA",
        topRecruiters: ["Google", "Microsoft", "Deloitte"]
      },
      hostel: {
        available: true,
        capacity: 450,
        fees: "₹80,000/year",
        facilities: ["WiFi", "Gym", "Mess", "Library"]
      },
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      rating: 4.8,
      established: 1881
    },
    {
      id: 2,
      name: "Shri Ram College of Commerce",
      location: "Delhi",
      type: "Government",
      stream: ["Commerce"],
      courses: ["B.Com (Hons)", "BA Economics"],
      faculty: {
        total: 72,
        phd: 58,
        experience: "12+ years avg"
      },
      placement: {
        percentage: "95%",
        avgPackage: "₹15 LPA",
        topPackage: "₹52 LPA",
        topRecruiters: ["Goldman Sachs", "McKinsey", "KPMG"]
      },
      hostel: {
        available: false,
        capacity: 0,
        fees: "N/A",
        facilities: []
      },
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      rating: 4.7,
      established: 1926
    },
    {
      id: 3,
      name: "Christ University",
      location: "Bangalore",
      type: "Private",
      stream: ["Arts", "Commerce", "Science"],
      courses: ["BBA", "B.Com", "BSc Computer Science", "BA Psychology"],
      faculty: {
        total: 320,
        phd: 185,
        experience: "10+ years avg"
      },
      placement: {
        percentage: "88%",
        avgPackage: "₹8 LPA",
        topPackage: "₹35 LPA",
        topRecruiters: ["Infosys", "TCS", "Wipro", "Amazon"]
      },
      hostel: {
        available: true,
        capacity: 1200,
        fees: "₹1,20,000/year",
        facilities: ["WiFi", "Gym", "Mess", "Sports Complex", "Medical"]
      },
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      rating: 4.5,
      established: 1969
    },
    {
      id: 4,
      name: "Loyola College",
      location: "Chennai",
      type: "Private",
      stream: ["Arts", "Commerce", "Science"],
      courses: ["BA English", "B.Com", "BSc Mathematics", "BCA"],
      faculty: {
        total: 245,
        phd: 152,
        experience: "14+ years avg"
      },
      placement: {
        percentage: "85%",
        avgPackage: "₹7 LPA",
        topPackage: "₹28 LPA",
        topRecruiters: ["Cognizant", "Accenture", "HCL"]
      },
      hostel: {
        available: true,
        capacity: 800,
        fees: "₹95,000/year",
        facilities: ["WiFi", "Mess", "Library", "Sports"]
      },
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800",
      rating: 4.6,
      established: 1925
    }
  ]);

  const [filters, setFilters] = React.useState({
    type: "",
    stream: "",
    location: ""
  });

  const [selectedCollege, setSelectedCollege] = React.useState(null);
  const [showProfile, setShowProfile] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("overview");

  const types = [...new Set(colleges.map(c => c.type))];
  const streams = [...new Set(colleges.flatMap(c => c.stream))];
  const locations = [...new Set(colleges.map(c => c.location))];

  const filteredColleges = colleges.filter(college => {
    if (filters.type && college.type !== filters.type) return false;
    if (filters.stream && !college.stream.includes(filters.stream)) return false;
    if (filters.location && college.location !== filters.location) return false;
    return true;
  });

  const openProfile = (college) => {
    setSelectedCollege(college);
    setShowProfile(true);
    setActiveTab("overview");
  };

  return (
    <main style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      {/* Top Bar */}
      <div style={{
        background: '#fff',
        borderBottom: '1px solid #e5e7eb',
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: '700', 
            color: '#1a1a1a',
            margin: 0,
            letterSpacing: '-0.5px'
          }}>Colleges Directory</h1>
          <p style={{ 
            fontSize: '14px', 
            color: '#6b7280', 
            margin: '4px 0 0 0' 
          }}>Explore top colleges across India</p>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '24px' }}>
          {/* Sidebar Filters */}
          <aside style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '24px',
            height: 'fit-content',
            position: 'sticky',
            top: '100px',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: '700', 
              marginBottom: '20px',
              color: '#1a1a1a'
            }}>Filters</h3>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600', 
                fontSize: '13px',
                color: '#374151' 
              }}>College Type</label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                  background: '#fff',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="">All Types</option>
                {types.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600', 
                fontSize: '13px',
                color: '#374151' 
              }}>Stream</label>
              <select
                value={filters.stream}
                onChange={(e) => setFilters({...filters, stream: e.target.value})}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                  background: '#fff',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="">All Streams</option>
                {streams.map(stream => <option key={stream} value={stream}>{stream}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600', 
                fontSize: '13px',
                color: '#374151' 
              }}>Location</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                  background: '#fff',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <option value="">All Locations</option>
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>

            <button
              onClick={() => setFilters({ type: "", stream: "", location: "" })}
              style={{
                width: '100%',
                padding: '10px',
                background: '#f3f4f6',
                color: '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#e5e7eb';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#f3f4f6';
              }}
            >
              Clear All
            </button>

            <div style={{ 
              marginTop: '24px', 
              paddingTop: '24px', 
              borderTop: '1px solid #e5e7eb' 
            }}>
              <p style={{ fontSize: '13px', color: '#6b7280' }}>
                Showing <strong>{filteredColleges.length}</strong> colleges
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <div>
            {/* Colleges List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {filteredColleges.map(college => (
                <article key={college.id} style={{
                  background: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '200px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = '#d1d5db';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
                onClick={() => openProfile(college)}
                >
                  <img 
                    src={college.image} 
                    alt={college.name} 
                    style={{ 
                      width: '280px', 
                      height: '100%', 
                      objectFit: 'cover',
                      flexShrink: 0
                    }} 
                  />
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <h3 style={{ 
                          fontSize: '20px', 
                          fontWeight: '700', 
                          color: '#1a1a1a',
                          lineHeight: '1.3',
                          marginRight: '16px'
                        }}>{college.name}</h3>
                        <div style={{
                          background: '#fef3c7',
                          color: '#92400e',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: '700',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          flexShrink: 0
                        }}>
                          ★ {college.rating}
                        </div>
                      </div>
                      <p style={{ 
                        fontSize: '13px', 
                        color: '#6b7280',
                        marginBottom: '12px'
                      }}>📍 {college.location} • Est. {college.established}</p>
                      
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                        <span style={{
                          background: college.type === 'Government' ? '#dcfce7' : '#e0e7ff',
                          color: college.type === 'Government' ? '#166534' : '#3730a3',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>{college.type}</span>
                        {college.stream.map((s, idx) => (
                          <span key={idx} style={{
                            background: '#fef3c7',
                            color: '#92400e',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '500'
                          }}>{s}</span>
                        ))}
                      </div>

                      <p style={{ 
                        fontSize: '13px', 
                        color: '#4b5563',
                        lineHeight: '1.5'
                      }}>
                        <strong>{college.courses.length} courses</strong> • {college.faculty.total} faculty members
                      </p>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginTop: '12px',
                      paddingTop: '12px',
                      borderTop: '1px solid #f3f4f6'
                    }}>
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <div>
                          <p style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Placement</p>
                          <p style={{ fontSize: '14px', fontWeight: '700', color: '#059669' }}>{college.placement.percentage}</p>
                        </div>
                        <div>
                          <p style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>Avg Package</p>
                          <p style={{ fontSize: '14px', fontWeight: '700', color: '#1a1a1a' }}>{college.placement.avgPackage}</p>
                        </div>
                      </div>
                      <span style={{
                        fontSize: '13px',
                        color: '#6b7280',
                        fontWeight: '500'
                      }}>View Details →</span>
                    </div>
                  </div>
                </article>
              ))}

              {filteredColleges.length === 0 && (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '60px 20px',
                  background: '#fff',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb'
                }}>
                  <p style={{ fontSize: '16px', color: '#6b7280' }}>No colleges found matching your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfile && selectedCollege && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px',
          backdropFilter: 'blur(4px)'
        }}
        onClick={() => setShowProfile(false)}
        >
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            maxWidth: '1000px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
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
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#374151',
                fontWeight: '300'
              }}
            >×</button>
            
            {/* Header Image */}
            <div style={{ position: 'relative' }}>
              <img 
                src={selectedCollege.image} 
                alt={selectedCollege.name} 
                style={{ 
                  width: '100%', 
                  height: '240px', 
                  objectFit: 'cover' 
                }} 
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '40px',
                background: 'rgba(255,255,255,0.95)',
                padding: '16px 24px',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                <h2 style={{ 
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  letterSpacing: '-0.5px',
                  margin: 0
                }}>{selectedCollege.name}</h2>
                <p style={{ 
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: '4px 0 0 0'
                }}>📍 {selectedCollege.location} • Est. {selectedCollege.established}</p>
              </div>
            </div>
            
            {/* Tabs */}
            <div style={{
              borderBottom: '1px solid #e5e7eb',
              padding: '0 40px',
              background: '#fff',
              display: 'flex',
              gap: '32px'
            }}>
              {['overview', 'courses', 'placement', 'hostel'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '16px 0',
                    background: 'none',
                    border: 'none',
                    borderBottom: activeTab === tab ? '3px solid #1a1a1a' : '3px solid transparent',
                    color: activeTab === tab ? '#1a1a1a' : '#6b7280',
                    fontWeight: activeTab === tab ? '600' : '500',
                    fontSize: '14px',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    transition: 'all 0.2s'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div style={{ padding: '40px' }}>
              {activeTab === 'overview' && (
                <div>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                    gap: '16px',
                    marginBottom: '32px'
                  }}>
                    <div style={{
                      padding: '20px',
                      background: '#f0fdf4',
                      borderRadius: '12px',
                      border: '1px solid #bbf7d0'
                    }}>
                      <p style={{ fontSize: '12px', color: '#15803d', marginBottom: '4px', fontWeight: '600' }}>TYPE</p>
                      <p style={{ fontSize: '18px', fontWeight: '700', color: '#166534' }}>{selectedCollege.type}</p>
                    </div>
                    <div style={{
                      padding: '20px',
                      background: '#fef3c7',
                      borderRadius: '12px',
                      border: '1px solid #fde047'
                    }}>
                      <p style={{ fontSize: '12px', color: '#92400e', marginBottom: '4px', fontWeight: '600' }}>RATING</p>
                      <p style={{ fontSize: '18px', fontWeight: '700', color: '#92400e' }}>★ {selectedCollege.rating}/5</p>
                    </div>
                    <div style={{
                      padding: '20px',
                      background: '#eff6ff',
                      borderRadius: '12px',
                      border: '1px solid #dbeafe'
                    }}>
                      <p style={{ fontSize: '12px', color: '#1e40af', marginBottom: '4px', fontWeight: '600' }}>FACULTY</p>
                      <p style={{ fontSize: '18px', fontWeight: '700', color: '#1e40af' }}>{selectedCollege.faculty.total} Members</p>
                    </div>
                  </div>

                  <div style={{ marginBottom: '32px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '12px' }}>Streams Offered</h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {selectedCollege.stream.map((s, idx) => (
                        <span key={idx} style={{
                          background: '#fef3c7',
                          color: '#92400e',
                          padding: '8px 16px',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '600',
                          border: '1px solid #fde047'
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    padding: '24px',
                    background: '#f9fafb',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px' }}>Faculty Details</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                      <div>
                        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Total Faculty</p>
                        <p style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>{selectedCollege.faculty.total}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>PhD Holders</p>
                        <p style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>{selectedCollege.faculty.phd}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Avg Experience</p>
                        <p style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a' }}>{selectedCollege.faculty.experience}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'courses' && (
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>Available Courses</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                    {selectedCollege.courses.map((course, idx) => (
                      <div key={idx} style={{
                        padding: '20px',
                        background: '#fff',
                        borderRadius: '12px',
                        border: '1px solid #e5e7eb',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                      >
                        <p style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>{course}</p>
                        <p style={{ fontSize: '13px', color: '#6b7280' }}>3 Years • Full Time</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'placement' && (
                <div>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '20px',
                    marginBottom: '32px'
                  }}>
                    <div style={{
                      padding: '24px',
                      background: '#f0fdf4',
                      borderRadius: '12px',
                      border: '1px solid #bbf7d0'
                    }}>
                      <p style={{ fontSize: '12px', color: '#15803d', marginBottom: '8px', fontWeight: '600' }}>PLACEMENT RATE</p>
                      <p style={{ fontSize: '32px', fontWeight: '700', color: '#166534' }}>{selectedCollege.placement.percentage}</p>
                    </div>
                    <div style={{
                      padding: '24px',
                      background: '#eff6ff',
                      borderRadius: '12px',
                      border: '1px solid #dbeafe'
                    }}>
                      <p style={{ fontSize: '12px', color: '#1e40af', marginBottom: '8px', fontWeight: '600' }}>AVG PACKAGE</p>
                      <p style={{ fontSize: '32px', fontWeight: '700', color: '#1e40af' }}>{selectedCollege.placement.avgPackage}</p>
                    </div>
                    <div style={{
                      padding: '24px',
                      background: '#fef3c7',
                      borderRadius: '12px',
                      border: '1px solid #fde047'
                    }}>
                      <p style={{ fontSize: '12px', color: '#92400e', marginBottom: '8px', fontWeight: '600' }}>TOP PACKAGE</p>
                      <p style={{ fontSize: '32px', fontWeight: '700', color: '#92400e' }}>{selectedCollege.placement.topPackage}</p>
                    </div>
                  </div>

                  <div style={{
                    padding: '24px',
                    background: '#f9fafb',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px' }}>Top Recruiters</h4>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {selectedCollege.placement.topRecruiters.map((company, idx) => (
                        <span key={idx} style={{
                          padding: '10px 20px',
                          background: '#fff',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1a1a1a'
                        }}>{company}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'hostel' && (
                <div>
                  {selectedCollege.hostel.available ? (
                    <>
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                        gap: '20px',
                        marginBottom: '32px'
                      }}>
                        <div style={{
                          padding: '24px',
                          background: '#eff6ff',
                          borderRadius: '12px',
                          border: '1px solid #dbeafe'
                        }}>
                          <p style={{ fontSize: '12px', color: '#1e40af', marginBottom: '8px', fontWeight: '600' }}>CAPACITY</p>
                          <p style={{ fontSize: '32px', fontWeight: '700', color: '#1e40af' }}>{selectedCollege.hostel.capacity}</p>
                        </div>
                        <div style={{
                          padding: '24px',
                          background: '#f0fdf4',
                          borderRadius: '12px',
                          border: '1px solid #bbf7d0'
                        }}>
                          <p style={{ fontSize: '12px', color: '#15803d', marginBottom: '8px', fontWeight: '600' }}>HOSTEL FEES</p>
                          <p style={{ fontSize: '24px', fontWeight: '700', color: '#166534' }}>{selectedCollege.hostel.fees}</p>
                        </div>
                      </div>

                      <div style={{
                        padding: '24px',
                        background: '#f9fafb',
                        borderRadius: '12px',
                        border: '1px solid #e5e7eb'
                      }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px' }}>Hostel Facilities</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '12px' }}>
                          {selectedCollege.hostel.facilities.map((facility, idx) => (
                            <div key={idx} style={{
                              padding: '12px 16px',
                              background: '#fff',
                              border: '1px solid #e5e7eb',
                              borderRadius: '8px',
                              fontSize: '14px',
                              fontWeight: '500',
                              color: '#374151',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}>
                              <span style={{ fontSize: '16px' }}>✓</span>
                              {facility}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div style={{
                      padding: '60px',
                      textAlign: 'center',
                      background: '#fef2f2',
                      borderRadius: '12px',
                      border: '1px solid #fecaca'
                    }}>
                      <p style={{ fontSize: '16px', color: '#991b1b', fontWeight: '600' }}>Hostel facility not available</p>
                      <p style={{ fontSize: '14px', color: '#b91c1c', marginTop: '8px' }}>Students need to arrange their own accommodation</p>
                    </div>
                  )}
                </div>
              )}

              <button style={{
                width: '100%',
                padding: '16px',
                background: '#1a1a1a',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '32px',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#374151'}
              onMouseLeave={(e) => e.target.style.background = '#1a1a1a'}
              >
                Contact College
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}