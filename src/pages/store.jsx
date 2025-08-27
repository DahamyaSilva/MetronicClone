import React, {useState} from 'react';
import {Search} from 'lucide-react'

// Brands
import Nike from '../assets/images/nike.png';
import Adidas from '../assets/images/adidas.png';
import Converse from '../assets/images/converse.png';
import Puma from '../assets/images/puma.png';
import NewBalance from '../assets/images/newbalance.png';
import Reebok from '../assets/images/reebok.png';
import Sketchers from '../assets/images/sketchers.png';

// Special offers
import NikeAir from '../assets/images/nike-air.png';
import NikeDunkLow from '../assets/images/nike-dunk-low.png';
import NikeAirForce1 from '../assets/images/nike-airforce-1.png';

// New arrivals
import CloudShiftPro from '../assets/images/cloudshift-pro.png';
import WaveStrikeD from '../assets/images/wave-strike-d.png';
import TitanEdgeLw from '../assets/images/titan-edge-lw.png';
import VelocityBoostXtr from '../assets/images/velocity-boost-xtr.png';

// Popular
import CloudShift from '../assets/images/cloudshift.png';
import TitanEdge from '../assets/images/titan-edge.png';
import WaveStrike from '../assets/images/wave-strike.png';
import VelocityBoost from '../assets/images/velocity-boost.png';

