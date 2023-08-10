import React from "react";
import "./FileManagerPage.css"; // Import the CSS file for styling

const FileManagerPage = () => {
  return (
    <div className="file-manager-container w-3/4">
      <h2 className="file-manager-title">File Manager</h2>
      <p className="file-manager-text">Organize and manage your files and documents.</p>
      <div className="file-manager-files flex flex-col ">
        <div className="file-item">
          <img src="https://via.placeholder.com/50" alt="File Icon" className="file-icon" />
          <div className="file-details">
            <div className="file-name">Report.docx</div>
            <div className="file-size">2.5 MB</div>
          </div>
        </div>
        <div className="file-item">
          <img src="https://via.placeholder.com/50" alt="File Icon" className="file-icon" />
          <div className="file-details">
            <div className="file-name">Presentation.pptx</div>
            <div className="file-size">1.8 MB</div>
          </div>
        </div>
        {/* Add more file items here */}
      </div>
    </div>
  );
}

export default FileManagerPage;
