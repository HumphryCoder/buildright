import React from "react";
import "./docsnavbar.css"
import { Link } from "react-router-dom";


function docsnavbar() {
 
  const handleLinkClick = () => {
    window.scrollTo(0,0);
  };

  return (
    <>
      <div className="sidebar">
        <ul className="menu-section">
          <h4>Guide</h4>
          <li><Link to="/docs/introduction" className="link" onClick={handleLinkClick}>Introduction</Link></li>
          <li>Installation</li>

          <h4>Components</h4>
          <li><Link to="/docs/button" className="link" onClick={handleLinkClick}>Button</Link></li>
          <li>Navbar</li>
          <li>Sidebar</li>
          <li><Link to="/docs/cards" className="link" onClick={handleLinkClick}>Cards</Link></li>
          <li>Input</li>
          <li>Dropdown</li>
        </ul>
      </div>


    </>
  )
}

export default docsnavbar