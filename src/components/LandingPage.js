import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6")',
      backgroundSize: 'cover',
      height: '100vh',
      color: 'white',
      textAlign: 'center',
      paddingTop: '20vh'
    }}>
      <h1>Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants to brighten your home.</p>
      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
