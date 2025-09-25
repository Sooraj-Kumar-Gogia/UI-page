import React from "react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Tabs from "./Tabs";
import JobGrid from "./JobGrid";
import "../App.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <SearchBar />
        {/* <Tabs /> */}
        <JobGrid />
      </main>
    </div>
  );
};

export default Dashboard;
