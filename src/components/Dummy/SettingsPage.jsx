import React from "react";
import "./SettingsPage.css"; // Import the CSS file for styling

const SettingsPage = () => {
  return (
    <div className="settings-container w-3/4">
      <h2 className="settings-title">Settings</h2>
      <p className="settings-text">Configure your account settings.</p>
      <div className="settings-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        
        <button className="settings-save-button bg-primary">Save Changes</button>
      </div>
    </div>
  );
}

export default SettingsPage;
