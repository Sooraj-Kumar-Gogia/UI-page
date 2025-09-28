
interface JobCardProps {
  company: string;
  title: string;
  location: string;
  type: string;
  promoted?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  company,
  title,
  location,
  type,
  promoted,
}) => {
  return (
    <div className="job-card">
      {promoted && <div className="promoted-tag">Promoted</div>}
      <div className="job-header">
        <img
          src="/src/assets/Teams.png"
          alt="Company Logo"
          className="company-logo"
        />
        <div className="job-details">
          <p className="job-title">{title}</p>
          <p className="job-company">{company}</p>
        </div>
      </div>
      <div className="job-info">
        <div className="job-meta">
          <span className="job-meta-item">
            {/* Location icon */}
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="#718096"
              strokeWidth="2"
              viewBox="0 0 24 24"
              style={{ marginRight: 4 }}
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 2C7 2 4 7.5 12 22C20 7.5 17 2 12 2Z" />
            </svg>
            {location}
          </span>
          <span className="job-meta-item">
            {/* Time icon */}
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="#718096"
              strokeWidth="2"
              viewBox="0 0 24 24"
              style={{ marginRight: 4 }}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {type}
          </span>
        </div>
      </div>
      <div className="job-actions">
        <button className="apply-btn">Apply Now</button>
        {/* Add a bookmark icon here like Save Reel on insta */}
        <svg
          width="25"
          height="25"
          fill="none"
          stroke="#718096"
          strokeWidth="2"
          viewBox="0 0 24 24"
          style={{ marginLeft: 12 }}
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
        </svg>
      </div>
    </div>
  );
};

export default JobCard;
