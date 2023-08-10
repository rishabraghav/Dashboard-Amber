import React from "react";
import "./LogoutPage.css"; // Import the CSS file for styling

const LogoutButton = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    // For example: Clear user session, redirect to login page, etc.
    console.log("User has been logged out");
  };

  return (
    <div className="logout-container flex flex-col justify-center bg-white w-3/4">
      <h2 className="logout-title">Logout</h2>
      <p className="logout-text">
        Are you sure you want to logout? You will be redirected to the login page.
      </p>
      <div className="logout-buttons">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        <button className="cancel-button">Cancel</button>
      </div>
    </div>
  );
}

export default LogoutButton;
