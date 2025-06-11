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
                    title="coden's about us "
                  >
                    Refund, Return, and Shipping Policy
                  </h6>
                  <h2 className="mt-2">Refund, Return, and Shipping Policy</h2>
                </div>
                <h4>Refunds</h4>
                <p className="mb-4">
                  We value your satisfaction with our products. However, we do not
                  accept returns or offer refunds unless the product has a
                  manufacturer's defect.
                </p>
                <p className="mb-4">
                  <strong>If you believe your product is defective:</strong>
                  <br />
                  You must contact us within three (3) business days of receiving
                  the item.
                  <br />
                  After the 3-day period, we will no longer be able to process
                  your request.
                </p>
                <h4>Return Process for Defective Products</h4>
                <p className="mb-4">
                  To initiate a return for a defective product, please follow
                  these steps:
                </p>
                <ul className="mb-4">
                  <li>
                    Contact our customer support team within 3 business days of
                    delivery to report the issue.
                  </li>
                  <li>
                    Provide photographic or video evidence of the defect as
                    requested by our team.
                  </li>
                  <li>
                    If the product qualifies as defective, we will share return
                    instructions.
                  </li>
                </ul>
                <p className="mb-4">
                  <strong>Return conditions:</strong>
                </p>
                <ul className="mb-4">
                  <li>Item must be unused and in original condition.</li>
                  <li>It must be returned in original packaging.</li>
                  <li>A receipt or proof of purchase is required.</li>
                </ul>
                <p className="mb-4">
                  Once the returned item is received and inspected, you’ll be
                  notified of the approval or rejection of your refund. If
                  approved, a refund will be processed within 7–10 business days
                  to your original payment method.
                </p>
                <h4>Non-Returnable Items</h4>
                <p className="mb-4">
                  We do not accept returns or offer refunds for the following:
                </p>
                <ul className="mb-4">
                  <li>
                    Software solutions or services (non-tangible and non-returnable).
                  </li>
                  <li>Items marked as final sale or discounted products.</li>
                </ul>
                <h4>Cancellation Policy</h4>
                <p className="mb-4">
                  We understand you may need to cancel an order. If so, please
                  reach out to our support team immediately.
                </p>
                <p className="mb-4">
                  <strong>Cancellation Guidelines:</strong>
                </p>
                <ul className="mb-4">
                  <li>Orders can be cancelled only before shipment.</li>
                  <li>Once shipped, the order cannot be cancelled.</li>
                  <li>
                    If cancelled before shipping, a refund will be issued within
                    7–10 business days to the original payment method.
                  </li>
                </ul>
                <h4>Gift Returns</h4>
                <p className="mb-4">
                  If your item was marked as a gift and shipped directly to you:
                </p>
                <ul className="mb-4">
                  <li>A gift credit equal to the return value will be issued.</li>
                  <li>
                    Gift credits are non-transferable and can only be used for
                    future purchases on our website.
                  </li>
                  <li>
                    The return must still follow the 3-day defect reporting policy
                    and packaging conditions.
                  </li>
                </ul>
                <h4>Shipping Timeframes</h4>
                <ul className="mb-4">
                  <li>
                    Standard product orders are processed within 2–3 business
                    days.
                  </li>
                  <li>
                    Delivery typically occurs within 5–7 business days after
                    dispatch, depending on your location.
                  </li>
                  <li>
                    Shipping delays due to courier or external factors are not
                    under our control, but we will assist in tracking the order.
                  </li>
                </ul>
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
