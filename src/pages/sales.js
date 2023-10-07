import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SalesPolicy = () => {
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
                                        Sales Policy
                                    </h6>
                                    <h2 className="mt-2">Sales Policy</h2>
                                </div>
                                <div>
                                    <p>
                                        Salesman Terms and Conditions
                                    </p>
                                </div>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>
                                        1. Sales Targets
                                    </strong>{" "}
                                    <br />
                                    1.1. Salesmen are required to sell a minimum of 30 digital NFC cards per month to become eligible for the basic salary ( that is at least one card per day).
                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>
                                        2. Weekly Targets
                                    </strong>{" "}
                                    <br />
                                    2.1. Salesmen are expected to sell a minimum of 7 cards per week. <br />
                                    2.2. Failure to meet the weekly target will result in:
                                    - First-week miss: Notification
                                    - Second-week miss: Notification or termination, based on overall performance.
                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>3. Pricing Guidelines</strong>{" "}
                                    <br />
                                    3.1. Salesmen must not sell the digital NFC cards above the fixed price specified by the company.
                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>4. Handling Transactions</strong>{" "}
                                    <br />
                                    4.1. Salesmen are strictly prohibited from collecting payments into their personal accounts or wallets. All transactions must be directed to the company's designated account.
                                    <br />
                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>
                                        5. Incentives
                                    </strong>{" "}
                                    <br /> 5.1. Incentives are calculated based on sales performance and are subject to change at the company's discretion. <br />
                                    5.2. The company reserves the right to determine the eligibility criteria and payout structure for incentives.

                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>6. Salary and Incentive Disbursement</strong>{" "}
                                    <br /> 6.1. The company reserves the right to determine the salary and incentive payment schedule. <br />
                                    6.2. Payment is subject to meeting sales targets and adhering to company policies.
                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>7. Termination</strong>{" "}
                                    <br /> 7.1. The company reserves the right to terminate a salesman's employment without prior notice, for reasons including but not limited to performance issues, policy violations, or business needs.
                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>8. Resignation</strong>{" "}
                                    <br /> 8.1. If a salesman wishes to resign, they must provide the company with one week's notice in advance.<br />
                                    8.2. Upon resignation, the salesman must return all company property and belongings in their possession.
                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>9. Company Property</strong>{" "}
                                    <br /> 9.1. Salesmen are responsible for the safekeeping of company property provided to them. <br/>
                                    9.2. Upon termination or resignation, all company property must be returned in good condition.

                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>10. Confidentiality</strong>{" "}
                                    <br /> 10.1. Salesmen must maintain the confidentiality of all company-related information, including customer data and business strategies.
                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>11. Code of Conduct</strong>{" "}
                                    <br /> 11.1. Salesmen are expected to conduct themselves professionally, adhere to ethical sales practices, and represent the company with integrity.
                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>12. Training and Compliance</strong>{" "}
                                    <br /> 12.1. Salesmen may be required to undergo training and adhere to compliance requirements as specified by the company.
                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>13. Amendments</strong>{" "}
                                    <br /> 13.1. These terms and conditions are subject to change by the company at its sole discretion.
                                </p>
                                <p className="mb-4">
                                    <strong style={{ color: "#2581C2" }}>14. Acceptance</strong>{" "}
                                    <br /> 14.1. By accepting employment as a salesman, you acknowledge that you have read, understood, and agreed to abide by these terms and conditions.
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

export default SalesPolicy;
