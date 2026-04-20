import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger toggle – only visible on mobile via CSS */}
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Dark overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={close} />}

      <div className={`sidebar-panel ${isOpen ? "open" : ""}`}>
        {/* Close button */}
        <button className="sidebar-close" onClick={close}>✕</button>

        <ul>
          <li><Link to="/" onClick={close}>Home</Link></li>
          <li><Link to="/zambeeldropshipping" onClick={close}>Zambeel Dropshipping</Link></li>
          <li><Link to="/zambeel360" onClick={close}>Zambeel 360</Link></li>
          <li><Link to="/individualservices" onClick={close}>Individual Services</Link></li>
          <li><Link to="/aboutus" onClick={close}>About Us</Link></li>
          <li className="sidebar-divider"></li>
          <li><Link to="/login" onClick={close} className="sidebar-login">Login</Link></li>
          <li><Link to="/signupform" onClick={close} className="sidebar-signup">Sign Up</Link></li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