const Store = () => {
  // Brand categories data
  const brands = [
    { name: 'Nike', image: Nike },
    { name: 'Adidas', image: Adidas },
    { name: 'Puma', image: Puma },
    { name: 'New Balance', image: NewBalance },
    { name: 'Converse', image: Converse },
    { name: 'Reebok', image: Reebok },
    { name: 'Sketchers', image: Sketchers }
  ];

  // Special offers data
  const specialOffers = [
    {
      id: 1,
      title: 'Nike Air Max 270',
      subtitle: 'The Melodic Monster of Sonic Delights and Harmonious Rhythms',
      discount: 'SAVE 25%',
      image: NikeAir,
      featured: true
    },
    {
      id: 2,
      title: 'Nike Dunk Low',
      price: '$110.00',
      discount: 'SAVE 25%',
      image: NikeDunkLow
    },
    {
      id: 3,
      title: 'Nike Air Force 1',
      price: '$96.99',
      discount: 'SAVE 25%',
      image: NikeAirForce1
    }
  ];

  // New arrivals data
  const newArrivals = [
    {
      id: 101,
      title: 'Cloud Shift Lightweight Runner Pro Edition',
      price: '$99.00',
      rating: 5.0,
      image: CloudShiftPro
    },
    {
      id: 102,
      title: 'Wave Strike Dynamic Boost Sneaker',
      price: '$120.00',
      rating: 4.7,
      image: WaveStrikeD
    },
    {
      id: 103,
      title: 'Titan Edge High Impact Stability Lightweight Trainers',
      price: '$65.99',
      rating: 3.5,
      image: TitanEdgeLw
    },
    {
      id: 104,
      title: 'Velocity Boost Xtreme High Shock Absorbers',
      price: '$110.00',
      rating: 4.9,
      image: VelocityBoostXtr 
    }
  ];

  // Popular sneakers data
  const popularSneakers = [
    {
      id: 201,
      title: 'Cloud Shift Lightweight Runner Edition',
      price: '$99.00',
      rating: 5.0,
      image: CloudShift
    },
    {
      id: 202,
      title: 'Wave Strike Boost Sneaker',
      price: '$120.00',
      rating: 4.7,
      image: WaveStrike
    },
    {
      id: 203,
      title: 'Titan Edge High Impact Stability Trainers',
      price: '$65.99',
      rating: 3.5,
      image: TitanEdge
    },
    {
      id: 204,
      title: 'Velocity Boost High Shock Absorbers',
      price: '$110.00',
      rating: 4.9,
      image: VelocityBoost 
    }
  ];

  //search functionality
  const allSneakers = [...newArrivals, ...popularSneakers];
  const [searchText, setSearchText] = useState('');
  const filteredSneakers = allSneakers.filter(sneaker =>
    sneaker.title.toLowerCase().includes(searchText.toLowerCase())
  );

  //checks if searching
  const isSearching = searchText.trim().length > 0;

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="p-6">

        {/* Search Bar */}
        <div className="flex justify-center items-center mb-8">
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search shop"
              value={searchText}                              
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <div className="absolute left-3 top-3.5 text-gray-400 text-sm"><Search /></div>
            <div className="absolute right-3 top-3 bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">⌘ K</div>
          </div>
        </div>

        {/* shows results if searching */}
        {isSearching ? (
          // Search Results Section
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Search Results for "{searchText}"
              </h2>
              <p className="text-gray-600 mt-1">
                Found {filteredSneakers.length} items
              </p>
            </div>

            {filteredSneakers.length > 0 ? (
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredSneakers.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-200 cursor-pointer border border-gray-100 hover:border-blue-200"
                  >
                    {/* Product Image */}
                    <div className="bg-gray-100 rounded-xl h-56 flex items-center justify-center mb-6">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-48 h-48 object-contain"
                      />
                    </div>

                    {/* Product Title */}
                    <h3 className="font-medium mb-3 leading-snug text-gray-900">
                      {product.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-400 text-white px-2 py-1 rounded-full flex items-center text-sm font-medium">
                        ⭐ {product.rating}
                      </div>
                    </div>

                    {/* Price and Add Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">
                        {product.price}
                      </span>
                      <button className="flex items-center text-gray-600 bg-gray-50 rounded-lg px-3 py-2 hover:bg-gray-100 transition-colors text-sm">
                        🛒 Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // No results found
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No sneakers found
                </h3>
              </div>
            )}
          </div>
        ) : (
          // content when not searching
          <>
            {/* Brand Categories */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                {brands.map((brand, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 text-center transition-all duration-200 cursor-pointer border border-gray-200 hover:border-blue-200"
                  >
                    <h3 className="font-medium text-gray-900 text-sm">{brand.name}</h3>
                    <img 
                      src={brand.image} 
                      alt={brand.name}
                      className="w-20 h-20 object-contain mx-auto mb-3"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Special Offers Section */}
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Special Offers</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors">
                  See All →
                </button>
              </div>

              <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                {/* Featured Large Card */}
                <div className="lg:col-span-1 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 relative">
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      SAVE 25%
                    </span>
                  </div>
                  <div className="flex justify-between mt-8">
                    <div className="flex-1 pr-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Nike Air Max 270
                      </h3>
                      <p className="text-gray-600 text-sm">
                        The Melodic Monster of Sonic Delights and Harmonious Rhythms
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <img 
                        src={NikeAir} 
                        alt="Nike Air Max 270"
                        className="w-60 h-60 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side Cards */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {specialOffers.slice(1).map((offer) => (
                    <div
                      key={offer.id}
                      className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 relative hover:shadow-lg transition-shadow"
                    >
                      <div className="absolute top-4 right-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {offer.discount}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {offer.title}
                      </h3>
                      <div className="flex justify-center mb-4">
                        <button className="flex items-center text-gray-600 bg-white/50 rounded-lg px-3 py-2 hover:bg-white/70 transition-colors">
                          🛒 Add to Cart
                        </button>
                      </div>
                      <div className="text-lg font-light text-center text-gray-900 mb-4">
                        {offer.price}
                      </div>
                      <div className="flex justify-center">
                        <img 
                          src={offer.image} 
                          alt={offer.title}
                          className="w-50 h-50 object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* New Arrivals Section */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mt-4">New Arrivals</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors">
                  See All →
                </button>
              </div>

              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {newArrivals.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-200 cursor-pointer border border-gray-100 hover:border-blue-200"
                  >
                    {/* Product Image */}
                    <div className="bg-gray-100 rounded-xl h-56 flex items-center justify-center mb-6">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-48 h-48 object-contain"
                      />
                    </div>

                    {/* Product Title */}
                    <h3 className="font-medium mb-3 leading-snug text-gray-900">
                      {product.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-400 text-white px-2 py-1 rounded-full flex items-center text-sm font-medium">
                        ⭐ {product.rating}
                      </div>
                    </div>

                    {/* Price and Add Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">
                        {product.price}
                      </span>
                      <button className="flex items-center text-gray-600 bg-gray-50 rounded-lg px-3 py-2 hover:bg-gray-100 transition-colors text-sm">
                        🛒 Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular sneakers Section */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mt-4">Popular Sneakers</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors">
                  See All →
                </button>
              </div>

              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {popularSneakers.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-200 cursor-pointer border border-gray-100 hover:border-blue-200"
                  >
                    {/* Product Image */}
                    <div className="bg-gray-100 rounded-xl h-56 flex items-center justify-center mb-6">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-48 h-48 object-contain"
                      />
                    </div>

                    {/* Product Title */}
                    <h3 className="font-medium mb-3 leading-snug text-gray-900">
                      {product.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-400 text-white px-2 py-1 rounded-full flex items-center text-sm font-medium">
                        ⭐ {product.rating}
                      </div>
                    </div>

                    {/* Price and Add Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">
                        {product.price}
                      </span>
                      <button className="flex items-center text-gray-600 bg-gray-50 rounded-lg px-3 py-2 hover:bg-gray-100 transition-colors text-sm">
                        🛒 Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Store;