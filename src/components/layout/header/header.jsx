import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, 
  BellDot, 
  MessageCircle, 
  LayoutGrid,
  User,
  FileText,
  UserPlus,
  LogIn,
  HelpCircle,
  Phone,
  Building2,
  Bitcoin,
  MessageSquareText,
  Gamepad2,
  BookText,
  BookOpen,
  SquareMousePointer,
  ChartColumnBig,
  BrainCircuit,
  CalendarCheck2, 
  BriefcaseBusiness,
  Users,
  Network,
  Activity,
  ScrollText,
  PanelsTopLeft,
  File 
} from 'lucide-react';

const Header = ({ sidebarExpanded }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current route is active
  const isActiveRoute = (path) => location.pathname === path;

  //header items
  const navItems = [
    { name: 'Home', active: isActiveRoute('/') || isActiveRoute('/dashboard'), hasMegaMenu: false, path: '/dashboard' },
    { name: 'Profiles', active: isActiveRoute('/profile'), hasMegaMenu: true },
    { name: 'My Account', active: false, hasMegaMenu: true },
    { name: 'Network', active: false, hasMegaMenu: true },
    { name: 'Store', active: isActiveRoute('/store'), hasMegaMenu: true },
    { name: 'Authentication', active: isActiveRoute('/signin'), hasMegaMenu: true },
    { name: 'Help', active: false, hasMegaMenu: true }
  ];

  //mega menu items
  const megaMenuContent = {
    'Profiles': {
      sections: [
        {
          title: 'Profiles',
          items: [
            { name: 'Default', icon: User, path: '/profile'},
            { name: 'Creator', icon: UserPlus, path: '/profile'},
            { name: 'Company', icon: Building2, path: '/profile'},
            { name: 'NFT', icon: Bitcoin, path: '/profile'},
            { name: 'CRM', icon: MessageSquareText, path: '/profile'},
            { name: 'Gamer', icon: Gamepad2, path: '/profile'},
            { name: 'Feeds', icon: BookText, path: '/profile'},
            { name: 'Plain', icon: BookOpen, path: '/profile'},
            { name: 'Modal', icon: SquareMousePointer, path: '/profile'},
            { name: 'Freelancer', icon: ChartColumnBig, path: '/profile'},
            { name: 'Developer', icon: BrainCircuit, path: '/profile'},
            { name: 'Events', icon: CalendarCheck2, path: '/profile'},
          ]
        },
        {
          title: 'Other Pages',
          items: [
            { name: 'Work', icon: BriefcaseBusiness, path: '/profile'},
            { name: 'Team', icon: Users, path: '/profile'},
            { name: 'Network', icon: Network, path: '/profile'},
            { name: 'Activity', icon: Activity, path: '/profile'},
            { name: 'Campaign', icon: ScrollText, path: '/profile'},
            { name: 'Project', icon: PanelsTopLeft, path: '/profile'},
            { name: 'Document', icon: File, path: '/profile'},
          ]
        }
      ]
    },
    'My Account': {
      sections: [
        {
          title: 'General Pages',
          items: [
            { name: 'Integrations', icon: User, path: '/profile'},
            { name: 'Notifications', icon: UserPlus, path: '/profile'},
            { name: 'API Keys', icon: UserPlus, path: '/profile'},
            { name: 'Appearance', icon: UserPlus, path: '/profile'},
            { name: 'Invite a Friend', icon: UserPlus, path: '/profile'},
            { name: 'Activity', icon: UserPlus, path: '/profile'},
          ]
        },
        {
          title: 'My Account',
          items: [
            { name: 'Get Started', icon: User, path: '/dashboard'},
            { name: 'User Profile', icon: UserPlus, path: '/profile'},
            { name: 'Company Profile', icon: UserPlus, path: '/profile'},
            { name: 'With Sidebar', icon: UserPlus, path: '/profile'},
            { name: 'Enterprise', icon: UserPlus, path: '/profile'},
            { name: 'Plain', icon: UserPlus, path: '/profile'},
          ]
        }
      ]
    },
    'Network': {
      sections: [
        {
          title: 'General Pages',
          items: [
            { name: 'Get Started', icon: User, path: '/dashboard'},
            { name: 'Integrations', icon: UserPlus, path: '/profile'},
            { name: 'Notifications', icon: UserPlus, path: '/profile'},
            { name: 'API Keys', icon: UserPlus, path: '/profile'},
          ]
        },
        {
          title: 'User Cards',
          items: [
            { name: 'Mini Cards', icon: User, path: '/profile'},
            { name: 'Team Crew', icon: UserPlus, path: '/profile'},
            { name: 'Authors', icon: UserPlus, path: '/profile'},
            { name: 'NFT Users', icon: UserPlus, path: '/profile'},
            { name: 'Social Users', icon: UserPlus, path: '/profile'},
            { name: 'Gamers', icon: UserPlus, badge: 'Soon', path: '/profile'}
          ]
        },
        {
          title: 'User Base / Datatables',
          items: [
            { name: 'Team Crew', icon: User, path: '/profile'},
            { name: 'App Roster', icon: UserPlus, path: '/profile'},
            { name: 'Market Authors', icon: UserPlus, path: '/profile'},
            { name: 'SaaS Users', icon: UserPlus, path: '/profile'},
            { name: 'Store Clients', icon: UserPlus, path: '/profile'},
            { name: 'Visitors', icon: UserPlus, path: '/profile'}
          ]
        }
      ]
    },
    'Store': {
      sections: [
        {
          title: 'Store - Client',
          items: [
            { name: 'Home', icon: User, path: '/store'},
            { name: 'Search Results - Grid', icon: UserPlus, path: '/store'},
            { name: 'Search Results - List', icon: Building2, path: '/store'},
            { name: 'Product Details', icon: Bitcoin, path: '/store'},
            { name: 'Shopping Cart', icon: MessageSquareText, path: '/store'},
            { name: 'Wishlist', icon: Gamepad2, path: '/store'},
          ]
        },
        {
          title: 'Checkout & Orders',
          items: [
            { name: 'Checkout - Order Summary', icon: BriefcaseBusiness, path: '/store'},
            { name: 'Checkout - Shipping Info', icon: Users, path: '/store'},
            { name: 'Checkout - Payment Method', icon: Network, path: '/store'},
            { name: 'Checkout - Order Placed', icon: Activity, path: '/store'},
            { name: 'My Orders', icon: ScrollText, path: '/store'},
            { name: 'Order Receipt', icon: PanelsTopLeft, path: '/store'},
          ]
        }
      ]
    },
    'Authentication': {
      sections: [
        {
          title: 'Sign In Options',
          items: [
            { name: 'Sign In', icon: LogIn, description: 'User login page', path: '/signin' },
            { name: 'Sign Up', icon: UserPlus, description: 'User registration', path: '/signin' },
          ]
        }
      ]
    },
    'Help': {
      title: 'Help & Support',
      sections: [
        {
          title: 'Resources',
          items: [
            { name: 'FAQ', icon: HelpCircle, description: 'Frequently asked questions', path: '/dashboard' },
            { name: 'Contact', icon: Phone, description: 'Get in touch with us', path: '/dashboard' }
          ]
        }
      ]
    }
  };

  //handles the cursor movements 
  const handleMouseEnter = (itemName) => {
    if (navItems.find(item => item.name === itemName)?.hasMegaMenu) {
      setActiveMenu(itemName);
    }
  };

  //handles the cursor movements to close the mega menu
  const handleMouseLeave = (e) => {
    setTimeout(() => {
      const isOverNav = e.relatedTarget?.closest('.nav-container');
      const isOverMegaMenu = e.relatedTarget?.closest('.mega-menu');
      
      if (!isOverNav && !isOverMegaMenu) {
        setActiveMenu(null);
      }
    }, 100);
  };

  const handleMegaMenuMouseLeave = () => {
    setActiveMenu(null);
  };

  //navigation logic if the mega menu item was clicked
  const handleMenuItemClick = (item) => {
    if (item.path) {
      navigate(item.path);
    }
    setActiveMenu(null);
  };

  //navigation logic if the header item was clicked
  const handleNavItemClick = (item) => {
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div className="relative">
      <header className={`bg-white border-gray-200 border-b px-6 py-3 fixed top-0 right-0 z-40 transition-all duration-300 ${
        sidebarExpanded ? 'left-64' : 'left-16'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Left Side - Navigation */}
          <nav className="hidden md:flex items-center space-x-8 nav-container" onMouseLeave={handleMouseLeave}>
          {navItems.map((item, index) => (
              <div key={index} className="relative">
                <a
                  href="#"
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 py-4 ${
                    item.active ? 'text-gray-900' : 'text-gray-600'
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(item);
                  }}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>

          {/* Right Side - Action Icons & Profile */}
          <div className="flex items-center space-x-4">
            
            {/* Search Icon */}
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Notification Icon */}
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
              <BellDot className="w-5 h-5" />
            </button>

            {/* Chat Icon */}
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
              <MessageCircle className="w-5 h-5" />
            </button>

            {/* Apps Icon */}
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
              <LayoutGrid className="w-5 h-5" />
            </button>

            {/* Profile Avatar */}
            <div className="flex items-center">
              <button 
                className="relative"
                onClick={() => navigate('/profile')}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      {activeMenu && megaMenuContent[activeMenu] && (
        <div 
          className={`mega-menu fixed bg-white border-gray-200 border shadow-lg rounded-lg z-50 transition-all duration-300 ${
            sidebarExpanded ? 'left-64' : 'left-16'
          }`}
          style={{ top: '57px' }}
          onMouseLeave={handleMegaMenuMouseLeave}
        >
          <div className="p-6 min-w-96">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {megaMenuContent[activeMenu].title}
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {megaMenuContent[activeMenu].sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                    {section.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {section.items.map((item, itemIndex) => (
                      <button
                        key={itemIndex}
                        onClick={() => handleMenuItemClick(item)}
                        className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group text-left"
                      >
                        <div className="flex items-center justify-center w-6 h-6 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
                          <item.icon className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-light text-gray-900">
                            {item.name}
                          </div>
                          {item.description && (
                            <div className="text-xs text-gray-500">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;