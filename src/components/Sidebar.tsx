import React from "react";
import "../App.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar-refined">
      {/* Profile Card */}
      <div className="profile-card-refined">
        <img
          src="/src/assets/profile.webp"
          alt="Profile"
          className="profile-photo-circle"
        />
        <div className="profile-cover-wrapper"></div>
        <div className="profile-details profile-details-overlap">
          <h2>Albert Flores</h2>
          <div className="profile-title">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </div>
          <div className="profile-location">Clinton, Maryland</div>
        </div>
      </div>
      {/* Stats */}
      <div className="profile-stats">
        <div className="stat-row">
          <span>Profile Visitors</span>
          <span className="stat-value">140</span>
        </div>
        <div className="stat-row">
          <span>Resume Viewers</span>
          <span className="stat-value">20</span>
        </div>
        <div className="stat-row">
          <span>My Jobs</span>
          <span className="stat-value">88</span>
        </div>
      </div>
      {/* Calendar Section */}
      <div className="calendar-section">
        <div className="calendar-header">
          <span className="calendar-title">My calendar</span>
          {/* <span className="calendar-arrow">&#9660;</span> */}
          <span
            className="calendar-arrow"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M8 12L14 18L20 12"
                stroke="#222"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="calendar-subtitle">Upcoming Interviews</div>
      </div>
    </aside>
  );
};

export default Sidebar;
