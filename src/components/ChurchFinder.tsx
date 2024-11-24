import React, { useState } from 'react';
import { Church, MapPin, Search, Users } from 'lucide-react';

export default function ChurchFinder() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-8 border-b border-gray-200">
        <div className="flex items-center gap-4 mb-6">
          <Church className="w-12 h-12 text-patriot-red" />
          <div>
            <h2 className="text-2xl font-bold text-patriot-navy">Find Your Church</h2>
            <p className="text-patriot-blue">Connect with faith communities in your area</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by church name..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="text-center">
          <Users className="w-16 h-16 text-patriot-blue mx-auto mb-4" />
          <h3 className="text-xl font-bold text-patriot-navy mb-2">Coming Soon!</h3>
          <p className="text-patriot-blue max-w-md mx-auto">
            We're building a network of churches and faith communities. Check back soon to find and connect with churches in your area.
          </p>
        </div>
      </div>
    </div>
  );
}