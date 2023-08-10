import React from "react";
import "./SupportPage.css"; // Import the CSS file for styling

const SupportPage = () => {
  return (
    <div className="support-container w-3/4">
      <h2 className="support-title">Support Center</h2>
      <p className="support-text">
        Welcome to our Support Center. Our team is here to assist you with any questions or issues you may have.
      </p>
      <div className="support-form-container">
        <h3 className="support-form-title">Contact Us</h3>
        <form className="support-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          
          <button type="submit" className="support-submit-button bg-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SupportPage;
