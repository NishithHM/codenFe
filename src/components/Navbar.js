import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ activeTab, setActiveTab, scrollToSection }) => {
  const navItems = [
    { name: "Home", path: "/", tab: "home", scrollTo: "home" },
    { name: "Service", path: "/", tab: "services", scrollTo: "Services" },
    { name: "About Us", path: "/about", tab: "about" },
    { name: "Contact Us", path: "/contact", tab: "contact" },
  ];

  return (
    <nav aria-label="Main Navigation" className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0">
        {navItems.map(({ name, path, tab, scrollTo }) => (
          <Link
            key={tab}
            to={path}
            className={`nav-item nav-link ${activeTab === tab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab);
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
