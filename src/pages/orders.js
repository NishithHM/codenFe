import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
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
          style={{ height: "3em", width: "3em" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link to="" className="navbar-brand p-0">
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
          </Link>
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
              <Link to="/privacy-policy" className="nav-item nav-link">
                Privacy Policy
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <section id="Services">
        <div className="container-xxl py-5">
          <div className="container px-lg-5">
            <div
              className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6
                className="position-relative d-inline text-primary ps-4"
                title="coden our services"
              >
                Our Products
              </h6>
            </div>
            <a
              className=""
              title="whatsapp us to Order !"
              href="https://api.whatsapp.com/send?text=Hi, I would like to order a review card for my business &phone=8277611667"
            >
              <div className="row g-4 justify-content-center" style={{marginTop:'50px'}}>
                <div
                  className="col-lg-4 col-md-6 wow zoomIn"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon flex-shrink-0">
                      {/* <i className="fa fa-id-card fa-2x"></i> */}
                      <img
                        style={{width:'200px', height:'150px'}}
                        data-wow-delay="0.5s"
                        src="img/card.png"
                        alt="coden about image"
                        title="coden about us image"
                      />
                    </div>
                    <h5 style={{marginTop:'60px'}} className="mb-3">Review Card</h5>
                    <p>
                      Effortlessly gather reviews with our NFC Business Review
                      Card. Customers tap and leave feedback, boosting your
                      online presence instantly. Customizable and easy to use.
                      Elevate your business today!
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <p style={{marginTop:'30px'}}>
            Get Your card now{" "}
            <p>
              {" "}
              <a
                href="tel:+91 8277611667"
                className="fa fa-phone-alt me-3 text-blue"
              >
                +91 8277611667
              </a>
            </p>
          </p>
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
              <p className="fa fa-envelope me-3 text-white">
                {" "}
                GSTIN: 29AGWPJ3637Q1ZA
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
              <a className="btn btn-link" href="index.html">
                Home
              </a>
              <a className="btn btn-link" href="about.html">
                About Us
              </a>
              <a className="btn btn-link" href="index.html#Services">
                Service
              </a>
              <a className="btn btn-link" href="contact.html">
                Contact Us
              </a>
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
                <a className="border-bottom" href="#home">
                  Coden
                </a>
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

export default Orders;