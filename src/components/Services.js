import React from 'react';

const servicesData = [
  {
    icon: 'fa-paint-brush',
    title: 'UX/UI Design Services',
    description: 'We provide elegant, user-centered UX/UI designs that offer a seamless experience while reflecting your brand’s identity. Improve customer interaction and website engagement with our top-tier design solutions.',
  },
  {
    icon: 'fa-laptop',
    title: 'Professional Website Development',
    description: 'Our expert website development services ensure responsive, fast-loading websites for an optimal user experience and improved SEO rankings.',
  },
  {
    icon: 'fa-mobile',
    title: 'Cross-Platform App Development',
    description: 'We build cross-platform mobile apps with consistent performance across iOS and Android. Enhance user engagement through fast, reliable apps tailored to your needs.',
  },
  {
    icon: 'fa-cloud',
    title: 'Cloud Management Solutions',
    description: 'We automate and manage scalable cloud infrastructure, ensuring efficient cloud solutions that enhance your business operations.',
  },
  {
    icon: 'fa-server',
    title: 'Domains, Hosting, and SEO Services',
    description: 'Boost your search engine rankings and website speed with our reliable domain hosting and advanced SEO services, driving more traffic to your business.',
  },
  {
    icon: 'fa-wrench',
    title: '24/7 Support and Website Maintenance',
    description: 'Our team offers ongoing support and website maintenance services, ensuring your website stays up-to-date and runs smoothly post-launch.',
  },
];

const Services = () => {
  return (
    <section id="Services" aria-label="Our services for web design, development, and SEO">
      <div className="container-xxl py-5">
        <div className="container px-lg-5">
          <header className="section-title text-center mb-5">
            <h6 className="text-primary ps-4">Our Expert Services</h6>
            <h2>UX/UI Design, Web Development, App Development, and Cloud Management Solutions</h2>
          </header>
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <article className="col-lg-4 col-md-6" aria-label={title}>
      <div className="service-item text-center rounded">
        <div className="service-icon">
          <i className={`fa ${icon} fa-2x`} aria-hidden="true"></i>
        </div>
        <h5 className="mb-3">{title}</h5>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Services;
