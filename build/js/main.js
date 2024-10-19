(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;





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

// Function to scroll to a specific section (if needed)
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


// Function to set active tab
let activeTab = ''; // default active tab

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
