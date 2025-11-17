import { useState } from 'react';

const PRIMARY_COLOR = '#6F61C1'; // आपका गहरा बैंगनी/नीला रंग
const ACCENT_COLOR = '#FFC107'; // हाइलाइट के लिए नारंगी
const LIGHT_BG_COLOR = '#f8f6fb'; // सेक्शन बैकग्राउंड
// HERO_GRADIENT_END अब उपयोग नहीं किया जाएगा

export default function StudyResources() {
  const [activeTab, setActiveTab] = useState('class');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedExam, setSelectedExam] = useState('all');

  // --- Study Resources Data (वही रखा गया है) ---
  const classResources = [
    {
      id: 1,
      class: '9',
      subject: 'Mathematics',
      title: 'Complete Mathematics Notes - Class 9',
      type: 'PDF Notes',
      pages: 120,
      size: '5.2 MB',
      downloads: 1523,
      thumbnail: '/assets/img/resources/math9.jpg',
    },
    {
      id: 2,
      class: '10',
      subject: 'Science',
      title: 'CBSE Class 10 Science Complete Guide',
      type: 'eBook',
      pages: 250,
      size: '8.5 MB',
      downloads: 2341,
      thumbnail: '/assets/img/resources/science10.jpg',
    },
    {
      id: 3,
      class: '11',
      subject: 'Physics',
      title: 'Physics Notes with Solved Examples - Class 11',
      type: 'PDF Notes',
      pages: 180,
      size: '6.8 MB',
      downloads: 1876,
      thumbnail: '/assets/img/resources/physics11.jpg',
    },
    {
      id: 4,
      class: '12',
      subject: 'Chemistry',
      title: 'Complete Chemistry Study Material - Class 12',
      type: 'eBook',
      pages: 300,
      size: '12.3 MB',
      downloads: 3421,
      thumbnail: '/assets/img/resources/chemistry12.jpg',
    },
    {
      id: 5,
      class: '12',
      subject: 'Mathematics',
      title: 'Advanced Mathematics - Class 12 CBSE',
      type: 'PDF Notes',
      pages: 220,
      size: '9.1 MB',
      downloads: 2987,
      thumbnail: '/assets/img/resources/math12.jpg',
    },
    {
      id: 6,
      class: 'UG',
      subject: 'Engineering',
      title: 'Engineering Mathematics - Semester 1',
      type: 'eBook',
      pages: 400,
      size: '15.6 MB',
      downloads: 1654,
      thumbnail: '/assets/img/resources/eng-math.jpg',
    },
  ];

  const examResources = [
    {
      id: 1,
      exam: 'JEE',
      title: 'JEE Main Complete Study Package 2024',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      type: 'Complete Guide',
      size: '25.4 MB',
      downloads: 5432,
      thumbnail: '/assets/img/resources/jee.jpg',
    },
    {
      id: 2,
      exam: 'NEET',
      title: 'NEET Biology - Chapter-wise Notes',
      subjects: ['Biology', 'Chemistry', 'Physics'],
      type: 'PDF Notes',
      size: '18.2 MB',
      downloads: 4876,
      thumbnail: '/assets/img/resources/neet.jpg',
    },
    {
      id: 3,
      exam: 'UPSC',
      title: 'UPSC Prelims General Studies Complete Material',
      subjects: ['History', 'Geography', 'Polity'],
      type: 'eBook',
      size: '32.7 MB',
      downloads: 3214,
      thumbnail: '/assets/img/resources/upsc.jpg',
    },
    {
      id: 4,
      exam: 'SSC',
      title: 'SSC CGL Previous Year Papers (2010-2023)',
      subjects: ['Reasoning', 'Mathematics', 'English'],
      type: 'Question Papers',
      size: '12.5 MB',
      downloads: 2987,
      thumbnail: '/assets/img/resources/ssc.jpg',
    },
    {
      id: 5,
      exam: 'CBSE',
      title: 'CBSE Board Exam Sample Papers 2024',
      subjects: ['All Subjects'],
      type: 'Sample Papers',
      size: '8.9 MB',
      downloads: 6543,
      thumbnail: '/assets/img/resources/cbse.jpg',
    },
    {
      id: 6,
      exam: 'UP Board',
      title: 'UP Board Class 12 Previous Year Papers',
      subjects: ['All Subjects'],
      type: 'Question Papers',
      size: '10.2 MB',
      downloads: 4321,
      thumbnail: '/assets/img/resources/upboard.jpg',
    },
  ];

  const previousPapers = [
    {
      id: 1,
      exam: 'JEE Main',
      year: '2023',
      shift: 'All Shifts',
      size: '4.2 MB',
      downloads: 3421,
    },
    {
      id: 2,
      exam: 'NEET',
      year: '2023',
      shift: 'Single',
      size: '3.8 MB',
      downloads: 2987,
    },
    {
      id: 3,
      exam: 'CBSE Class 10',
      year: '2023',
      shift: 'All Subjects',
      size: '5.6 MB',
      downloads: 5432,
    },
    {
      id: 4,
      exam: 'CBSE Class 12',
      year: '2023',
      shift: 'All Subjects',
      size: '6.4 MB',
      downloads: 4876,
    },
  ];

  const classes = ['9', '10', '11', '12', 'UG'];
  const exams = ['JEE', 'NEET', 'UPSC', 'SSC', 'CBSE', 'UP Board'];
  
  // Filtering Logic (वही है)
  const filteredClassResources = classResources.filter((resource) => {
    const matchesClass = selectedClass === 'all' || resource.class === selectedClass;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesClass && matchesSearch;
  });

  const filteredExamResources = examResources.filter((resource) => {
    const matchesExam = selectedExam === 'all' || resource.exam === selectedExam;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesExam && matchesSearch;
  });

  // Helper function to format downloads
  const formatDownloads = (num) => {
      if (num >= 1000) {
          return (num / 1000).toFixed(1) + 'k+';
      }
      return num;
  };

  return (
    <main className="study-resources-page">
      <style jsx global>{`
        :root {
          --primary-color: ${PRIMARY_COLOR};
          --accent-color: ${ACCENT_COLOR};
          --light-bg-color: ${LIGHT_BG_COLOR};
        }
      `}</style>

      {/* Breadcrumb */}
      <section className="breadcrumb-area py-3" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
               {/* Breadcrumb content will go here if needed */}
            </ol>
          </nav>
        </div>
      </section>

      {/* Primary Search/Title Bar (New addition to replace hero section functionality partially) */}
      <section className="search-title-bar py-4" style={{ background: LIGHT_BG_COLOR }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h2 className="mb-3 text-center fw-bold" style={{ color: PRIMARY_COLOR }}>
                    Study Resources & Exam Prep Material
                </h2>
                <div className="search-box position-relative">
                    <input
                        type="text"
                        className="form-control form-control-lg shadow-sm border-0"
                        placeholder="Search by topic, class, or exam..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ paddingLeft: '50px', borderRadius: '50px' }}
                    />
                    <i
                        className="fas fa-search position-absolute"
                        style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', color: PRIMARY_COLOR }}
                    ></i>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Main Tabs (Navigation - डिज़ाइन स्टाइल) */}
      <section className="tabs-section py-4 shadow-sm" style={{ background: '#ffffff' }}>
        <div className="container">
          <ul className="nav nav-pills nav-fill resource-tabs mb-0"> {/* mb-4 removed */}
            <li className="nav-item mx-1 my-1">
              <button
                className={`nav-link ${activeTab === 'class' ? 'active' : ''}`}
                onClick={() => setActiveTab('class')}
              >
                <i className="fas fa-book-open me-2"></i>
                **Class Resources**
              </button>
            </li>
            <li className="nav-item mx-1 my-1">
              <button
                className={`nav-link ${activeTab === 'exam' ? 'active' : ''}`}
                onClick={() => setActiveTab('exam')}
              >
                <i className="fas fa-graduation-cap me-2"></i>
                **Exam Prep**
              </button>
            </li>
            <li className="nav-item mx-1 my-1">
              <button
                className={`nav-link ${activeTab === 'papers' ? 'active' : ''}`}
                onClick={() => setActiveTab('papers')}
              >
                <i className="fas fa-file-pdf me-2"></i>
                **Previous Papers**
              </button>
            </li>
          </ul>
        </div>
      </section>

      {/* --- Tab Content --- */}

      {/* Class-wise Resources Tab */}
      {activeTab === 'class' && (
        <section className="py-5" style={{ background: LIGHT_BG_COLOR }}>
          <div className="container">
            <h2 className="mb-5 text-center fw-bold" style={{ color: PRIMARY_COLOR }}>
                📚 Class-wise Materials <span className="text-muted">(9-UG)</span>
            </h2>
            {/* Class Filter */}
            <div className="filter-section mb-5 text-center">
              <h5 className="mb-3 text-muted">Select Class:</h5>
              <div className="btn-group flex-wrap justify-content-center" role="group" style={{ gap: '10px' }}>
                <button
                  className={`btn ${
                    selectedClass === 'all' ? 'btn-primary-custom active' : 'btn-outline-primary-custom'
                  }`}
                  onClick={() => setSelectedClass('all')}
                >
                  All Classes
                </button>
                {classes.map((cls) => (
                  <button
                    key={cls}
                    className={`btn ${
                      selectedClass === cls ? 'btn-primary-custom active' : 'btn-outline-primary-custom'
                    }`}
                    onClick={() => setSelectedClass(cls)}
                  >
                    Class **{cls}**
                  </button>
                ))}
              </div>
            </div>

            <div className="row g-5">
              {filteredClassResources.length > 0 ? (
                filteredClassResources.map((resource) => (
                  <div key={resource.id} className="col-lg-4 col-md-6">
                    <div className="resource-card card h-100 border-0 shadow-lg news-card">
                      
                      <div className="resource-thumbnail">
                        <img src={resource.thumbnail} alt={resource.title} />
                        <span className="card-badge">Class {resource.class}</span>
                      </div>

                      <div className="card-body pb-0">
                        <span className="subject-tag">{resource.subject}</span>
                        <h5 className="card-title mt-2 mb-3 fw-bolder text-dark news-title">{resource.title}</h5>
                        
                        <div className="resource-info mb-3">
                          <div className="info-item">
                            <i className="fas fa-file-alt text-muted"></i>
                            <span>Type: **{resource.type}**</span>
                          </div>
                          <div className="info-item">
                            <i className="fas fa-file-pdf text-danger"></i>
                            <span>{resource.pages} pages</span>
                          </div>
                        </div>

                      </div>
                      <div className="card-footer bg-transparent border-0 pt-0 d-flex justify-content-between align-items-center">
                         <div className="info-item-footer">
                            <i className="fas fa-download me-1" style={{ color: ACCENT_COLOR }}></i>
                            <span className="fw-bold text-dark">{formatDownloads(resource.downloads)} Downloads</span>
                          </div>
                          <button className="btn btn-sm btn-primary-custom-light">
                            <i className="fas fa-cloud-download-alt me-1"></i>
                            Get
                          </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p className="lead text-muted"><i className="fas fa-info-circle me-2"></i>No resources found for the selected criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Exam Preparation Resources Tab */}
      {activeTab === 'exam' && (
        <section className="py-5" style={{ background: LIGHT_BG_COLOR }}>
          <div className="container">
            <h2 className="mb-5 text-center fw-bold" style={{ color: PRIMARY_COLOR }}>
                🏆 Exam Preparation Guides
            </h2>
            {/* Exam Filter */}
            <div className="filter-section mb-5 text-center">
              <h5 className="mb-3 text-muted">Select Exam:</h5>
              <div className="btn-group flex-wrap justify-content-center" role="group" style={{ gap: '10px' }}>
                <button
                  className={`btn ${
                    selectedExam === 'all' ? 'btn-primary-custom active' : 'btn-outline-primary-custom'
                  }`}
                  onClick={() => setSelectedExam('all')}
                >
                  All Exams
                </button>
                {exams.map((exam) => (
                  <button
                    key={exam}
                    className={`btn ${
                      selectedExam === exam ? 'btn-primary-custom active' : 'btn-outline-primary-custom'
                    }`}
                    onClick={() => setSelectedExam(exam)}
                  >
                    **{exam}**
                  </button>
                ))}
              </div>
            </div>

            <div className="row g-5">
              {filteredExamResources.length > 0 ? (
                filteredExamResources.map((resource) => (
                  <div key={resource.id} className="col-lg-4 col-md-6">
                    <div className="resource-card card h-100 border-0 shadow-lg news-card">
                       <div className="resource-thumbnail">
                        <img src={resource.thumbnail} alt={resource.title} />
                        <span className="card-badge">{resource.exam}</span>
                      </div>
                      <div className="card-body pb-0">
                        <h5 className="card-title mb-2 fw-bolder text-dark news-title">{resource.title}</h5>
                        <div className="subjects-list mb-3 mt-2">
                          {resource.subjects.map((subject, idx) => (
                            <span key={idx} className="subject-pill-dark me-2 mb-1">{subject}</span>
                          ))}
                        </div>
                        
                        <div className="resource-info mb-3">
                          <div className="info-item">
                            <i className="fas fa-book text-muted"></i>
                            <span>Content: **{resource.type}**</span>
                          </div>
                          <div className="info-item">
                            <i className="fas fa-hdd text-muted"></i>
                            <span>Size: {resource.size}</span>
                          </div>
                        </div>

                      </div>
                       <div className="card-footer bg-transparent border-0 pt-0 d-flex justify-content-between align-items-center">
                         <div className="info-item-footer">
                            <i className="fas fa-download me-1" style={{ color: ACCENT_COLOR }}></i>
                            <span className="fw-bold text-dark">{formatDownloads(resource.downloads)} Downloads</span>
                          </div>
                          <button className="btn btn-sm btn-primary-custom-light">
                            <i className="fas fa-cloud-download-alt me-1"></i>
                            Download
                          </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p className="lead text-muted"><i className="fas fa-info-circle me-2"></i>No exam resources found.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Previous Year Papers Tab */}
      {activeTab === 'papers' && (
        <section className="py-5">
          <div className="container">
            <h2 className="mb-5 text-center fw-bold" style={{ color: PRIMARY_COLOR }}>
              📄 Previous Year Question Papers (PYQs)
            </h2>
            <div className="table-responsive">
              <table className="table table-striped table-bordered papers-table shadow-lg rounded-3 overflow-hidden">
                <thead style={{ backgroundColor: PRIMARY_COLOR, color: '#fff' }}>
                  <tr>
                    <th className="py-3">Exam</th>
                    <th className="py-3">Year</th>
                    <th className="py-3">Shift/Subjects</th>
                    <th className="py-3">Size</th>
                    <th className="py-3">Downloads</th>
                    <th className="py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {previousPapers.map((paper) => (
                    <tr key={paper.id} className="align-middle">
                      <td className="fw-bold text-dark">{paper.exam}</td>
                      <td>{paper.year}</td>
                      <td>{paper.shift}</td>
                      <td>{paper.size}</td>
                      <td>
                        <i className="fas fa-chart-line me-1 text-success"></i>
                        <span className="fw-semibold">{formatDownloads(paper.downloads)}</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-primary-custom-light">
                          <i className="fas fa-download me-1"></i>
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        /* Custom Primary Color Application */
        .btn-primary-custom {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
          border-radius: 25px;
          padding: 8px 20px;
          transition: all 0.3s ease;
        }

        .btn-primary-custom:hover, .btn-primary-custom.active {
          background-color: #5d4e9c; /* थोड़ा गहरा शेड */
          border-color: #5d4e9c;
          color: white;
          transform: translateY(-2px);
        }
        
        /* New button for cards (lighter shade on hover) */
        .btn-primary-custom-light {
             background-color: var(--primary-color);
             border-color: var(--primary-color);
             color: white;
             transition: all 0.3s ease;
        }

        .btn-primary-custom-light:hover {
            background-color: ${ACCENT_COLOR};
            border-color: ${ACCENT_COLOR};
            color: var(--primary-color);
        }


        .btn-outline-primary-custom {
          color: var(--primary-color);
          border-color: var(--primary-color);
          border-radius: 25px;
          padding: 8px 20px;
        }

        .btn-outline-primary-custom:hover {
          background-color: var(--primary-color);
          color: white;
        }

        /* Tabs Styling (डिज़ाइन स्टाइल) */
        .resource-tabs .nav-link {
          border-radius: 10px;
          font-weight: 600;
          padding: 15px 20px;
          color: #555;
          transition: all 0.3s ease;
          background: #f1f1f1; /* Light background for non-active */
        }

        .resource-tabs .nav-link.active {
          background: var(--primary-color);
          color: white;
          box-shadow: 0 4px 10px rgba(111, 97, 193, 0.4);
          transform: translateY(-2px);
        }
        
        /* News-like Card Styling */
        .news-card {
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .news-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1) !important;
        }
        
        .news-title {
            font-size: 1.25rem;
            line-height: 1.4;
            min-height: 60px; /* Consistent height for titles */
        }

        .resource-thumbnail {
          position: relative;
          height: 220px;
          overflow: hidden;
          border-radius: 10px 10px 0 0;
        }

        .resource-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .news-card:hover .resource-thumbnail img {
            transform: scale(1.05);
        }

        .card-badge { /* Class/Exam Badge */
          position: absolute;
          top: 15px;
          left: 15px; /* Position change to left */
          background: ${ACCENT_COLOR}; /* नारंगी रंग */
          color: ${PRIMARY_COLOR};
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .subject-tag {
          display: inline-block;
          background: var(--primary-color); 
          color: white;
          padding: 5px 15px;
          border-radius: 15px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .subject-pill-dark {
          background: #e0e0e0;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 11px;
          font-weight: 600;
          color: #444;
          display: inline-block;
        }

        .resource-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 10px;
          border-top: 1px dashed #eee;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #666;
        }
        
        .info-item-footer {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 15px;
        }
        
        /* Table Styling */
        .papers-table {
            border-collapse: separate;
            border-spacing: 0;
        }
        .papers-table th:first-child { border-top-left-radius: 10px; }
        .papers-table th:last-child { border-top-right-radius: 10px; }
        .papers-table td, .papers-table th {
            padding: 15px;
            border-color: #f1f1f1;
        }
        
        /* Decorative Circles for Hero Section (Removed, but kept classes empty for reference) */
        .circle { pointer-events: none; z-index: 0; }
        .circle-lg { }
        .circle-md { }
        .circle-sm { }

      `}</style>
    </main>
  );
}