import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const About = () => {
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
              <Link to="/privacy-policy" className="nav-item nav-link">
                Privacy Policy
              </Link>
              <Link to="/orders" className="nav-item nav-link">Orders</Link>
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
                    About Us
                  </h6>
                  <h2 className="mt-2">
                    We help business of every size - from Entrepreneurs to
                    Iconic brand
                  </h2>
                </div>
                <p className="mb-4">
                  CODEN delivers high-quality and secure applications that meet
                  the needs of our clients. Our experienced developers follow
                  industry best practices and use the latest tools and
                  technologies to ensure that our applications are not only
                  user-friendly, but also reliable and secure !. We conduct
                  rigorous testing and quality assurance procedures to ensure
                  that our applications meet the highest standards of
                  performance and security. Trust us to deliver a top-quality
                  solution that meets your needs and exceeds your expectations.
                </p>

                <div className="d-flex align-items-center mt-4">
                  <a
                    className="btn btn-outline-primary btn-square me-3"
                    title="whatsapp us Now !"
                    href="https://api.whatsapp.com/send?text=Hi, I'm interested in availing your services as I believe your expertise and professionalism would be a valuable investment for my needs&phone=8277611667"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square me-3"
                    title="coden's linkedin"
                    href="https://www.linkedin.com/company/coden/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square me-3"
                    title="coden's instagram"
                    href="https://instagram.com/coden_technologies?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square"
                    title="coden's facebook"
                    href="https://www.facebook.com/profile.php?id=100090469839151"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  className="img-fluid wow zoomIn topPaddingLarge"
                  data-wow-delay="0.5s"
                  src="img/AboutCoden.png"
                  alt="coden about image"
                  title="coden about us image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                Our Services
              </h6>
              <h2 className="mt-2">What Solutions We Provide</h2>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-paint-brush fa-2x"></i>
                  </div>
                  <h5 className="mb-3">UX/UI Design</h5>
                  <p>
                    We design a simple and elegant application to fuel your
                    brand, which carries the brand culture to the end-users. We
                    listen to problems, brainstorm solutions, and bring the
                    design.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-laptop fa-2x"></i>
                  </div>
                  <h5 className="mb-3">Website Development</h5>
                  <p>
                    Our guild of developers is highly professional and has
                    collectively invested at least 6,000+ human hours in
                    development, delivering pixel-perfect results and highly
                    performant APIs..
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-mobile fa-2x"></i>
                  </div>
                  <h5 className="mb-3">App Development</h5>
                  <p>
                    We deliver iOS and Android apps using hybrid technologies,
                    ensuring 'One Code, Any Platform' approach. Our bundled apps
                    can run on a wide range of devices, providing a consistent
                    experience.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-cloud fa-2x"></i>
                  </div>
                  <h5 className="mb-3">Cloud Management</h5>
                  <p>
                    We provide cloud resources with a powerful orchestration
                    engine that automates actions across multiple cloud servers
                    and cloud services.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-server fa-2x"></i>
                  </div>
                  <h5 className="mb-3">Domains and SEO</h5>
                  <p>
                    With our website hosting services, you can provide your
                    visitors with the fastest browsing experience possible,
                    thanks to our complete SSD servers.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-wrench  fa-2x"></i>
                  </div>
                  <h5 className="mb-3">Support and Maintenance</h5>
                  <p>
                    We provide a dedicated support team that is available 24/7
                    to answer any queries after deployment and guide you in
                    maintaining your website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div
          className="container-xxl bg-secondary testimonial py-5 my-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5 px-lg-5">
            <div
              className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6
                className="position-relative d-inline text-primary ps-4"
                title="coden our services"
              >
                FAQ
              </h6>
              <h4 className="mt-2">Satisfy Your Curiosity !</h4>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item bg-transparent border rounded text-white p-4">
                <div className="d-flex align-items-center">
                  <div className="ps-3 ">
                    <h6 className="text-white mb-1">How it works ?</h6>
                  </div>
                </div>
                <div>
                  {" "}
                  <small>Tell us what you want</small>
                </div>
                <div>
                  {" "}
                  <small>We tailor your needs and provide the design</small>
                </div>
                <div>
                  <small>
                    Once you finalise, we develop your dream website...
                  </small>
                </div>
              </div>
              <div className="testimonial-item bg-transparent border rounded text-white p-4">
                <div className="d-flex align-items-center">
                  <div className="ps-3 ">
                    <h6 className="text-white mb-1">How much it cost ?</h6>
                  </div>
                </div>
                <div>
                  {" "}
                  <small>Depends on your requirement ! </small>
                </div>
                <div>
                  {" "}
                  <small>It starts from as low as 8000 INR</small>
                </div>
                <div>
                  <small>
                    We provide a detailed quote before we start working
                  </small>
                </div>
              </div>
              <div className="testimonial-item bg-transparent border rounded text-white p-4">
                <div className="d-flex align-items-center">
                  <div className="ps-3 ">
                    <h6 className="text-white mb-1">How long it takes ?</h6>
                  </div>
                </div>
                <div>
                  {" "}
                  <small>Also depends on your requirement !</small>
                </div>
                <div>
                  {" "}
                  <small>We take time and quality as top priority</small>
                </div>
                <div>
                  <small>We also provide time-estimation with quotation</small>
                </div>
              </div>
              <div className="testimonial-item bg-transparent border rounded text-white p-4">
                <div className="d-flex align-items-center">
                  <div className="ps-3 ">
                    <h6 className="text-white mb-1">How secure is it ?</h6>
                  </div>
                </div>
                <div>
                  {" "}
                  <small>We use latest tech to ensure the best security </small>
                </div>
                <div>
                  {" "}
                  <small>Our team uses secure coding practices</small>
                </div>
                <div>
                  <small>We use strict data protection policies</small>
                </div>
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
              <a className="btn btn-link" href="#AboutUs">
                About Us
              </a>
              <Link className="btn btn-link" to="/#Services">
                Service
              </Link>
              <Link className="btn btn-link" to="/contact">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="/privacy-policy">
                Privacy Policy
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

export default About;
