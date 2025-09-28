
export default function Header() {
  return (
    <header className="header-refined">
      <div className="header-left-refined">
        <img src="/vite.svg" alt="Logo" className="header-logo-refined" />
        <nav className="header-nav-refined">
          <a href="#" className="nav-link-refined active">Find Jobs</a>
          <a href="#" className="nav-link-refined">Top Companies</a>
          <a href="#" className="nav-link-refined">Job Tracker</a>
          <a href="#" className="nav-link-refined">My Calendar</a>
          <a href="#" className="nav-link-refined">Documents</a>
          <a href="#" className="nav-link-refined">Messages</a>
          <a href="#" className="nav-link-refined">Notifications</a>
        </nav>
      </div>
      <div className="header-right-refined">
        <div className="header-searchbox">
          <span className="header-searchicon">
            <svg width="16" height="16" fill="none" stroke="#718096" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </span>
          <input type="text" className="header-searchinput" placeholder="Search" />
        </div>
        <button className="header-resume-btn">Resume Builder</button>
        <img src="/src/assets/profile.webp" alt="User" className="header-avatar-refined" />
      </div>
    </header>
  );
}
