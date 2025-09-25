
interface JobCardProps {
  company: string;
  title: string;
  location: string;
  type: string;
}

const JobCard: React.FC<JobCardProps> = ({ company, title, location, type }) => {
  return (
    <div className="job-card">
      <img src="/src/assets/react.svg" alt="Company Logo" className="company-logo" />
      <div className="job-info">
        <h3>{title}</h3>
        <p>{company}</p>
        <div className="job-meta">
          <span className="job-meta-item">
            {/* Location icon */}
            <svg width="16" height="16" fill="none" stroke="#718096" strokeWidth="2" viewBox="0 0 24 24" style={{marginRight:4}}><circle cx="12" cy="10" r="3"/><path d="M12 2C7 2 4 7.5 12 22C20 7.5 17 2 12 2Z"/></svg>
            {location}
          </span>
          <span className="job-meta-item">
            {/* Time icon */}
            <svg width="16" height="16" fill="none" stroke="#718096" strokeWidth="2" viewBox="0 0 24 24" style={{marginRight:4}}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            {type}
          </span>
        </div>
      </div>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
