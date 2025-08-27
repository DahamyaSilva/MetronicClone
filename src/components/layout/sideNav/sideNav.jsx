import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, 
  User, 
  Bolt, 
  Store, 
  ShieldCheck, 
  Plus, 
  ChevronLeft,
  ChevronRight,
  Minus
} from 'lucide-react';

const Sidebar = ({ isExpanded, toggleSidebar, isDarkMode, setIsDarkMode }) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if sidebar should show expanded content 
  const shouldShowExpanded = isExpanded || isHovered;

  // Check if current route is active
  const isActiveRoute = (path) => location.pathname === path;

  const menuItems = [
    {
      section: 'DASHBOARDS',
      hasSubmenu: true,
      icon: LayoutGrid,
      items: [
        { name: 'Light Sidebar', icon: LayoutGrid, active: !isDarkMode, path: '/dashboard' },
        { name: 'Dark Sidebar', icon: LayoutGrid, active: isDarkMode, path: '/dashboard' }
      ]
    },
    {
      section: 'USER',
      items: [
        { 
          name: 'Public Profile', 
          icon: User, 
          hasSubmenu: true,
          subitems: [
            { name: 'Default Profile', path: '/profile' }
          ]
        },
        { 
          name: 'Authentication', 
          icon: ShieldCheck, 
          hasSubmenu: true,
          subitems: [
            { name: 'Sign In', path: '/signin' }
          ]
        }
      ]
    },
    {
      section: 'APPS',
      items: [
        { 
          name: 'Store - Client', 
          icon: Store, 
          hasSubmenu: true,
          subitems: [
            { name: 'Store', path: '/store' }
          ]
        },
        { name: 'Store - Admin', icon: Bolt, badge: 'Soon' },
      ]
    }
  ];
  
  // Expand and shrink a main section 
  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  // Expand and shrink a sub section
  const toggleItem = (itemName) => {
    setExpandedSections(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  // Switch between dark and light mode
  const handleModeSwitch = (modeName, path) => {
    if (modeName === 'Light Sidebar') {
      setIsDarkMode(false);
    } else if (modeName === 'Dark Sidebar') {
      setIsDarkMode(true);
    }
    navigate(path);
  };

  // Navigation logic using React Router
  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
  };

  // Handle mouse enter 
  const handleMouseEnter = () => {
    if (!isExpanded) {
      setIsHovered(true);
    }
  };

  // Handle mouse leave 
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={`${
        isDarkMode 
          ? 'bg-gray-900 border-gray-700' 
          : 'bg-white border-gray-200'
      } border-r fixed transition-all duration-300 ease-in-out ${
        shouldShowExpanded ? 'w-64' : 'w-16'
      } h-screen flex flex-col z-50`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Logo */}
      <div className="p-4 flex items-center justify-between">
        {shouldShowExpanded && (
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/dashboard')}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className={`font-bold text-base ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>METRONIC</span>
          </div>
        )}
        
        {/* Shrink expand toggle icon */}
        <button 
          onClick={toggleSidebar}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode 
              ? 'hover:bg-gray-800 text-gray-400' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}
        >
          {isExpanded ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 p-4">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            
            {section.hasSubmenu ? (
              <div>
                {/* Dashboard theme switch */}
                <div 
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => shouldShowExpanded && toggleSection(section.section)}
                >
                  <div className="flex items-center space-x-3">
                    <section.icon className={`w-5 h-5 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                    {shouldShowExpanded && (
                      <span className="font-medium text-sm">{section.section}</span>
                    )}
                  </div>
                  
                  {/* + and - elements of dashboard theme switch */}
                  {shouldShowExpanded && (
                    <button className="p-1">
                      {expandedSections[section.section] ? (
                        <Minus className={`w-4 h-4 ${
                          isDarkMode ? 'text-gray-500' : 'text-gray-400'
                        }`} />
                      ) : (
                        <Plus className={`w-4 h-4 ${
                          isDarkMode ? 'text-gray-500' : 'text-gray-400'
                        }`} />
                      )}
                    </button>
                  )}
                </div>

                {/* Dashboard theme switch options */}
                {shouldShowExpanded && expandedSections[section.section] && (
                  <div className="ml-8 mt-2 space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="relative group">
                        <div 
                          className={`flex items-center p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            item.active 
                              ? 'text-blue-400' 
                              : isDarkMode 
                                ? 'text-gray-300 hover:text-blue-400' 
                                : 'text-gray-700 hover:text-blue-600'
                          }`}
                          onClick={() => handleModeSwitch(item.name, item.path)}
                        >
                          {item.active && (
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          )}
                          <span className="font-medium text-sm">{item.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {/* Section Title */}
                {shouldShowExpanded && (
                  <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ml-3 ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    {section.section}
                  </h3>
                )}
                
                {/* Menu Items */}
                <div className="space-y-1">
                  {section.items.map((item, itemIndex) => {
                    const IconComponent = item.icon;
                    const hasActivePath = item.subitems?.some(subitem => 
                      isActiveRoute(subitem.path)
                    );
                    
                    return (
                      <div key={itemIndex} className="relative group">
                        <div className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          hasActivePath
                            ? 'text-blue-400' 
                            : isDarkMode 
                              ? 'text-gray-300 hover:text-blue-400' 
                              : 'text-gray-700 hover:text-blue-600'
                        }`}
                        onClick={() => {
                          if (item.hasSubmenu && shouldShowExpanded) {
                            toggleItem(item.name);
                          } else if (!item.badge && item.path) {
                            handleNavigation(item.path);
                          }
                        }}>
                          
                          <div className="flex items-center space-x-3">
                            <IconComponent className={`w-5 h-5 ${
                              hasActivePath
                                ? 'text-blue-400' 
                                : isDarkMode 
                                  ? 'text-gray-400' 
                                  : 'text-gray-600'
                            }`} />
                            
                            {shouldShowExpanded && (
                              <span className="font-medium text-sm">{item.name}</span>
                            )}
                          </div>
                          
                          {/* + and - elements of menu items */}
                          {shouldShowExpanded && (
                            <div className="flex items-center space-x-2">
                              {item.badge && (
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  isDarkMode 
                                    ? 'bg-gray-800 text-gray-400' 
                                    : 'bg-gray-200 text-gray-600'
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                              {item.hasSubmenu && (
                                <button className="p-1">
                                  {expandedSections[item.name] ? (
                                    <Minus className={`w-4 h-4 ${
                                      isDarkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`} />
                                  ) : (
                                    <Plus className={`w-4 h-4 ${
                                      isDarkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`} />
                                  )}
                                </button>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Submenu items */}
                        {item.hasSubmenu && shouldShowExpanded && expandedSections[item.name] && (
                          <div className="ml-8 mt-2 space-y-1">
                            {item.subitems.map((subitem, subitemIndex) => (
                              <div key={subitemIndex} className="relative group">
                                <div className={`flex items-center p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                                  isActiveRoute(subitem.path)
                                    ? 'text-blue-400' 
                                    : isDarkMode 
                                      ? 'text-gray-400 hover:text-blue-200' 
                                      : 'text-gray-600 hover:text-blue-400'
                                }`} 
                                onClick={() => handleNavigation(subitem.path)}>
                                  {isActiveRoute(subitem.path) && (
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                  )}
                                  <span className="font-medium text-xs">{subitem.name}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;