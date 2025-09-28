
import React from "react";
import JobCard from "./JobCard";
import "../App.css";

interface Job {
  company: string;
  title: string;
  location: string;
  type: string;
}

interface JobGridProps {
  jobs: Job[];
  showPromoted?: boolean;
}

const JobGrid: React.FC<JobGridProps> = ({ jobs, showPromoted }) => {
  return (
    <div className="job-grid">
      {jobs.map((job, idx) => (
        <JobCard key={idx} {...job} promoted={!!showPromoted} />
      ))}
    </div>
  );
};

export default JobGrid;
