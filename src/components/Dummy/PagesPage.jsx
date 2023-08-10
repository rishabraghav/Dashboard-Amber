import React from "react";
import "./PagesPage.css"; // Import the CSS file for styling

const PagesPage = () => {
  return (
    <div className="pages-container w-3/4">
      <h2 className="pages-title">Pages Page</h2>
      <p className="pages-text">Explore different pages and content.</p>
      <div className="pages-list">
        <div className="page-item">
          <h3>Home</h3>
          <p>Welcome to our home page!</p>
        </div>
        <div className="page-item">
          <h3>About Us</h3>
          <p>Learn about our company and history.</p>
        </div>
        <div className="page-item">
          <h3>Products</h3>
          <p>Explore our amazing products.</p>
        </div>
        {/* Add more page items here */}
      </div>
    </div>
  );
}

export default PagesPage;
