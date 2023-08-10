import React from "react";
import "./DataListPage.css"; // Import the CSS file for styling

const DataListPage = () => {
  return (
    <div className="data-list-container w-3/4">
      <h2 className="data-list-title">Data List</h2>
      <p className="data-list-text">Explore and analyze your data.</p>
      <div className="data-list-items">
        <div className="data-item">
          <div className="data-icon">📊</div>
          <div className="data-details">
            <div className="data-name">Sales Data</div>
            <div className="data-description">Quarterly sales report.</div>
          </div>
        </div>
        <div className="data-item">
          <div className="data-icon">📈</div>
          <div className="data-details">
            <div className="data-name">Revenue Analysis</div>
            <div className="data-description">Yearly revenue breakdown.</div>
          </div>
        </div>
        {/* Add more data items here */}
      </div>
    </div>
  );
}

export default DataListPage;
