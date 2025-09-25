import React from "react";
import JobCard from "./JobCard";
import "../App.css";

const jobs = Array.from({ length: 8 }, (_, i) => ({
  company: "UXD Design Co.",
  title: "UI/UX Designer",
  location: "Remote",
  type: "Full Time",
}));

const JobGrid: React.FC = () => {
  return (
    <div className="job-grid">
      {jobs.map((job, idx) => (
        <JobCard key={idx} {...job} />
      ))}
    </div>
  );
};

export default JobGrid;
