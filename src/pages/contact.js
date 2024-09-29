import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
const Contact = ({activeTab, setActiveTab, scrollToSection}) => {
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
    <>
    <Helmet>
        <title>Contact Coden Technologies | Software & IT Services in Bangalore</title>
        <meta name="description" content="Contact Coden Technologies - Your Trusted Software Development Partner in Bangalore" />
      </Helmet>
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
          <a href="/" className="navbar-brand p-0">
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
         <Navbar activeTab={activeTab} setActiveTab={setActiveTab} scrollToSection={scrollToSection}/>
        </nav>
      </div>

      <section id="ContactUs">
    <div className="container-xxl py-5">
        <div className="container px-lg-5">
            <div className="row g-5">
                <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="section-title position-relative mb-4 pb-2 topPaddingMeduim">
                        <h6 className="position-relative text-primary ps-4" title="Contact Coden Technologies for services">
                            Contact Us
                        </h6>
                        <h2 className="mt-2">
                            Ready to elevate your project with expert solutions? Get in touch today.
                        </h2>
                    </div>
                    <p className="mb-4">
                        Need help with your next big project or want to discuss our web development, mobile app development, or custom software services? We're here to assist you. Contact Coden Technologies today for a free consultation, and let's take your business to new heights.
                    </p>
                    <div style={{ marginTop: "10px" }}>
                        <a href="tel:+91 8277611667" className="btn btn-outline-primary px-sm-5 rounded-pill animated fadeIn">
                            Tap to Call
                        </a>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                        <a className="btn btn-outline-primary btn-square me-3" title="WhatsApp Coden Technologies Now!" href="https://api.whatsapp.com/send?text=Hi, I'm interested in availing your services as I believe your expertise and professionalism would be a valuable investment for my needs&phone=8277611667">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a className="btn btn-outline-primary btn-square me-3" title="Connect with Coden Technologies on LinkedIn" href="https://www.linkedin.com/company/coden/" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="btn btn-outline-primary btn-square me-3" title="Follow Coden Technologies on Instagram" href="https://instagram.com/coden_technologies?igshid=MzRlODBiNWFlZA==" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="btn btn-outline-primary btn-square" title="Like Coden Technologies on Facebook" href="https://www.facebook.com/profile.php?id=100090469839151">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img className="img-fluid wow zoomIn topPaddingLarge" data-wow-delay="0.5s" src="img/contactUs.png" alt="Contact Coden Technologies" title="Get in touch with Coden Technologies" />
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
        className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <h6
          className="position-relative d-inline text-primary ps-4"
          title="coden our services"
        >
          Maps
        </h6>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124426.97355474683!2d77.51270386015922!3d12.949894900628076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c29632dc5caa75%3A0x8f90d294e4db522e!2sCoden!5e0!3m2!1sen!2sin!4v1678185401161!5m2!1sen!2sin"
        className="mapsIframe"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <Footer/>
    </div>
    </>
  );
};

export default Contact;
