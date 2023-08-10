import React from "react";
import "./ApplicationsPage.css"; // Import the CSS file for styling

const ApplicationsPage = () => {
  return (
    <div className="applications-container w-3/4 bg-white">
      <h2 className="applications-title">Applications Page</h2>
      <p className="applications-text">Explore and manage different applications.</p>
      <div className="applications-grid">
        <div className="application-card">
          <img src="https://via.placeholder.com/150" alt="App 1" className="application-icon" />
          <h3>Application 1</h3>
          <p>A fantastic app for productivity.</p>
          <p className="text-primary application-link">Learn More</p>
        </div>
        <div className="application-card">
          <img src="https://via.placeholder.com/150" alt="App 2" className="application-icon" />
          <h3>Application 2</h3>
          <p>Discover new places with this app.</p>
          <p className="text-primary application-link">Learn More</p>
        </div>
        {/* Add more application cards here */}
      </div>
    </div>
  );
}

export default ApplicationsPage;
