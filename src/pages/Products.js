import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Whole Chicken',
      price: 'Rs. 850/kg',
      icon: '🍗',
      badge: 'Best Seller',
      description: 'Fresh farm chicken, thoroughly cleaned and ready to cook. Perfect for roasting, curries, and family meals.',
      features: ['Farm fresh daily', 'Fully cleaned & dressed', 'Average weight: 1-1.5kg']
    },
    {
      id: 2,
      name: 'Boneless Breast',
      price: 'Rs. 1,200/kg',
      icon: '🍖',
      badge: 'Premium',
      badgeType: 'fresh',
      description: 'Premium skinless boneless chicken breast. Ideal for healthy meals, grilling, and quick cooking.',
      features: ['100% boneless', 'No skin, no fat', 'Perfect for grilling']
    },
    {
      id: 3,
      name: 'Chicken Legs (Drumsticks)',
      price: 'Rs. 750/kg',
      icon: '🦵',
      badge: null,
      description: 'Tender and juicy chicken drumsticks, perfect for BBQ, roasting, and traditional Pakistani recipes.',
      features: ['Tender & juicy', 'Great for BBQ', 'Family favorite']
    },
    {
      id: 4,
      name: 'Chicken Wings',
      price: 'Rs. 680/kg',
      icon: '🍗',
      badge: null,
      description: 'Crispy chicken wings perfect for party appetizers, buffalo wings, and snacks.',
      features: ['Party perfect', 'Great for frying', "Kid's favorite"]
    },
    {
      id: 5,
      name: 'Boneless Thighs',
      price: 'Rs. 950/kg',
      icon: '🥩',
      badge: 'Popular',
      description: 'Juicy boneless chicken thighs with rich flavor. Perfect for curries, tikkas, and grilling.',
      features: ['Extra juicy', 'Rich flavor', 'Versatile cooking']
    },
    {
      id: 6,
      name: 'Chicken Breast (Bone-in)',
      price: 'Rs. 900/kg',
      icon: '🍖',
      badge: null,
      description: 'Bone-in chicken breast with extra flavor. Perfect for traditional cooking methods.',
      features: ['Extra flavor', 'Traditional cut', 'Juicy & tender']
    },
    {
      id: 7,
      name: 'Chicken Mince',
      price: 'Rs. 820/kg',
      icon: '🍗',
      badge: null,
      description: 'Fresh chicken mince, perfect for keema, kababs, burgers, and meatballs.',
      features: ['Freshly minced', 'No additives', 'Multi-purpose']
    },
    {
      id: 8,
      name: 'Chicken Bones (Soup)',
      price: 'Rs. 350/kg',
      icon: '🦴',
      badge: 'Fresh',
      badgeType: 'fresh',
      description: 'Premium chicken bones perfect for making healthy bone broth and traditional yakhni.',
      features: ['Rich in nutrients', 'Perfect for broth', 'Healthy option']
    },
    {
      id: 9,
      name: 'Chicken Tikka Cut',
      price: 'Rs. 1,100/kg',
      icon: '🍗',
      badge: null,
      description: 'Pre-cut boneless pieces perfect for tikka, BBQ, and grilling. Ready to marinate!',
      features: ['Pre-cut cubes', 'BBQ ready', 'Time saver']
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <h1>Our Premium Products</h1>
        <p>Explore our complete range of fresh, expertly prepared chicken cuts delivered daily.</p>
      </section>

      {/* Products */}
      <section style={{ padding: '5rem 5%' }}>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {product.icon}
                {product.badge && (
                  <span className={`product-badge ${product.badgeType === 'fresh' ? 'fresh-badge' : ''}`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p>{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">Order Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
