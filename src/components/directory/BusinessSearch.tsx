import React, { useState, useEffect } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { useGoogleMaps } from '../../hooks/useGoogleMaps';

interface BusinessSearchProps {
  onSearch: (
    query: string,
    location: string,
    radius: number,
    filters: { donorsOnly: boolean; type?: string }
  ) => void;
}

const radiusOptions = [
  { value: 5, label: '5 miles' },
  { value: 10, label: '10 miles' },
  { value: 25, label: '25 miles' },
  { value: 50, label: '50 miles' }
];

export default function BusinessSearch({ onSearch }: BusinessSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [radius, setRadius] = useState(10);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    donorsOnly: false,
    type: ''
  });

  const { isLoaded } = useGoogleMaps();
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (isLoaded) {
      const input = document.getElementById('location-search') as HTMLInputElement;
      if (input && !autocomplete) {
        const newAutocomplete = new google.maps.places.Autocomplete(input, {
          componentRestrictions: { country: 'us' },
          fields: ['formatted_address', 'geometry', 'place_id']
        });

        newAutocomplete.addListener('place_changed', () => {
          const place = newAutocomplete.getPlace();
          if (place.formatted_address) {
            setLocationValue(place.formatted_address);
          }
        });

        setAutocomplete(newAutocomplete);
      }
    }
  }, [isLoaded]);

  const handleSearch = () => {
    if (!locationValue) return;
    onSearch(searchTerm, locationValue, radius, filters);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search businesses (e.g., plumber)"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="location-search"
            type="text"
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
            placeholder="Enter location or ZIP code"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
            required
            disabled={!isLoaded}
          />
        </div>

        <div className="flex gap-4">
          <select
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
          >
            {radiusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-patriot-cream text-patriot-navy hover:bg-patriot-navy hover:text-white transition-colors"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.donorsOnly}
                onChange={(e) => setFilters(prev => ({ ...prev, donorsOnly: e.target.checked }))}
                className="rounded border-gray-300 text-patriot-red focus:ring-patriot-red"
              />
              <span className="text-patriot-navy">Show Mustard Seed contributors only</span>
            </label>

            <select
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
            >
              <option value="">All Business Types</option>
              <option value="retail">Retail</option>
              <option value="service">Service</option>
              <option value="restaurant">Restaurant</option>
              <option value="professional">Professional</option>
            </select>
          </div>
        </div>
      )}

      <button
        onClick={handleSearch}
        disabled={!locationValue || !isLoaded}
        className="w-full md:w-auto px-8 py-3 bg-patriot-red text-white rounded-full font-semibold hover:bg-patriot-crimson transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Search Businesses
      </button>

      <div className="text-center text-xs text-gray-500">
        Powered by Google
      </div>
    </div>
  );
}