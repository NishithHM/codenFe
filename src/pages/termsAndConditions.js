import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                    title="coden's about us "
                  >
                    Privacy Policy
                  </h6>
                  <h2 className="mt-2">
                  Terms and Conditions for Digital NFC Card Review Service
                  </h2>
                  <h4>Last Updated: 05-10-2022</h4>
                </div>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    1.Acceptance of Terms
                  </strong>
                  <br />
                  By purchasing and using our digital NFC card 
                  review service, you agree to comply with these terms and
                  conditions. If you do not agree with these terms, please do
                  not use our products or services.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    2. Description of Products and Services
                  </strong>{" "}
                  <br />
                  2.1. Digital NFC Cards: We offer digital NFC cards for sale at
                  the price mentioned in the Manufacturer's Recommended Price
                  (MRP). Each card is to be used for the intended purpose of
                  accessing review services.
                  <br />
                  2.2. Reviews: When you scan the NFC card using a
                  compatible device, you will receive a review
                  free of charge, as of the date of this agreement. Please note
                  that we reserve the right to charge for this service in the
                  future, and any such changes will be communicated to users in
                  advance.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    3. Payment and Pricing
                  </strong>{" "}
                  <br />
                  3.1. The pricing for our digital NFC cards is as specified in
                  the MRP. Payment is required before we provide you with the
                  NFC card.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    4. User Responsibilities
                  </strong>{" "}
                  <br />
                  4.1. You are responsible for using the digital NFC card in
                  accordance with the intended purpose and any applicable laws
                  and regulations.
                  <br /> 4.2. You are responsible for any device and
                  connectivity requirements necessary to access the 
                  reviews.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    5. Privacy and Data
                  </strong>{" "}
                  <br /> 5.1. We may collect and use data related to your use of
                  the NFC card and AI-generated review service. Please refer to
                  our Privacy Policy for more information on how we handle your
                  data.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    6. Changes to Terms and Services
                  </strong>{" "}
                  <br /> 6.1. We reserve the right to modify these terms and
                  conditions at any time. Any changes will be effective upon
                  posting the updated terms on our website or notifying you via
                  email or other means. <br /> 6.2. We also reserve the right to
                  modify or discontinue the AI-generated review service, with or
                  without notice.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    7. Disclaimer of Warranties
                  </strong>{" "}
                  <br /> 7.1. We provide our products and services on an "as-is"
                  and "as available" basis. We do not make any warranties or
                  representations regarding the accuracy, completeness, or
                  reliability of the AI-generated reviews.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    8. Limitation of Liability{" "}
                  </strong>{" "}
                  <br /> 8.1. To the extent permitted by law, we shall not be
                  liable for any direct, indirect, incidental, consequential, or
                  special damages arising out of or in connection with the use
                  of our products or services.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>9. Governing Law</strong>{" "}
                  <br /> 9.1. These terms and conditions shall be governed by
                  and construed in accordance with the laws of India.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    10. Contact Information
                  </strong>{" "}
                  <br /> 10.1. If you have any questions or concerns about these
                  terms and conditions, please contact us at <a
                    style={{ color: "#2581C2", fontWeight: 500 }}
                    href="https://codentechnologies.com/contact"
                  >
                    contactus@codentechnologies.com
                  </a>{" "}
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

      <div
        className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5 px-lg-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-5">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <a
                  href="https://goo.gl/maps/WNS9ZLtKtYN5aBHn8"
                  target="_blank"
                  className="fa fa-map-marker-alt me-3 text-white"
                >
                  {" "}
                  904, Vara Vasundara, Uttarahalli Bangalore, 560061
                </a>
              </p>
              <p>
                {" "}
                <a
                  href="tel:+91 8277611667"
                  className="fa fa-phone-alt me-3 text-white"
                >
                  +91 8277611667
                </a>
              </p>
              <p>
                <a
                  href="mailto:contactus@codentechnologies.com"
                  className="fa fa-envelope me-3 text-white"
                >
                  contactus@codentechnologies.com
                </a>
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://api.whatsapp.com/send?text=Hi, I'm interested in availing your services as I believe your expertise and professionalism would be a valuable investment for my needs&phone=8277611667"
                  title="Whatsapp us Now !"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.linkedin.com/company/coden/"
                  target="_blank"
                  title="coden linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://instagram.com/coden_technologies?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  title="coden instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.facebook.com/profile.php?id=100090469839151"
                  target="_blank"
                  title="coden facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="text-white mb-4">Popular Link</h5>
              <Link className="btn btn-link" to="/">
                Home
              </Link>
              <Link className="btn btn-link" to="/about">
                About Us
              </Link>
              <Link className="btn btn-link" to="/#Services">
                Service
              </Link>
              <Link className="btn btn-link" to="/contact">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="btn btn-link" to="/terms">
                Terms And Conditions
              </Link>
              <Link className="btn btn-link" to="/refund-and-cancellation">
                Refund And Cancellation
              </Link>
            </div>
            <div className="col-md-6 col-lg-4">
              <h5 className="text-white mb-4">Blogs</h5>
              <div className="row g-2">
                <div className="col-4">
                  <a
                    href="https://medium.com/@blog.sureify/the-art-of-writing-custom-hooks-c0ffd538d181"
                    target="_blank"
                    title="coden-The Art of writing Custom Hooks"
                  >
                    {" "}
                    <img
                      className="img-fluid"
                      src="img/portfolio-1.jpg"
                      alt="coden portfolio-1"
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="https://medium.com/@nhm987/reducing-react-native-android-app-size-like-a-champ-b9edf59a9932"
                    target="_blank"
                    title="coden-Reducing React-Native Android App Size"
                  >
                    <img
                      className="img-fluid"
                      src="img/portfolio-2.jpg"
                      alt="coden portfolio-2"
                    />
                  </a>
                </div>
                <div className="col-4">
                  <a
                    href="https://medium.com/@nhm987/setting-up-bitbucket-ci-cd-for-react-native-android-project-18425a7ec4af"
                    target="_blank"
                    title="coden Setting Up Bitbucket CI/CD"
                  >
                    {" "}
                    <img
                      className="img-fluid"
                      src="img/portfolio-3.jpg"
                      alt="coden portfolio-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-lg-5">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <Link className="border-bottom" to="/">
                  Coden
                </Link>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link to="/">Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
