import React from "react";
import "../App.css";

const Tabs: React.FC = () => {
  return (
    <div className="tabs">
      <button className="tab active">Featured Jobs</button>
      <button className="tab">Recommended Jobs</button>
      <button className="tab">Latest Jobs</button>
    </div>
  );
};

export default Tabs;
