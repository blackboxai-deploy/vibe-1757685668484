'use client';

import { useState, useEffect } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const carBrands = ['All Brands', 'BMW', 'Mercedes', 'Audi', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
  const priceRanges = ['All Prices', '$0 - $20,000', '$20,000 - $40,000', '$40,000 - $60,000', '$60,000+'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to cars section
    document.querySelector('#cars')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fbe86874-53b4-4616-8709-e6488f9b5e6b.png"
          alt="Luxury car showroom with premium vehicles and modern lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your
            <span className="text-blue-400 block">Dream Car</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Discover premium vehicles from trusted dealers. Your perfect car is just a click away.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className={`bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {/* Search Input */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Search Cars
                </label>
                <input
                  type="text"
                  placeholder="Model, year, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Brand Selection */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Brand
                </label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  {carBrands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Price Range
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-1 flex items-end">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Search Cars
                </button>
              </div>
            </div>
          </form>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-300">Premium Cars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;