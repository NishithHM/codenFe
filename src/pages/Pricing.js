import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pricing = ({ activeTab, setActiveTab, scrollToSection }) => {
  const [isLoad, setLoading] = useState(true);
  useEffect(() => {
    new WOW().init();
    setTimeout(() => {
      setLoading(false);
    }, 777);
  }, []);
  const showClass = isLoad ? "show" : "";
  return (
    <div className="container-xxl bg-white p-0">
      <div
        id="spinner"
        className={`${showClass} bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}
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
                <img
                  src="./img/logo.svg"
                  alt="coden logo"
                  className="codenImageTitle"
                />
              </div>
              <div>
                <h1 className="title logo-font codenTextTitle">oden</h1>
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
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} scrollToSection={scrollToSection} />
        </nav>
      </div>
      <section id="Pricing">
        <div className="container-xxl py-5">
          <div className="container px-lg-5">
            <div className="row g-5">
              <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                <div className="section-title position-relative mb-4 pb-2 topPaddingMeduim">
                  <h6 className="position-relative text-primary ps-4" title="Coden Pricing">Pricing</h6>
                  <h2 className="mt-2">Our Pricing Packages</h2>
                </div>
                <p className="mb-4">
                  At Coden Technologies, we offer flexible pricing designed to meet your needs — whether you're launching your first website or building a custom enterprise solution.
                </p>
                <p className="mb-4">
                  We also understand that every business is unique. That’s why we offer two completely free consultations to discuss your project goals and suggest the most suitable plan — at no obligation.
                </p>
                <h4 className="mb-3">🔹 Our Packages</h4>
                <div className="table-responsive mb-4">
                  <table className="table table-bordered align-middle text-center">
                    <thead className="table-light">
                      <tr>
                        <th>Features</th>
                        <th>Starter<br/>₹25,000</th>
                        <th>Professional<br/>₹49,000</th>
                        <th>Enterprise<br/>₹98,000</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Pages Included</td><td>Up to 5 Pages</td><td>Up to 10 Pages</td><td>Up to 20 Pages</td></tr>
                      <tr><td>Responsive Design</td><td>✅</td><td>✅</td><td>✅</td></tr>
                      <tr><td>Contact / Inquiry Form</td><td>✅</td><td>✅</td><td>✅</td></tr>
                      <tr><td>Basic SEO Setup</td><td>✅</td><td>✅</td><td>✅</td></tr>
                      <tr><td>Admin Panel / CMS</td><td>❌</td><td>✅</td><td>✅</td></tr>
                      <tr><td>Blog Section</td><td>❌</td><td>✅</td><td>✅</td></tr>
                      <tr><td>Custom Features / Modules</td><td>❌</td><td>Up to 2 Modules</td><td>Up to 5 Modules</td></tr>
                      <tr><td>Hosting (1 Year)</td><td>✅ (Basic)</td><td>✅ (Standard)</td><td>✅ (Premium)</td></tr>
                      <tr><td>Domain (1 Year)</td><td>✅</td><td>✅</td><td>✅</td></tr>
                      <tr><td>Support</td><td>15 Days Post-Launch</td><td>30 Days Post-Launch</td><td>60 Days Post-Launch</td></tr>
                      <tr><td>Delivery Time</td><td>7–10 Business Days</td><td>15–20 Business Days</td><td>25–30 Business Days</td></tr>
                    </tbody>
                  </table>
                </div>
                <h5 className="mb-3">💡 Need Something Custom?</h5>
                <p className="mb-4">
                  These packages are just a starting point. If you have specific requirements (e.g., payment gateways, dashboards, APIs, inventory systems), we’re happy to customize a plan just for you.
                </p>
                <ul className="mb-4">
                  <li>✅ Two free consultation sessions included — to understand your vision and recommend the best path forward.</li>
                </ul>
                <h5 className="mb-3">💬 Let’s Talk</h5>
                <p className="mb-2">Get in touch today to schedule your free consultation — no pressure, no obligation. Let’s build something impactful for your business.</p>
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:contactus@codentechnologies.com">contactus@codentechnologies.com</a></p>
                <p className="mb-2"><strong>Phone:</strong> <a href="tel:8277611667">8277611667</a></p>
                <p className="mb-2"><strong>Website:</strong> <a href="https://codentechnologies.com" target="_blank" rel="noopener noreferrer">https://codentechnologies.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
