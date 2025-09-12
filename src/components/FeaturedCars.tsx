'use client';

import { useState, useEffect } from 'react';
import CarCard from './CarCard';

const FeaturedCars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cars');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const carsData = [
    {
      id: 1,
      brand: 'BMW',
      model: 'X5',
      year: 2023,
      price: 65000,
      mileage: 15000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/40e2ba7e-7c2f-409d-87bc-8b3c2c90abb0.png',
      featured: true
    },
    {
      id: 2,
      brand: 'Mercedes',
      model: 'C-Class',
      year: 2022,
      price: 45000,
      mileage: 25000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ff84b718-dcad-4255-bcc6-21c5598080c0.png'
    },
    {
      id: 3,
      brand: 'Audi',
      model: 'A4',
      year: 2023,
      price: 48000,
      mileage: 12000,
      fuelType: 'Gasoline',
      transmission: 'Automatic',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d1b0ca3-b9c5-4f4c-98aa-c2ccdb1afdbd.png',
      featured: true
    },
    {
      id: 4,
      brand: 'Toyota',
      model: 'Camry',
      year: 2022,
      price: 28000,
      mileage: 20000,
      fuelType: 'Hybrid',
      transmission: 'CVT',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6691cef8-ee4e-4318-b699-6a0612c80f4d.png'
    },
    {
      id: 5,
      brand: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: 42000,
      mileage: 8000,
      fuelType: 'Electric',
      transmission: 'Single Speed',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b3988ab5-6ed1-430d-bb6b-f1c8edba501b.png',
      featured: true
    },
    {
      id: 6,
      brand: 'Honda',
      model: 'Accord',
      year: 2022,
      price: 32000,
      mileage: 18000,
      fuelType: 'Gasoline',
      transmission: 'CVT',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3bf022a5-bfb5-46f9-b0b3-7958ec2489f3.png'
    },
  ];

  const filters = ['All', 'Featured', 'Luxury', 'Electric', 'Hybrid'];

  const filteredCars = carsData.filter(car => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return car.featured;
    if (activeFilter === 'Luxury') return ['BMW', 'Mercedes', 'Audi'].includes(car.brand);
    if (activeFilter === 'Electric') return car.fuelType === 'Electric';
    if (activeFilter === 'Hybrid') return car.fuelType === 'Hybrid';
    return true;
  });

  return (
    <section id="cars" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="text-blue-600">Vehicles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium vehicles, each inspected for quality and performance
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <CarCard car={car} index={index} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            View All Cars
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FeaturedCars;