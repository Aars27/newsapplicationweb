
// Colors from previous components for consistency
const PRIMARY_COLOR = '#6F61C1'; // गहरा बैंगनी/नीला रंग
const ACCENT_COLOR = '#FFC107'; // नारंगी हाईलाइट

export default function Contact() {
  return (
    <main>
      <style jsx global>{`
        /* Custom Styles for Contact Page */
        .text-primary-custom {
          color: ${PRIMARY_COLOR} !important;
        }
        .bg-primary-custom {
          background-color: ${PRIMARY_COLOR} !important;
        }
        .btn-primary-custom {
          background-color: ${PRIMARY_COLOR};
          border-color: ${PRIMARY_COLOR};
          color: #fff;
          transition: background-color 0.3s ease;
        }
        .btn-primary-custom:hover {
          background-color: #5d4e9c; /* Slightly darker shade */
          border-color: #5d4e9c;
        }
        .contact-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: ${PRIMARY_COLOR};
            margin-bottom: 2rem;
            text-align: center;
        }
        .info-box {
            padding: 20px;
            border-left: 5px solid ${ACCENT_COLOR};
            margin-bottom: 25px;
            background-color: #f8f6fb;
            border-radius: 4px;
        }
        .info-box p {
            margin-bottom: 0;
            line-height: 1.5;
        }
        .info-box i {
            color: ${PRIMARY_COLOR};
            margin-right: 15px;
            font-size: 1.5rem;
        }
        .form-control:focus {
            border-color: ${PRIMARY_COLOR};
            box-shadow: 0 0 0 0.25rem rgba(111, 97, 193, 0.25); /* Primary color shadow */
        }
      `}</style>
      
      {/* 🚀 Header Banner */}
      <section className="contact-banner py-5" style={{ background: '#e9ecef' }}>
        <div className="container">
          <h1 className="text-center text-primary-custom fw-bold">Contact Us</h1>
          <p className="text-center text-muted">We're here to help you with your queries and feedback.</p>
        </div>
      </section>
      
      {/* ================ Contact Section Start ================= */}
      <section className="contact-section py-5">
        <div className="container">
          
          {/* Note: The commented out Google Maps section has been removed for a clean React component. 
               If you want to integrate a map, you should use a React library like react-google-maps. */}
{/* 
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
          </div> */}

          <div className="row">
            
            {/* Contact Form Column */}
            <div className="col-lg-8 mb-5 mb-lg-0">
              <form 
                className="form-contact contact_form p-4 shadow-sm" 
                action="contact_process.php" // Server side script
                method="post" 
                id="contactForm" 
                noValidate="novalidate"
              >
                <div className="row">
                  {/* Message Field */}
                  <div className="col-12 mb-4">
                    <div className="form-group">
                      <textarea 
                        className="form-control w-100" 
                        name="message" 
                        id="message" 
                        cols="30" 
                        rows="9" 
                        placeholder="Enter Message" 
                        aria-label="Enter your message"
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Name Field */}
                  <div className="col-sm-6 mb-4">
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        name="name" 
                        id="name" 
                        type="text" 
                        placeholder="Enter your name" 
                        aria-label="Enter your name"
                      />
                    </div>
                  </div>
                  
                  {/* Email Field */}
                  <div className="col-sm-6 mb-4">
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        name="email" 
                        id="email" 
                        type="email" 
                        placeholder="Enter email address" 
                        aria-label="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  {/* Subject Field */}
                  <div className="col-12 mb-4">
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        name="subject" 
                        id="subject" 
                        type="text" 
                        placeholder="Enter Subject" 
                        aria-label="Enter subject"
                      />
                    </div>
                  </div>

                </div>
                <div className="form-group mt-3">
                  <button 
                    type="submit" 
                    className="btn btn-primary-custom btn-lg text-white"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Column */}
            <div className="col-lg-4">
              <div className="contact-info">
                
                {/* Address */}
                <div className="info-box">
                  <i className="fas fa-home me-3"></i>
                  <div>
                    <h5 className="fw-bold">Head Office Location</h5>
                    <p className="text-muted">Sector 18, Noida, Uttar Pradesh, India</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="info-box">
                  <i className="fas fa-phone me-3"></i>
                  <div>
                    <h5 className="fw-bold">Call Us</h5>
                    <p className="text-muted">
                      +91 98765 43210
                      <br />
                      Mon to Fri, 9am to 6pm
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="info-box">
                  <i className="fas fa-envelope me-3"></i>
                  <div>
                    <h5 className="fw-bold">Email Us</h5>
                    <p className="text-muted">support@eduportal.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ Contact Section End ================= */}
    </main>
  );
}