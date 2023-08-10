import React from "react";
import "./InboxPage.css"; // Import the CSS file for styling

const InboxPage = () => {
  return (
    <div className="inbox-container w-3/4">
      <h2 className="inbox-title">Inbox</h2>
      <p className="inbox-text">Manage your messages and communications.</p>
      <div className="inbox-messages">
        <div className="inbox-message">
          <div className="inbox-sender">John Doe</div>
          <div className="inbox-subject">Regarding Project Update</div>
          <div className="inbox-content">
            Hi, I wanted to discuss the recent updates on the project. Can we schedule a meeting to go over the details?
          </div>
        </div>
        <div className="inbox-message">
          <div className="inbox-sender">Jane Smith</div>
          <div className="inbox-subject">Meeting Confirmation</div>
          <div className="inbox-content">
            Dear Team, The meeting for next week is confirmed. See you all on Monday at 10 AM.
          </div>
        </div>
        {/* Add more inbox messages here */}
      </div>
    </div>
  );
}

export default InboxPage;
