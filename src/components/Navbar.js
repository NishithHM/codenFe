import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({activeTab, setActiveTab, scrollToSection}) => {
  
  return (
    <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link
                to="/"
                className={`nav-item nav-link ${
                  activeTab === "home" ? "active" : ""
                }`}
                onClick={() => {
                    setActiveTab("home")
                    scrollToSection("home")
            }}
              >
                Home
              </Link>
              <Link
                to="/"
                className={`nav-item nav-link ${
                  activeTab === "services" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("services");
                  scrollToSection("Services");

                }}
              >
                Service
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link ${
                  activeTab === "about" ? "active" : ""
                }`}
                onClick={() => setActiveTab("about")}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`nav-item nav-link ${
                  activeTab === "contact" ? "active" : ""
                }`}
                onClick={() => setActiveTab("contact")}
              >
                Contact Us
              </Link>
              {/* <Link
                to="/orders"
                className={`nav-item nav-link ${
                  activeTab === "orders" ? "active" : ""
                }`}
                onClick={() => setActiveTab("orders")}
              >
                Orders
              </Link> */}
            </div>
          </div>
  )
}

export default Navbar
