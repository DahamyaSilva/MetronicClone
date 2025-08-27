import React from 'react';
import { 
  Building, 
  MapPin, 
  Mail, 
  Users,
  MessageCircle,
  ChevronDown,
  MoreHorizontal,
  BadgeCheck,
  Volleyball,
  Hexagon,
  PhoneCall,
  Layers2
} from 'lucide-react';

//profile picture
import Girl from '../assets/images/girl.png';

// chart
import MediaUploadsChart from '../components/charts/mediaUploads';

const ProfileComponent = () => {

  const navItems = [
    { name: 'Profiles', active: true },
    { name: 'Projects', active: false },
    { name: 'Works', active: false },
    { name: 'Teams', active: false },
    { name: 'Network', active: false },
    { name: 'Activity', active: false },
    { name: 'More', active: false }
  ];

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">

      {/* Profile Header Section */}
      <div className="bg-white border-gray-200 border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Profile Info */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2">
                <img 
                  src={Girl} 
                  alt="Jenny Klabber"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-center mb-2">
              <h1 className="text-2xl font-bold text-gray-900 mr-2">Jenny Klabber</h1>
              <BadgeCheck className="w-6 h-6 text-blue-500" />
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-2" />
                <span>KeenThemes</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>SF, Bay Area</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>jenny@kteam.com</span>
              </div>
            </div>
          </div>

           {/* Navigation Tabs */}
           <div className="flex items-center justify-between">
            <nav className="flex space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center py-2 px-1 border-b-2 text-sm font-medium transition-colors duration-200 ${
                    item.active
                      ? 'border-blue-500 text-blue-600'
                      : `border-transparent text-gray-600 hover:text-gray-900`
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* icons next to the nav section */}
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Users className="w-4 h-4 mr-2" />
                Connect
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors duration-200">
                <MessageCircle className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors duration-200">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1">
            {/* Community Badges */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Badges</h3>
              <div className="grid grid-cols-4 gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Volleyball className="w-6 h-6 text-gray-700" />
                </div>
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Layers2 className="w-6 h-6 text-gray-700" />
                </div>

                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Hexagon className="w-6 h-6 text-gray-700" />
                </div>
    
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <PhoneCall className="w-6 h-6 text-gray-700" />
              </div>
              </div>
            </div>

            {/* About Section */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2  border-gray-100">
                    <span className="text-gray-600">Age</span>
                    <span className="font-medium text-gray-900">32</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-gray-100">
                    <span className="text-gray-600">City:</span>
                    <span className="font-medium text-gray-900">Amsterdam</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-gray-100">
                    <span className="text-gray-600">State:</span>
                    <span className="font-medium text-gray-900">North Holland</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-gray-100">
                    <span className="text-gray-600">Country:</span>
                    <span className="font-medium text-gray-900">Netherlands</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-gray-100">
                    <span className="text-gray-600">Postcode:</span>
                    <span className="font-medium text-gray-900">1092 NL</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2  border-gray-100">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium text-gray-900">+31 6 1234 56 78</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium text-gray-900">jenny@ktstudio.com</span>
                  </div>
                </div>
              </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Unlock Creative Partnerships on Our Blog
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Explore exciting collaboration opportunities with our blog. We're open 
                    to partnerships, guest posts, and more. Join us to share your insights and grow 
                    your audience.
                  </p>
                </div>
                
                {/* Illustration */}
                <div className="ml-8 flex-shrink-0">
                  <div className="w-64 h-48 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <div className="text-6xl">💻</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Uploads Chart Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Media Uploads</h3>
              <MediaUploadsChart height="256px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;