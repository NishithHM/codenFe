import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();

  const handleScrollToHome = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
                  />
                </a>
              </div>
            </address>

            <nav className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Popular Link</h5>
              <Link onClick={() => scrollToSection('home')} className="btn btn-link" to="/">
                Home
              </Link>
              <Link className="btn btn-link" to="/about">
                About Us
              </Link>
              <Link className="btn btn-link" onClick={() => {
                navigate('/')
                scrollToSection("Services")}}>
                Service
              </Link>
              <Link className="btn btn-link" to="/contact">
                Contact Us
              </Link>
            </nav>

            <div className="col-md-6 col-lg-4">
              <h5 className="text-white mb-4">Certifications</h5>
              <div className="row g-2">
                <div className="col-4">
                  <a
                    href="https://medium.com/@blog.sureify/the-art-of-writing-custom-hooks-c0ffd538d181"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="coden-The Art of writing Custom Hooks"
                  >
                    <img
                      className="img-fluid"
                      src="https://www.dnb.com/content/dam/english/image-library/Modernization/illustrations/DRSwdisclaimer.png"
                      alt="coden Dun & Bradstreet Verified"
                    />
                  </a>
                  <p className="text-center">96-164-5717</p>
                </div>
                <div className="col-4">
                  <a
                    href="https://medium.com/@nhm987/reducing-react-native-android-app-size-like-a-champ-b9edf59a9932"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="coden-Reducing React-Native Android App Size"
                  >
                    <img
                      className="img-fluid"
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a2/CERSAI_Logo.jpg"
                      alt="coden KYC Registered"
                    />
                  </a>
                  <p className="text-center mt-2">70041175906410</p>
                </div>
                <div className="col-4">
                  <a
                    href="https://medium.com/@nhm987/setting-up-bitbucket-ci-cd-for-react-native-android-project-18425a7ec4af"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="coden Setting Up Bitbucket CI/CD"
                  >
                    <img
                      className="img-fluid"
                      src="https://5.imimg.com/data5/SELLER/Default/2021/10/YZ/TU/SZ/103001306/udyam-registration.jpg"
                      alt="coden UDYAM Registered"
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
                © <Link to="/">codentechnologies.com</Link>, All Rights Reserved. 2024
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By <a href="#">Coden</a>
                <span className="mx-2">|</span>
                <Link to="/privacy-policy" style={{ color: "#fff", textDecoration: "underline" }}>
                  Privacy Policy
                </Link>
                <span className="mx-2">|</span>
                <Link to="/terms" style={{ color: "#fff", textDecoration: "underline" }}>
                  Terms &amp; Conditions
                </Link>
                <span className="mx-2">|</span>
                <Link to="/refund-and-cancellation" style={{ color: "#fff", textDecoration: "underline" }}>
                  Refund Policy
                </Link>
                <span className="mx-2">|</span>
                <Link to="/pricing" style={{ color: "#fff", textDecoration: "underline" }}>
                  Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
