import React from 'react';

export default function Universities() {
  const [universities, setUniversities] = React.useState([
    {
      id: 1,
      name: "University of Delhi",
      location: "Delhi",
      type: "Central University",
      established: 1922,
      ranking: "#12 in India",
      departments: [
        { name: "Science & Technology", courses: 45 },
        { name: "Arts & Humanities", courses: 38 },
        { name: "Commerce & Management", courses: 22 },
        { name: "Social Sciences", courses: 28 }
      ],
      researchAreas: ["Artificial Intelligence", "Biotechnology", "Environmental Science", "Economics", "Literature"],
      notifications: [
        { id: 1, title: "PhD Admission 2025 - Applications Open", date: "2025-01-15", type: "Admission" },
        { id: 2, title: "Annual Convocation Scheduled", date: "2025-02-20", type: "Event" },
        { id: 3, title: "Research Grant Applications Extended", date: "2025-01-10", type: "Research" }
      ],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      accreditation: "NAAC A++",
      totalStudents: 132000
    },
    {
      id: 2,
      name: "Jawaharlal Nehru University",
      location: "Delhi",
      type: "Central University",
      established: 1969,
      ranking: "#3 in India",
      departments: [
        { name: "International Studies", courses: 25 },
        { name: "Sciences", courses: 35 },
        { name: "Languages", courses: 42 },
        { name: "Social Sciences", courses: 30 }
      ],
      researchAreas: ["International Relations", "Molecular Biology", "Sanskrit Studies", "Political Science", "Physics"],
      notifications: [
        { id: 1, title: "MPhil/PhD Entrance Exam Results", date: "2025-01-18", type: "Results" },
        { id: 2, title: "International Conference on Climate Change", date: "2025-03-05", type: "Event" },
        { id: 3, title: "Faculty Recruitment Drive", date: "2025-01-12", type: "Recruitment" }
      ],
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      accreditation: "NAAC A++",
      totalStudents: 8500
    },
    {
      id: 3,
      name: "Indian Institute of Science",
      location: "Bangalore",
      type: "Institute of Eminence",
      established: 1909,
      ranking: "#1 in India",
      departments: [
        { name: "Engineering", courses: 28 },
        { name: "Pure Sciences", courses: 32 },
        { name: "Interdisciplinary Research", courses: 18 },
        { name: "Management", courses: 8 }
      ],
      researchAreas: ["Quantum Computing", "Aerospace", "Materials Science", "Data Science", "Neuroscience"],
      notifications: [
        { id: 1, title: "MTech Admission 2025 - Apply Now", date: "2025-01-20", type: "Admission" },
        { id: 2, title: "Research Funding Opportunities", date: "2025-01-08", type: "Research" },
        { id: 3, title: "Alumni Meet 2025", date: "2025-02-15", type: "Event" }
      ],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      accreditation: "NAAC A++",
      totalStudents: 4500
    },
    {
      id: 4,
      name: "University of Mumbai",
      location: "Mumbai",
      type: "State University",
      established: 1857,
      ranking: "#18 in India",
      departments: [
        { name: "Technology", courses: 40 },
        { name: "Arts & Commerce", courses: 55 },
        { name: "Science", courses: 38 },
        { name: "Law", courses: 15 }
      ],
      researchAreas: ["Urban Planning", "Marine Biology", "Film Studies", "Financial Economics", "Chemistry"],
      notifications: [
        { id: 1, title: "UG Admission Portal Now Live", date: "2025-01-22", type: "Admission" },
        { id: 2, title: "Sports Festival Registration Open", date: "2025-01-14", type: "Event" },
        { id: 3, title: "Exam Schedule Released", date: "2025-01-05", type: "Examination" }
      ],
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800",
      accreditation: "NAAC A+",
      totalStudents: 500000
    }
  ]);

  const [filters, setFilters] = React.useState({
    type: "",
    location: ""
  });

  const [selectedUniversity, setSelectedUniversity] = React.useState(null);
  const [showProfile, setShowProfile] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("overview");

  const types = [...new Set(universities.map(u => u.type))];
  const locations = [...new Set(universities.map(u => u.location))];

  const filteredUniversities = universities.filter(university => {
    if (filters.type && university.type !== filters.type) return false;
    if (filters.location && university.location !== filters.location) return false;
    return true;
  });

  const openProfile = (university) => {
    setSelectedUniversity(university);
    setShowProfile(true);
    setActiveTab("overview");
  };

  const getNotificationColor = (type) => {
    const colors = {
      'Admission': { bg: '#dbeafe', text: '#1e40af', border: '#93c5fd' },
      'Event': { bg: '#fef3c7', text: '#92400e', border: '#fde047' },
      'Research': { bg: '#dcfce7', text: '#166534', border: '#bbf7d0' },
      'Results': { bg: '#e0e7ff', text: '#3730a3', border: '#c7d2fe' },
      'Recruitment': { bg: '#fce7f3', text: '#831843', border: '#fbcfe8' },
      'Examination': { bg: '#fed7aa', text: '#9a3412', border: '#fdba74' }
    };
    return colors[type] || { bg: '#f3f4f6', text: '#374151', border: '#d1d5db' };
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
          }}>Universities Directory</h1>
          <p style={{ 
            fontSize: '14px', 
            color: '#6b7280', 
            margin: '4px 0 0 0' 
          }}>Discover premier universities across India</p>
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
              }}>University Type</label>
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
              onClick={() => setFilters({ type: "", location: "" })}
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
                Showing <strong>{filteredUniversities.length}</strong> universities
              </p>
            </div>
          </aside>

          {/* Main Content */}
          <div>
            {/* Universities List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {filteredUniversities.map(university => (
                <article key={university.id} style={{
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
                onClick={() => openProfile(university)}
                >
                  <img 
                    src={university.image} 
                    alt={university.name} 
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
                        }}>{university.name}</h3>
                        <div style={{
                          background: '#fef3c7',
                          color: '#92400e',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '700',
                          flexShrink: 0
                        }}>
                          {university.ranking}
                        </div>
                      </div>
                      <p style={{ 
                        fontSize: '13px', 
                        color: '#6b7280',
                        marginBottom: '12px'
                      }}>📍 {university.location} • Est. {university.established}</p>
                      
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                        <span style={{
                          background: '#eff6ff',
                          color: '#1e40af',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>{university.type}</span>
                        <span style={{
                          background: '#dcfce7',
                          color: '#166534',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}>{university.accreditation}</span>
                      </div>

                      <p style={{ 
                        fontSize: '13px', 
                        color: '#4b5563',
                        lineHeight: '1.5'
                      }}>
                        <strong>{university.departments.length} departments</strong> • {university.totalStudents.toLocaleString()} students
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
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{
                          background: '#fef2f2',
                          color: '#991b1b',
                          padding: '4px 8px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: '600'
                        }}>
                          {university.notifications.length} New Updates
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

              {filteredUniversities.length === 0 && (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '60px 20px',
                  background: '#fff',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb'
                }}>
                  <p style={{ fontSize: '16px', color: '#6b7280' }}>No universities found matching your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfile && selectedUniversity && (
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
            maxWidth: '1100px',
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
                src={selectedUniversity.image} 
                alt={selectedUniversity.name} 
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
                }}>{selectedUniversity.name}</h2>
                <p style={{ 
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: '4px 0 0 0'
                }}>📍 {selectedUniversity.location} • Est. {selectedUniversity.established}</p>
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
              {['overview', 'departments', 'research', 'notifications'].map(tab => (
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '16px',
                    marginBottom: '32px'
                  }}>
                    <div style={{
                      padding: '20px',
                      background: '#fef3c7',
                      borderRadius: '12px',
                      border: '1px solid #fde047'
                    }}>
                      <p style={{ fontSize: '12px', color: '#92400e', marginBottom: '4px', fontWeight: '600' }}>RANKING</p>
                      <p style={{ fontSize: '18px', fontWeight: '700', color: '#92400e' }}>{selectedUniversity.ranking}</p>
                    </div>
                    <div style={{
                      padding: '20px',
                      background: '#eff6ff',
                      borderRadius: '12px',
                      border: '1px solid #dbeafe'
                    }}>
                      <p style={{ fontSize: '12px', color: '#1e40af', marginBottom: '4px', fontWeight: '600' }}>TYPE</p>
                      <p style={{ fontSize: '16px', fontWeight: '700', color: '#1e40af' }}>{selectedUniversity.type}</p>
                    </div>
                    <div style={{
                      padding: '20px',
                      background: '#dcfce7',
                      borderRadius: '12px',
                      border: '1px solid #bbf7d0'
                    }}>
                      <p style={{ fontSize: '12px', color: '#166534', marginBottom: '4px', fontWeight: '600' }}>ACCREDITATION</p>
                      <p style={{ fontSize: '18px', fontWeight: '700', color: '#166534' }}>{selectedUniversity.accreditation}</p>
                    </div>
                    <div style={{
                      padding: '20px',
                      background: '#f3f4f6',
                      borderRadius: '12px',
                      border: '1px solid #d1d5db'
                    }}>
                      <p style={{ fontSize: '12px', color: '#374151', marginBottom: '4px', fontWeight: '600' }}>STUDENTS</p>
                      <p style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a' }}>{selectedUniversity.totalStudents.toLocaleString()}</p>
                    </div>
                  </div>

                  <div style={{
                    padding: '24px',
                    background: '#f9fafb',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    marginBottom: '24px'
                  }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '16px' }}>Quick Stats</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                      <div>
                        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Total Departments</p>
                        <p style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a' }}>{selectedUniversity.departments.length}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>Research Areas</p>
                        <p style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a' }}>{selectedUniversity.researchAreas.length}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '12px' }}>About</h4>
                    <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.7' }}>
                      {selectedUniversity.name} is a prestigious {selectedUniversity.type.toLowerCase()} established in {selectedUniversity.established}. 
                      With {selectedUniversity.departments.length} departments and {selectedUniversity.totalStudents.toLocaleString()} students, 
                      it stands as one of India's premier institutions of higher education, ranked {selectedUniversity.ranking}.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'departments' && (
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>Academic Departments</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                    {selectedUniversity.departments.map((dept, idx) => (
                      <div key={idx} style={{
                        padding: '24px',
                        background: '#fff',
                        borderRadius: '12px',
                        border: '1px solid #e5e7eb',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#d1d5db';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      >
                        <h5 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '12px' }}>{dept.name}</h5>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{
                            background: '#eff6ff',
                            color: '#1e40af',
                            padding: '4px 12px',
                            borderRadius: '6px',
                            fontSize: '13px',
                            fontWeight: '600'
                          }}>{dept.courses} Courses</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'research' && (
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>Key Research Areas</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {selectedUniversity.researchAreas.map((area, idx) => (
                      <div key={idx} style={{
                        padding: '12px 20px',
                        background: '#dcfce7',
                        border: '1px solid #bbf7d0',
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#166534',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#bbf7d0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#dcfce7';
                      }}
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                  <div style={{
                    marginTop: '32px',
                    padding: '24px',
                    background: '#f9fafb',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <h5 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '12px' }}>Research Highlights</h5>
                    <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.7' }}>
                      The university is at the forefront of research and innovation, with dedicated centers focusing on cutting-edge fields. 
                      Faculty and students collaborate on groundbreaking projects that contribute to national and international knowledge advancement.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>Official Notifications</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {selectedUniversity.notifications.map(notification => {
                      const colors = getNotificationColor(notification.type);
                      return (
                        <div key={notification.id} style={{
                          padding: '20px',
                          background: '#fff',
                          borderRadius: '12px',
                          border: '1px solid #e5e7eb',
                          transition: 'all 0.2s',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#d1d5db';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e5e7eb';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        >
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                              <span style={{
                                background: colors.bg,
                                color: colors.text,
                                padding: '4px 12px',
                                borderRadius: '6px',
                                fontSize: '12px',
                                fontWeight: '700',
                                border: `1px solid ${colors.border}`
                              }}>{notification.type}</span>
                              <span style={{
                                fontSize: '13px',
                                color: '#6b7280',
                                fontWeight: '500'
                              }}>{notification.date}</span>
                            </div>
                            <h5 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', margin: 0 }}>
                              {notification.title}
                            </h5>
                          </div>
                          <button style={{
                            padding: '8px 16px',
                            background: '#1a1a1a',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '13px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                          }}
                          onMouseEnter={(e) => e.target.style.background = '#374151'}
                          onMouseLeave={(e) => e.target.style.background = '#1a1a1a'}
                          >
                            View Details
                          </button>
                        </div>
                      );
                    })}
                  </div>
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
                Visit Official Website
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}