const navItems = [
    { name: "Home", path: "https://codentechnologies.com/?scrollTo=home", tab: "home", scrollTo: "home" },
    { name: "Service", path: "https://codentechnologies.com/?scrollTo=Services", tab: "services", },
    { name: "About Us", path: "https://codentechnologies.com/about?scrollTo=about", tab: "about" },
    { name: "Contact Us", path: "https://codentechnologies.com/contact?scrollTo=contact", tab: "contact" },
    { name: "Blog", path: "https://codentechnologies.com/blogs", tab: "blog" },
];

// Get the navigation container
const navTabList = document.getElementById('nav-tabs-list');
const navbar = document.querySelector('.custom-navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // adjust the scroll position according to your needs
      navbar.classList.add('sticky-top');
      navbar.classList.add('shadow-sm');
  
      
    } else {
      navbar.classList.remove('sticky-top');
      navbar.classList.remove('shadow-sm');
    }
  });
// Function to scroll to a specific section (if needed)
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


// Function to set active tab
let activeTab = 'blog'; // default active tab

function setActiveTab(tab) {
    activeTab = tab;
    sessionStorage.setItem("activeTab", tab);
    updateNavItems();
}

// Function to update navigation items dynamically
function updateNavItems() {
    navTabList.innerHTML = ''; // Clear current items

    navItems.forEach(({ name, path, tab, scrollTo }) => {
        const link = document.createElement('a');
        link.textContent = name;
        link.href = path;
        link.classList.add('nav-item', 'nav-link');

        // Check if the link is an internal scroll
        if (scrollTo) {
            link.addEventListener('click', (e) => {
                setActiveTab(tab);
                scrollToSection(scrollTo);
            });
        } else {
            link.rel = "noopener noreferrer"; 
        }

        if (activeTab === tab) {
            link.classList.add('active');
        }

        navTabList.appendChild(link);
    });
}

// Initial call to populate the navigation
updateNavItems();
