import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Whole Chicken',
      price: 'Rs. 850/kg',
      icon: '🍗',
      badge: 'Best Seller',
      description: 'Fresh farm chicken, cleaned and ready to cook. Perfect for family meals and gatherings.'
    },
    {
      id: 2,
      name: 'Boneless Breast',
      price: 'Rs. 1,200/kg',
      icon: '🍖',
      badge: null,
      description: 'Premium boneless chicken breast, perfect for healthy meals, grilling, and quick cooking.'
    },
    {
      id: 3,
      name: 'Chicken Legs',
      price: 'Rs. 750/kg',
      icon: '🦵',
      badge: 'Popular',
      description: 'Tender and juicy chicken legs, ideal for BBQ, roasting, and traditional recipes.'
    }
  ];

  const features = [
    {
      icon: '🌿',
      title: 'Farm Fresh',
      description: 'Sourced directly from trusted local farms, ensuring the highest quality and freshness in every product.'
    },
    {
      icon: '✂️',
      title: 'Expert Cuts',
      description: 'Professionally butchered by experienced craftsmen who know exactly how to prepare each cut to perfection.'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Same-day delivery available in Rawalpindi and Islamabad. Your order arrives fresh and ready to cook.'
    },
    {
      icon: '💯',
      title: 'Quality Guarantee',
      description: '100% satisfaction guaranteed or your money back. We stand behind the quality of every product we sell.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Premium Fresh Chicken
            <span>Delivered to Your Door</span>
          </h1>
          <p>
            Experience the finest quality chicken cuts from Capital Cuts. Farm-fresh, 
            expertly prepared, and delivered with care to ensure maximum freshness and flavor.
          </p>
          <div className="cta-buttons">
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=800&h=600&fit=crop" 
            alt="Fresh Chicken" 
          />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2 className="section-title">Why Choose Capital Cuts?</h2>
        <p className="section-subtitle">
          We're committed to delivering excellence in every cut, ensuring quality you can taste and trust.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Preview */}
      <section className="products-section">
        <h2 className="section-title">Our Popular Products</h2>
        <p className="section-subtitle">
          Explore our selection of premium chicken cuts, prepared fresh daily for your culinary needs.
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {product.icon}
                {product.badge && <span className="product-badge">{product.badge}</span>}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p>{product.description}</p>
                <Link to="/products" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Experience Premium Quality?</h2>
        <p>Order now and get fresh chicken delivered to your doorstep today!</p>
        <Link to="/contact" className="btn">Order Now</Link>
      </section>
    </div>
  );
};

export default Home;
