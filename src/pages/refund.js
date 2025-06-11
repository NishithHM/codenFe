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
                    Refund And Cancellation
                  </h6>
                  <h2 className="mt-2">Refund and Cancellation Policy</h2>
                  <h4>Refunds</h4>
                </div>
                <p className="mb-4">
                  We value your satisfaction with our products. However, please
                  note that we do not accept returns or offer refunds for
                  products unless there is a manufacturer's defect in the item.
                  If you believe that you have received a product with a
                  manufacturing defect, please contact us immediately.
                </p>
                <p className="mb-4">Return Process for Defective Products</p>
                <p className="mb-4">
                  To initiate a return for a defective product, please follow
                  these steps:
                </p>
                <p className="mb-4">
                  Contact our customer support team within three (3) business
                  days of receiving the product to report the issue. Our team
                  will guide you through the return process, which may include
                  providing photographic evidence of the defect or other
                  information as requested. If we determine that the product has
                  a manufacturing defect, we will provide you with instructions
                  on how to return the item. Please note that the following
                  conditions apply to return requests for defective products:
                </p>
                <p className="mb-4">
                  The item must be unused and in the same condition as when you
                  received it. The item must be in its original packaging. To
                  complete your return, we will require a receipt or proof of
                  purchase. Once we receive and inspect the returned item, we
                  will notify you of the approval or rejection of your refund.
                  If approved, your refund will be processed, and a credit will
                  automatically be applied to your original method of payment.
                </p>
                <p className="mb-4">Non-Returnable Items</p>
                <p className="mb-4">
                  Please be aware that we do not accept returns or offer refunds
                  for the following:
                </p>
                <p className="mb-4">
                  Any software solutions or services related to the product, as
                  these are considered non-returnable and non-refundable. Sale
                  items. Only regular-priced items are eligible for refunds.
                  Cancellation Policy
                </p>
                <p className="mb-4">
                  We understand that circumstances may change, and you may need
                  to cancel an order. If you wish to cancel an order, please
                  contact our customer support team as soon as possible.
                </p>
                <p className="mb-4">
                  Please note the following regarding order cancellations:
                </p>
                <p className="mb-4">
                  Orders can only be cancelled before they are shipped.
                </p>
                <p className="mb-4">
                  Once an order has been shipped, it cannot be cancelled. If an
                  order is cancelled before shipping, a refund will be issued to
                  the original method of payment. Gift Returns
                </p>
                <p className="mb-4">
                  If the item in question was marked as a gift when purchased
                  and shipped directly to you, you will receive a gift credit
                  for the value of your return. Gift credits are
                  non-transferable and can only be used for future purchases on
                  our website.
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
