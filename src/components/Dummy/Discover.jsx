import React from "react";
import "./DiscoverPage.css"; // Import the CSS file for styling

const DiscoverPage = () => {
  return (
    <div className="discover-container">
      <h2 className="discover-title">Discover Page</h2>
      <p className="discover-text">Welcome to the Discover page. Here you can explore amazing things!</p>
      <div className="discover-section">
        <h3 className="discover-section-title">Featured Items</h3>
        <div className="discover-items">
          <div className="discover-item">
            <img src="https://via.placeholder.com/150" alt="Item 1" className="discover-item-image" />
            <p>Item 1</p>
          </div>
          <div className="discover-item">
            <img src="https://via.placeholder.com/150" alt="Item 2" className="discover-item-image" />
            <p>Item 2</p>
          </div>
          <div className="discover-item">
            <img src="https://via.placeholder.com/150" alt="Item 3" className="discover-item-image" />
            <p>Item 3</p>
          </div>
        </div>
      </div>
      <div className="discover-section">
        <h3 className="discover-section-title">Popular Categories</h3>
        <div className="discover-categories">
          <div className="discover-category">
            <img src="https://via.placeholder.com/100" alt="Category 1" className="discover-category-image" />
            <p>Category 1</p>
          </div>
          <div className="discover-category">
            <img src="https://via.placeholder.com/100" alt="Category 2" className="discover-category-image" />
            <p>Category 2</p>
          </div>
          <div className="discover-category">
            <img src="https://via.placeholder.com/100" alt="Category 3" className="discover-category-image" />
            <p>Category 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverPage;
