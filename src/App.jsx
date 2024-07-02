import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';
import MainContent from './MainContent';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container" style={{display:"flex",padding:0}}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${sidebarOpen ? 'open' : ''}`}  style={{padding:10}}>
        <Nav toggleSidebar={toggleSidebar} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
