

import React from "react";
import "../App.css";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar-redesign">
      <div className="search-bar-greeting">
        <h1>Find your Dream Job, <span className="search-bar-highlight">Albert!</span></h1>
        <p>Explore the latest job openings and apply for the best opportunities available today!</p>
      </div>
      <div className="search-bar-mainbox">
        <input type="text" className="search-bar-maininput" placeholder="Job Title, Company, or Keywords" />
        <div className="search-bar-divider" />
        <select className="search-bar-dropdown">
          <option>Select Location</option>
        </select>
        <div className="search-bar-divider" />
        <select className="search-bar-dropdown">
          <option>Job Type</option>
        </select>
        <button className="search-bar-mainbtn">
          <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24" style={{marginRight:6}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Search
        </button>
      </div>
      <div className="search-bar-tags-row">
        <span className="search-bar-tags-label">Similar:</span>
        <button className="search-bar-tag">Frontend</button>
        <button className="search-bar-tag">Backend</button>
        <button className="search-bar-tag">Graphic Designer</button>
      </div>
    </div>
  );
};

export default SearchBar;
