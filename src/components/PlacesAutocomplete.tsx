import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { useGoogleMaps } from '../hooks/useGoogleMaps';

interface PlacesAutocompleteProps {
  onSelect: (address: string, placeId: string) => void;
}

export default function PlacesAutocomplete({ onSelect }: PlacesAutocompleteProps) {
  const { isLoaded, error } = useGoogleMaps();
  const [value, setValue] = useState('');
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (isLoaded && !autocomplete) {
      const input = document.getElementById('location-input') as HTMLInputElement;
      if (input) {
        const newAutocomplete = new google.maps.places.Autocomplete(input, {
          componentRestrictions: { country: 'us' },
          fields: ['formatted_address', 'place_id']
        });

        newAutocomplete.addListener('place_changed', () => {
          const place = newAutocomplete.getPlace();
          if (place.formatted_address && place.place_id) {
            setValue(place.formatted_address);
            onSelect(place.formatted_address, place.place_id);
          }
        });

        setAutocomplete(newAutocomplete);
      }
    }
  }, [isLoaded, onSelect]);

  if (error) {
    return (
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Address lookup unavailable"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed"
          disabled
        />
        <p className="mt-2 text-sm text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        id="location-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!isLoaded}
        placeholder="Enter your business address"
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
    </div>
  );
}