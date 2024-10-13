import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import { Helmet } from 'react-helmet';
const Landing = ({ activeTab, setActiveTab, scrollToSection }) => {
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
    }, 777);
  }, []);
  const showClass = isLoad ? "show" : "";
  return (
    <>
    <Helmet>
        <title>Leading Software Company in Bangalore | Coden Technology</title>
        <meta name="description" content="Coden Technologies, a top software company in Bangalore, offers custom app development, web design, and IT consulting services to boost your business." />
      </Helmet>
    <div className="container-xxl bg-white p-0">
      <div
        id="spinner"
        className={`${showClass} bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}
      >
        <div
          className="spinner-grow text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 custom-navbar">
          <a href="" className="navbar-brand p-0">
            <div className="codenMerged">
              <div>
                <img
                  src="./img/logo.svg"
                  alt="Coden Technologies logo"
                  className="codenImageTitle"
                  loading='eager'
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
          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            scrollToSection={scrollToSection}
          />
        </nav>
        <section id="home">
          <div className="container-xxl py-5 bg-primary home-backround mb-5">
            <div className="container my-5 py-5 px-lg-5">
              <div className="row g-5 py-5">
                <div className="text-center text-lg-start">
                  <h4 className="subtitle logo-font animated zoomIn">
                    Transform your <span className="bold">Business</span> with
                    stunning, <span className="bold">user-friendly </span>
                    website from
                  </h4>

                  <div className="codenMerged">
                    <div>
                      {" "}
                      <img
                        src="./img/logo.svg"
                        alt="Coden Technologies logo"
                        className="codenImage"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <h1 className=" title logo-font codenText">oden</h1>
                    </div>
                  </div>

                  <div className="text-center" style={{ marginTop: "10px" }}>
                    <a
                      href="#Services"
                      className="btn btn-outline-primary  px-sm-5 rounded-pill animated fadeIn servicesButton"
                    >
                      Our Services
                    </a>
                    <Link
                      to="/contact"
                      className="btn btn-outline-secondary  px-sm-5 rounded-pill animated fadeIn"
                      onClick={() => setActiveTab("contact")}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="AboutUs" aria-label="Coden IT Services Overview">
        <div className="container-xxl py-5">
          <div className="container px-lg-5">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="title-section position-relative mb-4 pb-2">
                  <h6
                    className="position-relative ps-4"
                    title="About Coden IT Services"
                  >
                    About Us
                  </h6>
                  <h2 className="mt-2">
                    Coden India: Trusted End-to-End IT Services & Software
                    Solutions
                  </h2>
                </div>
                <p className="mb-4">
                  Coden is a leading software service provider offering
                  comprehensive End-to-End IT Solutions. Specializing in IT
                  Consulting, Application Development, Website Design, and
                  Digital Transformation, we help businesses grow and stay
                  competitive in today’s digital landscape.
                </p>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <h6 className="mb-3">
                      <i className="fa fa-check text-primary me-2"></i>
                      Business-Focused Solutions
                    </h6>
                    <h6 className="mb-0">
                      <i className="fa fa-check text-primary me-2"></i>
                      Experienced Professionals
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="mb-3">
                      <i className="fa fa-check text-primary me-2"></i>24/7 IT
                      Support Services
                    </h6>
                    <h6 className="mb-0">
                      <i className="fa fa-check text-primary me-2"></i>Trusted
                      by Global Clients
                    </h6>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-4">
                  {/* <a
                    className="btn btn-outline-primary btn-square me-3"
                    title="Contact us via WhatsApp for IT Services"
                    href="https://api.whatsapp.com/send?text=Hi, I'm interested in availing your services&phone=8277611667"
                    aria-label="WhatsApp Coden for IT Services"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a> */}
                  <a
                    className="btn btn-outline-primary btn-square me-3"
                    title="Coden's LinkedIn Profile"
                    href="https://www.linkedin.com/company/coden/"
                    target="_blank"
                    aria-label="Follow Coden on LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square me-3"
                    title="Follow Coden on Instagram"
                    href="https://instagram.com/coden_technologies?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                    aria-label="Follow Coden on Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-outline-primary btn-square"
                    title="Like Coden on Facebook"
                    href="https://www.facebook.com/profile.php?id=100090469839151"
                    aria-label="Follow Coden on Facebook"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid wow zoomIn"
                  data-wow-delay="0.5s"
                  src="img/about.jpg"
                  alt="Coden India providing IT solutions"
                  title="Coden IT Services and Solutions"
                  aria-hidden="true"
                  loading="eager"

                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section id="testimonial">
        <div
          className="container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5 px-lg-5">
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item bg-transparent border rounded text-white p-4">
                <i className="fa fa-quote-left fa-2x mb-3" title="coden"></i>
                <p>
                  Trust their process… They’re very experienced and know what
                  they’re doing. If you listen to them, they will help elevate
                  your brand and achieve your goals.{" "}
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src="img/protantrix.png"
                    style={{ height: "50px", width: "50px" }}
                    alt="coden protantrix testimony"
                    title="coden protantrix"
                    loading="lazy"

                  />
                  <div className="ps-3">
                    <h6 className="text-white mb-1">Protantrix</h6>
                    <small>Infrastructure Private Limited</small>
                    <a
                      className="btn btn-social"
                      href="https://www.linkedin.com/in/protantrix-ltd-766a73134/"
                      target="_blank"
                      title="coden linkedin"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="testimonial-item bg-transparent border rounded text-white p-4">
                <i className="fa fa-quote-left fa-2x mb-3" title="coden"></i>
                <p>
                  I wasn't aware how to add value for my brand and what we could
                  achieve, We take this opportunity to thank CODEN for the
                  amazing work and Robust service
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src="img/Amith mirja.png"
                    style={{ height: "50px", width: "50px" }}
                    alt="coden amith testimonial"
                    title="coden amith"
                    loading="lazy"

                  />
                  <div className="ps-3">
                    <h6 className="text-white mb-1">Amith Meerja</h6>
                    <small>Business Manager</small>
                    <a
                      className="btn btn-social"
                      href="https://www.linkedin.com/in/amith-meerja-9b75b0271/"
                      target="_blank"
                      title="coden linkedin"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="testimonial-item bg-transparent border rounded text-white p-4">
                <i className="fa fa-quote-left fa-2x mb-3" title="coden"></i>
                <p>
                  With CODEN's support our website is much easier to use and
                  maintain, loved the critical thinking of team, Will
                  recommended them to many of our partners.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src="img/Kunal kumar.png"
                    style={{ height: "50px", width: "50px" }}
                    alt="coden kunal testimonial"
                    title="coden kunal"
                    loading="lazy"

                  />
                  <div className="ps-3">
                    <h6 className="text-white mb-1">Kunal Kumar</h6>
                    <small>Client Relations Manager</small>
                    <a
                      className="btn btn-social"
                      href="https://www.linkedin.com/in/kunal-kumar-618602277/"
                      target="_blank"
                      title="coden linkedin"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="testimonial-item bg-transparent border rounded text-white p-4">
                <i className="fa fa-quote-left fa-2x mb-3" title="coden"></i>
                <p>
                  First className services with the commitment to do the job
                  right, while making sure the client gets what they need, &
                  within budgets. i would recommend.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0 rounded-circle"
                    src="img/ShreeKrishnaFarmNDNursery.PNG"
                    style={{ height: "50px", width: "50px" }}
                    alt="coden ShreeKrishnaFarm&Nursery testimonial"
                    title="coden skfn"
                    loading="lazy"

                  />
                  <div className="ps-3">
                    <h6 className="text-white mb-1">Shree Krishna Nursery</h6>
                    <small>Horticultural sales.</small>
                    <a
                      className="btn btn-social"
                      href="https://www.linkedin.com/in/inchara-nadig-4b2913230/"
                      target="_blank"
                      title="coden linkedin"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer setActiveTab={setActiveTab} scrollToSection={scrollToSection} />
    </div>
    </>
  );
};

export default Landing;
