import React from "react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
// import Tabs from "./Tabs";
import JobGrid from "./JobGrid";
import "../App.css";

const Dashboard: React.FC = () => {
  // Example jobs data
  const jobs = Array.from({ length: 4}, (_, i) => ({
    company: "Teams",
    title: "UI/UX Designer",
    location: "Seattle, USA (Remote)",
    type: "1 day ago",
  }));

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <SearchBar />
        <section className="job-section border-bottom">
          <div className="job-section-header">
            <h2>Featured Jobs</h2>
            <a href="#" className="job-section-link">See Featured Jobs</a>
            
          </div>
          <JobGrid jobs={jobs} showPromoted />
        </section>
        <section className="job-section">
          <div className="job-section-header">
            <h2>Recommended Jobs</h2>
            <a href="#" className="job-section-link">See Recommended Jobs</a>
          </div>
          <JobGrid jobs={jobs} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
