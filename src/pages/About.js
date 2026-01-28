import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'We never compromise on quality. Every product is carefully selected and inspected to meet our high standards.'
    },
    {
      icon: '🤝',
      title: 'Customer Trust',
      description: 'Building long-term relationships with our customers through transparency, honesty, and consistent quality.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Supporting local farmers and promoting sustainable farming practices that benefit our community.'
    },
    {
      icon: '⚡',
      title: 'Fast Service',
      description: 'Same-day delivery and efficient service because we know your time is valuable.'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '10+', label: 'Partner Farms' },
    { number: '500+', label: 'Daily Deliveries' },
    { number: '100%', label: 'Fresh Guarantee' }
  ];

  const team = [
    {
      name: 'Ahmed Khan',
      role: 'Founder & CEO',
      icon: '👨‍💼',
      description: 'With 15 years of experience in the poultry industry, Ahmed leads our mission to provide quality chicken to every home.'
    },
    {
      name: 'Hassan Ali',
      role: 'Head Butcher',
      icon: '👨‍🍳',
      description: 'Master butcher with decades of experience ensuring every cut meets our exacting standards.'
    },
    {
      name: 'Fatima Malik',
      role: 'Operations Manager',
      icon: '👩‍💼',
      description: 'Ensures smooth operations and timely deliveries to keep our customers satisfied every day.'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <h1>About Capital Cuts</h1>
        <p>Committed to delivering the finest quality chicken to families across Rawalpindi and Islamabad since 2020.</p>
      </section>

      {/* Story Section */}
      <section style={{ padding: '6rem 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
              Our Story
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              Capital Cuts was founded with a simple mission: to provide families in Rawalpindi and Islamabad 
              with access to premium quality, farm-fresh chicken that they can trust.
            </p>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              What started as a small family business has grown into one of the region's most trusted names in 
              fresh poultry. We work directly with local farmers who share our commitment to quality, ensuring 
              that every chicken we deliver meets our strict standards for freshness and taste.
            </p>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', lineHeight: '1.9' }}>
              Today, we're proud to serve thousands of satisfied customers who rely on us for their daily chicken needs.
            </p>
          </div>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', 
            borderRadius: '20px', 
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
          }}>
            🏪
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="features">
        <h2 className="section-title">Our Core Values</h2>
        <p className="section-subtitle">The principles that guide everything we do at Capital Cuts.</p>
        <div className="features-grid">
          {values.map((value, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon" style={{ width: '100px', height: '100px', fontSize: '3rem' }}>
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '6rem 5%', background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', color: 'white' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', fontWeight: '900', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '1.2rem', opacity: '0.95' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '6rem 5%', background: 'var(--cream)' }}>
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">Dedicated professionals committed to serving you the best.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          {team.map((member, index) => (
            <div key={index} className="product-card">
              <div className="product-image" style={{ height: '300px', fontSize: '6rem' }}>
                {member.icon}
              </div>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>
                  {member.name}
                </h3>
                <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '1rem' }}>
                  {member.role}
                </p>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 5%', background: 'white', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
          Experience the Capital Cuts Difference
        </h2>
        <p style={{ fontSize: '1.3rem', color: 'var(--text-light)', marginBottom: '2.5rem' }}>
          Join thousands of satisfied customers who trust us for their daily chicken needs.
        </p>
        <Link to="/products" className="btn btn-primary">View Our Products</Link>
      </section>
    </div>
  );
};

export default About;
