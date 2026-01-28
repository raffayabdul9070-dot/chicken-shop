import React, { useState } from 'react';
// Firebase imports
import { db, collection, addDoc } from '../firebase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    product: '',
    quantity: '',
    delivery: 'asap',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save form data to Firestore collection "orders"
      await addDoc(collection(db, "orders"), {
        ...formData,
        timestamp: new Date()
      });

      alert('Thank you for your order! We will contact you shortly to confirm your delivery.');

      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        product: '',
        quantity: '',
        delivery: 'asap',
        message: ''
      });
    } catch (error) {
      console.error("Error saving order: ", error);
      alert('Something went wrong while submitting your order. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Our team is available to take your orders and answer questions.',
      links: [
        { text: '+92 300 1234567', href: 'tel:+923001234567' },
        { text: '+92 300 1234568', href: 'tel:+923001234568' }
      ]
    },
    {
      icon: '📧',
      title: 'Email Us',
      description: "Send us your inquiries and we'll respond within 24 hours.",
      links: [
        { text: 'info@capitalcuts.pk', href: 'mailto:info@capitalcuts.pk' },
        { text: 'orders@capitalcuts.pk', href: 'mailto:orders@capitalcuts.pk' }
      ]
    },
    {
      icon: '🏪',
      title: 'Visit Our Store',
      description: 'Main Market, Satellite Town\nRawalpindi, Punjab, Pakistan',
      links: [
        { text: 'Hours: Daily 7:00 AM - 10:00 PM', href: null }
      ]
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Chat with us directly on WhatsApp for instant support.',
      links: [
        { text: '+92 300 1234567', href: 'https://wa.me/923001234567' }
      ]
    }
  ];

  const deliveryAreas = [
    {
      area: 'Rawalpindi',
      time: '30-45 Minutes',
      description: 'All areas including Satellite Town, Saddar, Committee Chowk, and surrounding localities.'
    },
    {
      area: 'Islamabad',
      time: '45-60 Minutes',
      description: 'F-6, F-7, F-8, F-10, F-11, G-6 to G-13, and major sectors.'
    },
    {
      area: 'Bahria Town',
      time: '45-60 Minutes',
      description: 'All phases of Bahria Town Rawalpindi and Islamabad.'
    },
    {
      area: 'DHA',
      time: '40-50 Minutes',
      description: 'DHA Phase 1, 2, and surrounding areas.'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <h1>Get In Touch</h1>
        <p>Place your order or reach out to us. We're here to serve you with the best quality chicken!</p>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '6rem 5%' }}>
        <div className="contact-grid">
          {/* Order Form */}
          <div className="order-form">
            <h2>Place Your Order</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Fill out the form below and we'll contact you to confirm your order.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Delivery Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="product">Select Product *</label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a product...</option>
                  <option value="whole-chicken">Whole Chicken - Rs. 850/kg</option>
                  <option value="boneless-breast">Boneless Breast - Rs. 1,200/kg</option>
                  <option value="chicken-legs">Chicken Legs - Rs. 750/kg</option>
                  <option value="chicken-wings">Chicken Wings - Rs. 680/kg</option>
                  <option value="boneless-thighs">Boneless Thighs - Rs. 950/kg</option>
                  <option value="bone-in-breast">Chicken Breast (Bone-in) - Rs. 900/kg</option>
                  <option value="chicken-mince">Chicken Mince - Rs. 820/kg</option>
                  <option value="chicken-bones">Chicken Bones - Rs. 350/kg</option>
                  <option value="tikka-cut">Chicken Tikka Cut - Rs. 1,100/kg</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quantity">Quantity (kg) *</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="delivery">Delivery Time</label>
                  <select
                    id="delivery"
                    name="delivery"
                    value={formData.delivery}
                    onChange={handleChange}
                  >
                    <option value="asap">As Soon As Possible</option>
                    <option value="morning">Morning (8 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Special Instructions</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requirements or instructions..."
                />
              </div>

              <button type="submit" className="btn btn-primary">Place Order</button>
            </form>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {contactInfo.map((info, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '1.5rem'
                }}>
                  {info.icon}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--primary-dark)' }}>
                  {info.title}
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem', whiteSpace: 'pre-line' }}>
                  {info.description}
                </p>
                {info.links.map((link, idx) => (
                  <p key={idx} style={{ marginTop: idx === 0 ? '1rem' : '0.5rem' }}>
                    {link.href ? (
                      <a href={link.href} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>
                        {link.text}
                      </a>
                    ) : (
                      <strong>{link.text}</strong>
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Areas & Map Sections unchanged... */}
      {/* ... keep everything else exactly the same ... */}

    </div>
  );
};

export default Contact;
