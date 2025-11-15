import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PRIMARY_COLOR = '#6F61C1'; // आपका गहरा बैंगनी/नीला रंग
const ACCENT_COLOR = '#FFC107'; // हाइलाइट के लिए नारंगी
const LIGHT_BG_COLOR = '#f8f6fb'; // सेक्शन बैकग्राउंड
const HERO_GRADIENT_END = '#5d4e9c'; // Hero Section ग्रेडिएंट के लिए थोड़ा गहरा शेड

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
              {/* <li className="breadcrumb-item">
                <Link to="/" style={{ color: PRIMARY_COLOR }}>
                  Home
                </Link> */}
              {/* </li>
              <li className="breadcrumb-item active" aria-current="page">
                Study Resources
              </li> */}
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section (डिज़ाइन से मिलता-जुलता + बबल्स) */}
      <section
        className="resources-hero py-5 text-white text-center position-relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${HERO_GRADIENT_END} 100%)` }}
      >
        {/* Decorative Circles (जैसे डिज़ाइन में हैं) */}
        <div className="circle circle-lg position-absolute top-0 start-0 translate-middle opacity-25"></div>
        <div className="circle circle-md position-absolute bottom-0 end-0 translate-middle-y opacity-25"></div>
        <div className="circle circle-sm position-absolute top-50 start-10 translate-middle-y opacity-25"></div>
        <div className="circle circle-lg position-absolute bottom-0 start-50 translate-middle-x opacity-25"></div>


        <div className="container position-relative z-1 py-5"> {/* z-index added for content to be above bubbles */}
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <h1 className="display-4 fw-bold mb-3">
                <span className="text-white">Your Complete </span>
                <span style={{ color: ACCENT_COLOR }}>Study Resources</span>
              </h1>
              <p className="lead mb-4 px-lg-5 mx-auto" style={{ maxWidth: '900px', opacity: '0.9' }}>
                Free notes, eBooks, sample papers, and study materials for all classes and competitive exams (UP Board, CBSE, JEE, NEET, SSC, UPSC).
              </p>
              
              {/* Search Box (Hero Section के नीचे) */}
              <div className="search-section mt-5">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="search-box position-relative">
                      <input
                        type="text"
                        className="form-control form-control-lg shadow-lg"
                        placeholder="Search by class, subject, or exam..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ paddingLeft: '50px', borderRadius: '50px', border: 'none' }}
                      />
                      <i
                        className="fas fa-search position-absolute"
                        style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', color: PRIMARY_COLOR }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tabs (Navigation - डिज़ाइन स्टाइल) */}
      <section className="tabs-section py-4" style={{ background: LIGHT_BG_COLOR }}>
        <div className="container">
          <ul className="nav nav-pills nav-fill resource-tabs mb-4">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'class' ? 'active' : ''}`}
                onClick={() => setActiveTab('class')}
              >
                <i className="fas fa-book-open me-2"></i>
                Class-wise Resources
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'exam' ? 'active' : ''}`}
                onClick={() => setActiveTab('exam')}
              >
                <i className="fas fa-graduation-cap me-2"></i>
                Exam Preparation
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === 'papers' ? 'active' : ''}`}
                onClick={() => setActiveTab('papers')}
              >
                <i className="fas fa-file-pdf me-2"></i>
                Previous Papers
              </button>
            </li>
          </ul>
        </div>
      </section>

      {/* --- Tab Content --- */}

      {/* Class-wise Resources Tab */}
      {activeTab === 'class' && (
        <section className="py-5">
          <div className="container">
            <h2 className="mb-4 text-center fw-bold" style={{ color: PRIMARY_COLOR }}>
              Class-wise Materials (9-UG)
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
                    Class {cls}
                  </button>
                ))}
              </div>
            </div>

            <div className="row g-4">
              {filteredClassResources.length > 0 ? (
                filteredClassResources.map((resource) => (
                  <div key={resource.id} className="col-lg-4 col-md-6">
                    <div className="resource-card card h-100 border-0 shadow-sm overflow-hidden glass-card">
                      <div className="resource-thumbnail">
                        <img src={resource.thumbnail} alt={resource.title} />
                        <span className="class-badge">Class {resource.class}</span>
                      </div>
                      <div className="card-body">
                        <span className="subject-tag">{resource.subject}</span>
                        <h5 className="card-title mt-2 mb-3 fw-bold">{resource.title}</h5>
                        <div className="resource-info">
                          <div className="info-item">
                            <i className="fas fa-file-alt text-muted"></i>
                            <span>{resource.type}</span>
                          </div>
                          <div className="info-item">
                            <i className="fas fa-hdd text-muted"></i>
                            <span>{resource.size}</span>
                          </div>
                          <div className="info-item">
                            <i className="fas fa-file-pdf text-danger"></i>
                            <span>{resource.pages} pages</span>
                          </div>
                          <div className="info-item">
                            <i className="fas fa-download" style={{ color: ACCENT_COLOR }}></i>
                            <span className="fw-bold">{resource.downloads} downloads</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent border-0 pt-0">
                        <button className="btn btn-primary-custom w-100 mt-2">
                          <i className="fas fa-download me-2"></i>
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p className="lead text-muted">No resources found.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Exam Preparation Resources Tab */}
      {activeTab === 'exam' && (
        <section className="py-5">
          <div className="container">
            <h2 className="mb-4 text-center fw-bold" style={{ color: PRIMARY_COLOR }}>
              Exam Preparation Guides
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
                    {exam}
                  </button>
                ))}
              </div>
            </div>

            <div className="row g-4">
              {filteredExamResources.length > 0 ? (
                filteredExamResources.map((resource) => (
                  <div key={resource.id} className="col-lg-4 col-md-6">
                    <div className="resource-card card h-100 border-0 shadow-sm overflow-hidden glass-card">
                      <div className="resource-thumbnail">
                        <img src={resource.thumbnail} alt={resource.title} />
                        <span className="exam-badge">{resource.exam}</span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title mb-3 fw-bold">{resource.title}</h5>
                        <div className="subjects-list mb-3">
                          {resource.subjects.map((subject, idx) => (
                            <span key={idx} className="subject-pill-dark">{subject}</span>
                          ))}
                        </div>
                        <div className="resource-info">
                          <div className="info-item">
                            <i className="fas fa-book text-muted"></i>
                            <span>{resource.type}</span>
                          </div>
                          <div className="info-item">
                            <i className="fas fa-hdd text-muted"></i>
                            <span>{resource.size}</span>
                          </div>
                          <div className="info-item">
                            <i className="fas fa-download" style={{ color: ACCENT_COLOR }}></i>
                            <span className="fw-bold">{resource.downloads} downloads</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent border-0 pt-0">
                        <button className="btn btn-primary-custom w-100 mt-2">
                          <i className="fas fa-download me-2"></i>
                          Download Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p className="lead text-muted">No exam resources found.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Previous Year Papers Tab */}
      {activeTab === 'papers' && (
        <section className="py-5" style={{ background: LIGHT_BG_COLOR }}>
          <div className="container">
            <h2 className="mb-4 text-center fw-bold" style={{ color: PRIMARY_COLOR }}>
              Previous Year Question Papers
            </h2>
            <div className="table-responsive">
              <table className="table table-hover papers-table shadow-sm">
                <thead style={{ backgroundColor: PRIMARY_COLOR, color: '#fff' }}>
                  <tr>
                    <th>Exam</th>
                    <th>Year</th>
                    <th>Shift/Subject</th>
                    <th>Size</th>
                    <th>Downloads</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {previousPapers.map((paper) => (
                    <tr key={paper.id}>
                      <td className="fw-bold">{paper.exam}</td>
                      <td>{paper.year}</td>
                      <td>{paper.shift}</td>
                      <td>{paper.size}</td>
                      <td>
                        <i className="fas fa-download me-1" style={{ color: ACCENT_COLOR }}></i>
                        {paper.downloads}
                      </td>
                      <td>
                        <button className="btn btn-sm btn-primary-custom">
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
          transition: all 0.3s ease;
        }

        .btn-primary-custom:hover, .btn-primary-custom.active {
          background-color: #5d4e9c; /* थोड़ा गहरा शेड */
          border-color: #5d4e9c;
          color: white;
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
          background: #fff;
        }

        .resource-tabs .nav-link.active {
          background: var(--primary-color);
          color: white;
          box-shadow: 0 4px 10px rgba(111, 97, 193, 0.4);
        }

        /* Resource Card Styling (ग्लास मॉर्फिज्म इफ़ेक्ट हटा दिया गया ताकि इमेज के साथ स्पष्ट दिखे) */
        .resource-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: #fff; /* सामान्य सफेद कार्ड */
        }

        .resource-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
        }

        .resource-thumbnail {
          position: relative;
          height: 200px;
          overflow: hidden;
          border-radius: 0.25rem 0.25rem 0 0;
        }

        .resource-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .class-badge, .exam-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--accent-color); /* नारंगी रंग */
          color: ${PRIMARY_COLOR};
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }

        .subject-tag {
          display: inline-block;
          background: var(--light-bg-color); 
          color: var(--primary-color);
          padding: 5px 15px;
          border-radius: 15px;
          font-size: 13px;
          font-weight: 600;
        }
        
        .subject-pill-dark {
          background: #e0e0e0;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 12px;
          color: #444;
        }

        .resource-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 15px;
          padding-bottom: 15px;
          border-bottom: 1px dashed #eee;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #666;
        }
        
        .papers-table thead {
          background-color: var(--primary-color) !important;
        }
        
        .papers-table tbody tr:hover {
            background-color: var(--light-bg-color);
        }

        /* Decorative Circles for Hero Section */
        .circle {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            pointer-events: none; /* ताकि क्लिक इवेंट ब्लॉक न करें */
            z-index: 0;
        }
        .circle-lg {
            width: 300px;
            height: 300px;
        }
        .circle-md {
            width: 200px;
            height: 200px;
        }
        .circle-sm {
            width: 100px;
            height: 100px;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .resource-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}