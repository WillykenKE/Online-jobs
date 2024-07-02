import React from 'react';
import xyz from "./images/profile.jpg"

function Nav({ toggleSidebar }) {
  return (
    <div className="nav">
      <button onClick={toggleSidebar}><i className='bx bx-menu-alt-right'></i></button>
      <div className="search">
        <i className='bx bx-search-alt'></i>
        <input type="text" placeholder="Search for job / companies" />
      </div>
      <div className="city">
        <i className='bx bx-location-plus'></i>
        <input type="text" placeholder="Enter city, state or region" />
      </div>
      <button>Search</button>
      <i className='bx bx-bell'></i>
      <div className="user-info">
        <img src={xyz} alt="User" />
        <div>
          <a href="/">Kennedy<i className='bx bx-chevron-down'></i></a>
          <p>kennedy@kennedy.com</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
