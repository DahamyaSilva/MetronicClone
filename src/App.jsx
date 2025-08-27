import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from "./components/layout/sideNav/sideNav.jsx";
import Header from "./components/layout/header/header.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Profile from "./pages/profile.jsx";
import SignInPage from "./pages/authentication.jsx";
import Store from "./pages/store.jsx";
import './assets/css/style.css';

function App() {
  const [isExpanded, setIsExpanded] = useState(true);      
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar 
          isExpanded={isExpanded}
          toggleSidebar={toggleSidebar}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />

        <Header 
          sidebarExpanded={isExpanded}
          isDarkMode={isDarkMode}
        />
        
        {/* Main content area */}
        <div className={`flex-1 transition-all duration-300 ${
          isExpanded ? 'ml-64' : 'ml-16'
        }`}>
          <Routes>
            <Route path="/" element={<Dashboard isDarkMode={isDarkMode} />} />
            <Route path="/dashboard" element={<Dashboard isDarkMode={isDarkMode} />} />
            <Route path="/profile" element={<Profile isDarkMode={isDarkMode} />} />
            <Route path="/signin" element={<SignInPage isDarkMode={isDarkMode} />} />
            <Route path="/store" element={<Store isDarkMode={isDarkMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App