import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = ({ setActiveTab, scrollToSection }) => {
  // const navigate = useNavigate();

  // const handleScrollToHome = () => {
  //   navigate("/");
  //   window.scrollTo(0, 0); // Scroll to the top of the page
  // };

  const wordWrapStyle = {
    wordBreak: "break-all",
    overflowWrap: "anywhere",
    whiteSpace: "normal",
  };

  return (
    <footer
      className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          <address className="col-md-6 col-lg-5">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p>
              <a
                href="https://goo.gl/maps/WNS9ZLtKtYN5aBHn8"
                target="_blank"
                rel="noopener noreferrer"
                className="fa fa-map-marker-alt me-3 text-white"
                aria-label="Find us on Google Maps"
              >
                904, Vara Vasundara, Uttarahalli Bangalore, 560061
              </a>
            </p>
            <p>
              <a
                href="tel:+91 8277611667"
                className="fa fa-phone-alt me-3 text-white"
                aria-label="Call us at +91 8277611667"
              >
                +91 8277611667
              </a>
            </p>
            <p>
              <a
                href="mailto:contactus@codentechnologies.com"
                className="fa fa-envelope me-3 text-white"
                aria-label="Email us at contactus@codentechnologies.com"
              >
                contactus@codentechnologies.com
              </a>
            </p>
            <p>
              <a href="#" className="fa me-3 text-white">
                GSTIN 29AGWPJ3637Q1ZA
              </a>
            </p>
            <div className="d-flex pt-2">
              {/* <a
                  className="btn btn-outline-light btn-social"
                  href="https://api.whatsapp.com/send?text=Hi, I'm interested in availing your services as I believe your expertise and professionalism would be a valuable investment for my needs&phone=8277611667"
                  title="Whatsapp us Now!"
                  aria-label="Whatsapp us"
                >
                  <i className="fab fa-whatsapp"></i>
                </a> */}
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.linkedin.com/company/coden/"
                target="_blank"
                rel="noopener noreferrer"
                title="coden linkedin"
                aria-label="Visit our LinkedIn page"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://instagram.com/coden_technologies?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                title="coden instagram"
                aria-label="Follow us on Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.facebook.com/profile.php?id=100090469839151"
                target="_blank"
                rel="noopener noreferrer"
                title="coden facebook"
                aria-label="Like us on Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://clutch.co/profile/coden-0#highlights"
                target="_blank"
                rel="noopener noreferrer"
                title="coden clutch"
                aria-label="Check us out on Clutch"
              >
                <img
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                    filter: "invert(1)",
                    marginTop: "8px",
                  }}
                  src="img/clutch-removebg-preview.png"
                  alt="clutch logo"
                  loading="lazy"
                />
              </a>
            </div>
          </address>

          <nav className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4">Popular Link</h5>
            <Link
              onClick={() => {
                setActiveTab("home");
                sessionStorage.setItem("activeTab", "home");
                scrollToSection("home");
              }}
              className="btn btn-link"
              to="/"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                setActiveTab("about");
                sessionStorage.setItem("activeTab", "about");
              }}
              className="btn btn-link"
              to="/about"
            >
              About Us
            </Link>
            <Link
              className="btn btn-link"
              onClick={() => {
                setActiveTab("services");
                sessionStorage.setItem("activeTab", "Services");
                scrollToSection("Services");
              }}
              to="/"
            >
              Service
            </Link>
            <Link
              onClick={() => {
                setActiveTab("contact");
                sessionStorage.setItem("activeTab", "contact");
              }}
              className="btn btn-link"
              to="/contact"
            >
              Contact Us
            </Link>
            <a href="https://codentechnologies.com/blogs" class="btn btn-link">
              Blog
            </a>
          </nav>

          <div className="col-md-6 col-lg-4">
            <h5 className="text-white mb-4">Certifications</h5>
            <div className="row g-2">
              <div className="col-4">
                <a
                  href="#"
                  // target="_blank"
                  rel="noopener noreferrer"
                  title="coden-The Art of writing Custom Hooks"
                >
                  <img
                    className="img-fluid"
                    src="https://easyrevwebpublic.s3.ap-south-1.amazonaws.com/prod/blogs/b74ea202-fb39-4666-8098-4546cb5119aa.png"
                    alt="coden Dun & Bradstreet Verified"
                    loading="lazy"
                  />
                </a>
                <p className="text-center">96-164-5717</p>
              </div>
              <div className="col-4">
                <a
                  href="#"
                  // target="_blank"
                  rel="noopener noreferrer"
                  title="coden-Reducing React-Native Android App Size"
                >
                  <img
                    className="img-fluid"
                    src="https://easyrevwebpublic.s3.ap-south-1.amazonaws.com/prod/blogs/003ae867-64f1-4c22-86d8-fe6a3f1ec9a5.jpg"
                    alt="coden KYC Registered"
                    loading="lazy"
                  />
                </a>
                <p className="text-center mt-2" style={wordWrapStyle}>
                  70041175906410
                </p>
              </div>
              <div className="col-4">
                <a
                  href="#"
                  // target="_blank"
                  rel="noopener noreferrer"
                  title="coden Setting Up Bitbucket CI/CD"
                >
                  <img
                    className="img-fluid"
                    src="https://easyrevwebpublic.s3.ap-south-1.amazonaws.com/prod/blogs/92fd41e4-38d3-471c-951d-4b9f9221ebfc.jpg"
                    alt="coden UDYAM Registered"
                    loading="lazy"
                  />
                </a>
                <p className="text-center mt-2">UDYAM-KR-03-0272066</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © <Link to="/">codentechnologies.com</Link>, All Rights Reserved.
              2024
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a href="https://codentechnologies.com/?scrollTo=home">Coden</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
