import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";

// Local carousel images
import Coffee1 from "../../assets/images/Coffee-3.jpg";
import Coffee2 from "../../assets/images/Coffee-4.webp";
import Coffee3 from "../../assets/images/Coffee-13.jpg";

import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
  }, []);

  const carouselImages = [Coffee1, Coffee2, Coffee3];

  // Message cards
  const messageCards = [
    { title: "Freshly Brewed", msg: "We serve coffee made from the finest beans, freshly brewed every day.", img: Coffee1 },
    { title: "Premium Quality", msg: "Only the best quality coffee beans for the perfect cup every time.", img: Coffee2 },
    { title: "Cozy Atmosphere", msg: "Enjoy your coffee in a relaxing and warm environment.", img: Coffee3 },
    { title: "Expert Baristas", msg: "Our skilled baristas craft every cup to perfection for the ultimate coffee experience.", img: Coffee1 },
  ];

  // Product cards
  const productCards = [
    { title: "Espresso Delight", price: "$12.99", img: "https://images.unsplash.com/photo-1588776814546-64e60a1e6e5a?auto=format&fit=crop&w=500&q=60" },
    { title: "Cappuccino Heaven", price: "$14.99", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60" },
    { title: "Mocha Magic", price: "$13.99", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=60" },
  ];

  // Navigate to Products
  const handleExplore = () => {
    if (currentUser) {
      navigate("/products");
    } else {
      alert("Please login to explore products!");
    }
  };

  // Open modal for product
  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  // Close modal
  const closeModal = () => setSelectedProduct(null);

  return (
    <>
      <Navbar />
      <Carousel images={carouselImages} interval={4000} />

      {/* Message / Feature Cards */}
      <section className="cards-section">
        <h2>Why Choose Us?</h2>
        <div className="cards-container message-cards">
          {messageCards.map((card, index) => (
            <div className="card message-card" key={index}>
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.msg}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro / Welcome Section */}
      <section className="section-card">
        <h2>Welcome to Coffee Lovers</h2>
        <p>
          Discover the finest coffees from around the world. Explore, enjoy, and share your love for coffee!
        </p>
        <button onClick={handleExplore}>Explore Products</button>
      </section>

      {/* Product Cards */}
      <section className="cards-section">
        <h2>Our Coffees</h2>
        <div className="cards-container product-cards">
          {productCards.map((coffee, index) => (
            <div className="card product-card" key={index}>
              <img src={coffee.img} alt={coffee.title} />
              <h3>{coffee.title}</h3>
              <p>{coffee.price}</p>
              <button onClick={() => handleViewProduct(coffee)}>View Product</button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Product */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProduct.title}</h3>
            <img src={selectedProduct.img} alt={selectedProduct.title} />
            <p>Price: {selectedProduct.price}</p>
            <p>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Coffee made with love and care!
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Home;
