import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Privacy = () => {
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
                  <h2 className="mt-2">Privacy Policy</h2>
                  <h4>Last Updated: 05-10-2023</h4>
                </div>
                <div>
                  <p>
                    Your privacy is important to us. This Privacy Policy
                    outlines how we collect, use, disclose, and protect the
                    personal information you provide to us during the payment
                    process and when using our products and services.
                  </p>
                </div>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    1. Information We Collect
                  </strong>
                  <p>
                    We may collect the following types of personal information
                    when you use our services:
                  </p>
                  1.1. Personal Identification Information: <br />
                  <strong style={{ color: "#2581C2", fontSize: 20 }}>
                    .
                  </strong>{" "}
                  Name <br />
                  <strong style={{ color: "#2581C2", fontSize: 20 }}>
                    .
                  </strong>{" "}
                  Business Name (if applicable) <br />
                  <strong style={{ color: "#2581C2", fontSize: 20 }}>
                    .
                  </strong>{" "}
                  Mobile Number <br />
                  <strong style={{ color: "#2581C2", fontSize: 20 }}>
                    .
                  </strong>{" "}
                  UPI ID (Unified Payments Interface ID) <br />
                  1.2. Payment Information:
                  <br />
                  <strong style={{ color: "#2581C2", fontSize: 20 }}>
                    .
                  </strong>{" "}
                  Billing and payment information necessary for processing
                  transactions, such as credit card details or other payment
                  method information. Note that we do not store payment card
                  information; it is securely processed by our payment service
                  provider. <br />
                  1.3. Usage Information: <br />
                  <strong style={{ color: "#2581C2", fontSize: 20 }}>
                    .
                  </strong>{" "}
                  Information about how you interact with our products and
                  services, including the use of NFC cards and AI-generated
                  reviews. <br />
                  1.4. Google Business Link: <br />
                  <strong style={{ color: "#2581C2", fontSize: 20 }}>
                    .
                  </strong>{" "}
                  Link to your Google Business page. This information is used to
                  generate reviews for user’s business page.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    2. How We Use Your Information
                  </strong>{" "}
                  <br />
                  We may use the personal information collected for the
                  following purposes: <br />
                  2.1.Transaction Processing: To deliver NFC cards, and provide
                  access to our AI-generated review service.
                  <br />
                  2.2.Customer Support: To respond to your inquiries, requests,
                  and provide customer support.
                  <br />
                  2.3. Personalization: To personalise and improve the quality
                  of AI-generated reviews based on the Google Business Link
                  provided. <br />
                  2.4. Communication: To send transaction confirmations,
                  updates, and important notices regarding our products and
                  services. <br />
                  2.5. Legal Compliance: To comply with legal obligations,
                  including tax reporting and fraud prevention.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    3. Sharing Your Information
                  </strong>{" "}
                  <br />
                  We may share your personal information with third parties in
                  the following circumstances: <br />
                  3.1. The pricing for our digital NFC cards is as specified in
                  the MRP. Payment is required before we provide you with the
                  NFC card. <br /> 3.2. Legal Compliance: We may disclose
                  information when required by law or to protect our rights,
                  privacy, safety, or property, or that of others.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>4. Data Security</strong>{" "}
                  <br />
                  We take reasonable measures to protect your personal
                  information from unauthorised access, use, or disclosure.
                  However, please be aware that no method of transmitting data
                  over the internet or electronic storage is entirely secure.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>5. Your Choices</strong>{" "}
                  <br />
                  You may have certain rights regarding your personal
                  information. You can: <br />
                  <strong style={{ color: "#2581C2", fontSize: 20 }}>
                    .
                  </strong>{" "}
                  Review and update your personal information by logging into
                  your account (if applicable). <br />
                  <strong style={{ color: "#2581C2", fontSize: 20 }}>
                    .
                  </strong>{" "}
                  Contact us to request access to or correction of your personal
                  information.
                  <br />
                  <strong style={{ color: "#2581C2", fontSize: 20 }}>
                    .
                  </strong>{" "}
                  Opt-out of receiving promotional communications from us by
                  following the instructions provided in such communications.{" "}
                  <br />
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>
                    6. Changes to This Privacy Policy
                  </strong>{" "}
                  <br /> We may update this Privacy Policy from time to time to
                  reflect changes in our practices or for other operational,
                  legal, or regulatory reasons. We will notify you of any
                  material changes either by posting a notice on our website or
                  through other communication channels.
                </p>
                <p className="mb-4">
                  <strong style={{ color: "#2581C2" }}>7. Contact Us</strong>{" "}
                  <br /> If you have any questions or concerns about this
                  Privacy Policy or the handling of your personal information,
                  please contact us at{" "}
                  <a
                    style={{ color: "#2581C2", fontWeight: 500 }}
                    href="https://codentechnologies.com/contact"
                  >
                    contactus@codentechnologies.com
                  </a>{" "}
                  <br />
                  By using our products and services, you consent to the
                  practices described in this Privacy Policy.
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
              <Link className="btn btn-link" to="/sales-policy">
                Sales Policy
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

export default Privacy;
