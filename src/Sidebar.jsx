import React from 'react';
import xyz from "./images/profile.jpg"

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='navbar-small-toggle' style={{alignItems:"baseline", justifyContent:"space-between"}}>
      <a href="/" style={{color:"white", fontSize:"16px"}}>Works</a>
            <p style={{fontSize:"20px"}} onClick={toggleSidebar}>x</p>
      </div>
      <a className='navbar-lg-toggle' href="/">Works</a>
      <div className="side-nav">
        <div className="item active">
          <i className='bx bx-search-alt'></i>
          <a href="/">Home</a>
        </div>
        <div className="item">
          <i className='bx bx-bell'></i>
          <a href="/">Notification</a>
        </div>
        <div className="item">
          <i className='bx bx-briefcase'></i>
          <a href="/">My works</a>
        </div>
        <div className="item">
          <i className='bx bx-bookmarks'></i>
          <a href="/">Saved Jobs</a>
        </div>
        <div className="item">
          <i className='bx bx-cog'></i>
          <a href="/">Settings</a>
        </div>
      </div>
      <div className="side-profile">
        <div className="info">
          <img src={xyz} alt="Profile" />
          <a>Kennedy</a>
          <p>Software Developer</p>
        </div>
        <div className="skills">
          <h5>Skills <span>/</span> Expertise</h5>
          <div className="skill-tags">
            <div className="item">
              <p>Graphic Designer</p>
            </div>
            <div className="item">
              <p>Illustrator</p>
            </div>
            <div className="item">
              <p>Photoshop</p>
            </div>
            <div className="item">
              <p>HTML / CSS</p>
            </div>
          </div>
        </div>
        <button>View Profile</button>
      </div>
    </div>
  );
}

export default Sidebar;
