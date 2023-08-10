import React from "react";
import "./UsersPage.css"; // Import the CSS file for styling

const UsersPage = () => {
  return (
    <div className="users-container w-3/4">
      <h2 className="users-title">Users Page</h2>
      <p className="users-text">Explore and manage user profiles.</p>
      <div className="users-list">
        <div className="user-card">
          <img src="https://via.placeholder.com/100" alt="User 1" className="user-avatar" />
          <h3>User 1</h3>
          <p>user1@example.com</p>
        </div>
        <div className="user-card">
          <img src="https://via.placeholder.com/100" alt="User 2" className="user-avatar" />
          <h3>User 2</h3>
          <p>user2@example.com</p>
        </div>
        <div className="user-card">
          <img src="https://via.placeholder.com/100" alt="User 3" className="user-avatar" />
          <h3>User 3</h3>
          <p>user3@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
