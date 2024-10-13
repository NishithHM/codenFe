import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ activeTab, setActiveTab, scrollToSection }) => {
  const location = useLocation();

  // Function to get query parameters from the URL
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      scrollTo: params.get("scrollTo"),
    };
  }

  // Set active tab and scroll on page load (on initial render)
  window.onload = () => {
    const { scrollTo } = getQueryParams();
    if (scrollTo) {
      scrollToSection(scrollTo);
      setActiveTab(scrollTo || sessionStorage.getItem("activeTab"));
      sessionStorage.setItem("activeTab", scrollTo);
    }
  }; // Empty dependency array ensures this runs only once on initial load

  // Listen to route changes and update the active tab based on the path
  useEffect(() => {
    const { pathname } = location;

    // Update active tab based on pathname
    if (pathname === "/") {
      setActiveTab(sessionStorage.getItem("activeTab") === "Services" ? "Services" : "home");
    } else if (pathname === "/about") {
      setActiveTab("about");
    } else if (pathname === "/contact") {
      setActiveTab("contact");
    } 

    
  }, [location, setActiveTab]); // Listen to location changes

  console.log('sessionStorage', sessionStorage.getItem("activeTab"))
  const navItems = [
    { name: "Home", path: "/", tab: "home", scrollTo: "home" },
    { name: "Service", path: "/", tab: "Services", scrollTo: "Services" },
    { name: "About Us", path: "/about", tab: "about" },
    { name: "Contact Us", path: "/contact", tab: "contact" },
    { name: "Blog", path: "https://codentechnologies.com/blogs", tab: "blog" },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className="collapse navbar-collapse"
      id="navbarCollapse"
    >
      <div className="navbar-nav ms-auto py-0">
        {navItems.map(({ name, path, tab, scrollTo }) => (
          <Link
            key={tab}
            to={path}
            className={`nav-item nav-link ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
              sessionStorage.setItem("activeTab", tab);
              if (scrollTo) scrollToSection(scrollTo);
            }}
            title={name}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
