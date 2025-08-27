import React from 'react';
import { 
  MoreHorizontal,
  TrendingUp
} from 'lucide-react';

// chart
import EarningsChart from '../components/charts/earnings';

const Dashboard = () => {
  return (
    <div className={`pt-16'bg-gray-50'} min-h-screen`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-gray-600">Central Hub for Personal Customization</p>
          </div>
          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            View Profile
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LinkedIn Card */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <i className="fa-brands fa-linkedin text-blue-500 text-4xl"></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">9.3k</div>
                <div className="text-gray-600 text-sm">Amazing mates</div>
              </div>

              {/* YouTube Card */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <i className="fa-brands fa-youtube text-red-600 text-4xl"></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">24k</div>
                <div className="text-gray-600 text-sm">Lessons Views</div>
              </div>

              {/* Instagram Card */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <i className="fa-brands fa-square-instagram text-pink-500 text-4xl"></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">608</div>
                <div className="text-gray-600 text-sm">New subscribers</div>
              </div>

              {/* TikTok Card */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <i className="fa-brands fa-tiktok text-slate-950 text-4xl"></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">2.5k</div>
                <div className="text-gray-600 text-sm">Stream audience</div>
              </div>
            </div>

            {/* Highlights Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Highlights</h3>
                <button>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-2">All time sales</div>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-gray-900">$295.7k</div>
                    <div className="flex items-center text-green-600 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +2.7%
                    </div>
                  </div>
                </div>
                 {/* Progress bars */}
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
              </div>
                {/* Legend */}
                <div className="flex gap-4 text-sm mt-5">
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Metronic</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">Bundle</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-gray-700">MetronicNest</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Connect Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-red-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Connect Today & Join the <span className="text-blue-600">KeenThemes Network</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Enhance your projects with premium themes and templates. Join the KeenThemes community today 
                for top-quality designs and resources.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Earnings Chart Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Earnings</h3>
              <EarningsChart height="260px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;