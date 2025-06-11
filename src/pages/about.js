import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";
import { Helmet } from "react-helmet";
const About = ({ activeTab, setActiveTab, scrollToSection }) => {
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
  const showClassName = isLoad ? "show" : "";
  return (
    <>
      <Helmet>
        <title>
          About Us | Leading Software Development Company in Bangalore
        </title>
        <meta
          name="description"
          content="Learn more about the software services offered by Coden Technologies, a leading provider of IT solutions in Bangalore."
        />
      </Helmet>
      <div className="container-xxl bg-white p-0">
        <div
          id="spinner"
          className={`${showClassName} bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}
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
            <a href="/" className="navbar-brand p-0">
              <div className="codenMerged">
                <div>
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
            <Navbar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              scrollToSection={scrollToSection}
            />
          </nav>
        </div>

        <section id="AboutUs">
          <div className="container-xxl py-5">
            <div className="container px-lg-5">
              <div className="row g-5">
                <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="title-section position-relative mb-4 pb-2 topPaddingMeduim">
                    <h6
                      className="position-relative text-primary ps-4"
                      title="Coden's about us"
                    >
                      About Us
                    </h6>
                    <h2 className="mt-2">
                      Helping Businesses of All Sizes—From Startups to Global
                      Brands
                    </h2>
                  </div>
                  <p className="mb-4">
                    <strong>Coden Technologies</strong> is a trusted{" "}
                    <strong>IT service provider</strong> known for delivering
                    top-notch, secure, and scalable solutions. Whether you're a{" "}
                    <strong>small business</strong>, a startup, or an
                    established <strong>enterprise</strong>, we offer{" "}
                    <strong>end-to-end IT services</strong>, including{" "}
                    <strong>custom software development</strong>,{" "}
                    <strong>web development</strong>, and{" "}
                    <strong>mobile application development</strong>. Our
                    experienced team uses cutting-edge technologies and industry
                    best practices to ensure your product is reliable, secure,
                    and exceeds your expectations. Our rigorous testing and
                    quality assurance guarantee high performance, security, and
                    user-friendly experiences. Partner with us for{" "}
                    <strong>business growth</strong> and{" "}
                    <strong>digital transformation</strong>.
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    {/* <a className="btn btn-outline-primary btn-square me-3" title="WhatsApp us now!" href="https://api.whatsapp.com/send?text=Hi, I'm interested in availing your services as I believe your expertise and professionalism would be a valuable investment for my needs&phone=8277611667">
              <i className="fab fa-whatsapp"></i>
            </a> */}
                    <a
                      className="btn btn-outline-primary btn-square me-3"
                      title="Coden's LinkedIn"
                      href="https://www.linkedin.com/company/coden/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square me-3"
                      title="Coden's Instagram"
                      href="https://instagram.com/coden_technologies?igshid=MzRlODBiNWFlZA=="
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-outline-primary btn-square"
                      title="Coden's Facebook"
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
                    src="https://easyrevwebpublic.s3.ap-south-1.amazonaws.com/prod/blogs/1b9b95e9-36fb-40da-b7b9-5c4dfaff8c46.png"
                    alt="Coden IT Services"
                    title="Coden IT Solutions Image"
                    loading="eager"
                  />
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
                className="title-section position-relative text-center mb-5 pb-2 wow fadeInUp"
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
                    <small>
                      We also provide time-estimation with quotation
                    </small>
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
                    <small>
                      We use latest tech to ensure the best security{" "}
                    </small>
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

        <Footer setActiveTab={setActiveTab} scrollToSection={scrollToSection}/>
      </div>
    </>
  );
};

export default About;
