import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const RefundAndCancellation = () => {
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
                    title="coden's refund and return policy"
                  >
                    Refund and Return Policy
                  </h6>
                  <h2 className="mt-2">Refund and Return Policy</h2>
                  <p className="mt-2 mb-0">
                    <strong>Effective Date: 12-06-2025</strong>
                  </p>
                </div>
                <p className="mb-4">
                  At Coden Technologies, we are committed to delivering
                  high-quality software services and digital products. Please read
                  the following policy carefully to understand our refund and
                  return terms.
                </p>
                <h4>1. Nature of Services</h4>
                <p className="mb-4">
                  All our offerings — including websites, web applications, and
                  software development services — are custom-built digital
                  services. These are non-returnable once delivered or once
                  development has commenced.
                </p>
                <h4>2. Refund Policy</h4>
                <ul className="mb-4">
                  <li>
                    <strong>a. Project Cancellation (Before Work Begins):</strong>
                    <br />
                    If the client cancels the project before any work has started,
                    a 100% refund will be issued.
                    <br />
                    <em>Refund Credit Timeline:</em> The refund will be processed
                    within 3–5 business days, and it may take an additional 5–7
                    business days for the amount to reflect in your bank or credit
                    account, depending on your payment provider.
                  </li>
                  <li className="mt-3">
                    <strong>b. Project Cancellation (After Work Begins):</strong>
                    <br />
                    If the project is canceled after work has commenced, a partial
                    refund may be provided based on work completed and resources
                    allocated. A minimum 30% of the project fee is non-refundable.
                    <br />
                    <em>Refund Credit Timeline:</em> If approved, the partial refund
                    will be processed within 7–10 business days, and it may take
                    5–7 additional business days for the amount to appear in your
                    account.
                  </li>
                  <li className="mt-3">
                    <strong>c. Non-Delivery or Missed Deadlines (Our Side):</strong>
                    <br />
                    If we fail to deliver the promised service and no extension is
                    mutually agreed upon, a full or partial refund may be granted.
                    <br />
                    <em>Refund Credit Timeline:</em> Approved refunds in such cases
                    will be processed within 7 business days, and credited within
                    5–7 business days after processing.
                  </li>
                </ul>
                <h4>3. No Refunds in the Following Cases</h4>
                <ul className="mb-4">
                  <li>
                    If the service is delivered as per agreed terms and scope.
                  </li>
                  <li>
                    Delays or issues caused by the client (e.g., late feedback or
                    missing inputs).
                  </li>
                  <li>
                    Change of mind or project direction mid-development.
                  </li>
                  <li>
                    Third-party software issues (hosting, plugins, payment
                    gateways, etc.).
                  </li>
                </ul>
                <h4>4. Subscription-Based Services</h4>
                <ul className="mb-4">
                  <li>For any subscriptions (e.g., maintenance or hosting):</li>
                  <li>Cancel before the next billing cycle to avoid charges.</li>
                  <li>
                    No refunds will be issued once the subscription period starts.
                  </li>
                </ul>
                <h4>5. Dispute Resolution</h4>
                <p className="mb-4">
                  If you're not satisfied with a service, contact us within 7 days
                  of delivery at{" "}
                  <a href="mailto:[your support email]">contactus@codentechnologies.com</a>.
                  We will review your concern and aim to resolve it fairly.
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

export default RefundAndCancellation;
