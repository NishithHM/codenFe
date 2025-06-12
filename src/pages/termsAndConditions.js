import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const TermsAndConditions = () => {
  const [isLoad, setLoading] = useState(true);
  useEffect(() => {
    new WOW().init();
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      margin: 25,
      dots: false,
      loop: true,
      center: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const showclassName = isLoad ? "show" : "";
  return (
    <div className="container-xxl bg-white p-0">
      <div
        id="spinner"
        className={`${showclassName} bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}
      >
        <div
          className="spinner-grow text-primary"
          style={{ width: "3em", height: "3em" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand p-0">
            <div className="codenMerged">
              <div>
                {" "}
                <img
                  src="./img/logo.svg"
                  alt="coden logo"
                  className="codenImageTitle"
                />
              </div>
              <div>
                <h1 className=" title logo-font codenTextTitle">oden</h1>
              </div>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/#Services" className="nav-item nav-link">
                Service
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About Us
              </Link>
              <Link to="/contact" className="nav-item nav-link">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <section id="AboutUs">
        <div className="container-xxl py-5">
          <div className="container px-lg-5">
            <div className="row g-5">
              <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                <div className="section-title position-relative mb-4 pb-2 topPaddingMeduim">
                  <h6
                    className="position-relative text-primary ps-4"
                    title="coden's terms and conditions"
                  >
                    Terms and Conditions
                  </h6>
                  <h2 className="mt-2">Terms and Conditions</h2>
                  <h4>Effective Date: 12-06-2025</h4>
                </div>
                <p className="mb-4">
                  Welcome to Coden Technologies. By accessing our website or
                  engaging in our services, you agree to comply with and be bound
                  by the following terms and conditions. If you do not agree with
                  any part of these terms, please refrain from using our services.
                </p>
                <h5>1. Definitions</h5>
                <ul className="mb-4">
                  <li>
                    <strong>"Company", "We", or "Us"</strong> refers to Coden
                    Technologies.
                  </li>
                  <li>
                    <strong>"Client", "You", or "Your"</strong> refers to the
                    individual or business using our services.
                  </li>
                  <li>
                    <strong>"Services"</strong> refers to software development,
                    website creation, web applications, maintenance, and any other
                    digital solutions we offer.
                  </li>
                </ul>
                <h5>2. Acceptance of Terms</h5>
                <ul className="mb-4">
                  <li>
                    By engaging with our services or accessing our website (
                    <a
                      href="https://codentechnologies.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://codentechnologies.com
                    </a>
                    ), you confirm that you:
                  </li>
                  <ul>
                    <li>Are legally capable of entering into binding contracts,</li>
                    <li>Agree to comply with these Terms and Conditions.</li>
                  </ul>
                </ul>
                <h5>3. Scope of Services</h5>
                <p className="mb-4">
                  The exact nature and scope of our services will be clearly
                  defined in a written proposal, quotation, or agreement before
                  any work begins. Any changes to scope or timelines must be
                  agreed upon in writing by both parties.
                </p>
                <h5>4. Payment Terms</h5>
                <ul className="mb-4">
                  <li>All pricing will be outlined in the official proposal.</li>
                  <li>
                    An initial advance (typically 50%) is required before project
                    commencement.
                  </li>
                  <li>
                    The remaining payment is due upon project completion or as per
                    milestone terms.
                  </li>
                  <li>
                    Delayed payments beyond 10 days of the due date may incur a
                    late fee or service suspension.
                  </li>
                </ul>
                <h5>5. Intellectual Property</h5>
                <ul className="mb-4">
                  <li>
                    Upon full payment, ownership of the final project deliverables
                    will be transferred to the client.
                  </li>
                  <li>
                    Coden Technologies retains the right to display the project in
                    portfolios or for promotional purposes unless explicitly
                    restricted by the client in writing.
                  </li>
                  <li>
                    Any code, frameworks, or tools developed internally by Coden
                    Technologies and reused in the client’s project remain the
                    intellectual property of the company.
                  </li>
                </ul>
                <h5>6. Client Responsibilities</h5>
                <ul className="mb-4">
                  <li>
                    Provide necessary materials (text, images, logins, etc.) in a
                    timely manner.
                  </li>
                  <li>
                    Respond to requests for feedback or approvals during
                    development.
                  </li>
                  <li>
                    Ensure that content provided does not infringe any copyright
                    laws.
                  </li>
                </ul>
                <h5>7. Confidentiality</h5>
                <p className="mb-4">
                  Both parties agree to maintain the confidentiality of proprietary
                  information shared during the project, unless required by law.
                </p>
                <h5>8. Limitation of Liability</h5>
                <ul className="mb-4">
                  <li>
                    Coden Technologies shall not be liable for:
                  </li>
                  <ul>
                    <li>
                      Any loss or damage resulting from the use or inability to use
                      the delivered product.
                    </li>
                    <li>
                      Any third-party software failure or hosting issues.
                    </li>
                    <li>Indirect or consequential losses.</li>
                  </ul>
                </ul>
                <h5>9. Termination</h5>
                <ul className="mb-4">
                  <li>
                    Either party may terminate the agreement with 7 days’ written
                    notice. In such cases:
                  </li>
                  <ul>
                    <li>Work completed until termination must be paid for.</li>
                    <li>
                      Any outstanding dues must be cleared within 10 days.
                    </li>
                  </ul>
                </ul>
                <h5>10. Modifications to Terms</h5>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. Updates
                  will be posted on our website. Continued use of our services
                  after changes implies acceptance of the new terms.
                </p>
                <h5>11. Governing Law</h5>
                <p className="mb-4">
                  These Terms shall be governed by the laws of India, and any
                  disputes will fall under the jurisdiction of the courts of
                  Bangalore, Karnataka.
                </p>
              </div>
              <div className="col-lg-4">
                {/* <img className="img-fluid wow zoomIn topPaddingLarge" data-wow-delay="0.5s"
                                    src="img/contactUs.png" alt="coden about image" title="coden about us image" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
