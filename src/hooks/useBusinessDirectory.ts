import { useState, useCallback } from 'react';
import { Business } from '../types/business';

export function useBusinessDirectory() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [searchRadius, setSearchRadius] = useState<number>(10);

  const searchBusinesses = useCallback(async (
    query: string,
    location: string,
    radius: number,
    filters: { donorsOnly: boolean; type?: string }
  ) => {
    setLoading(true);
    setError(null);
    
    try {
      // Initialize Places Service
      const service = new google.maps.places.PlacesService(
        document.createElement('div')
      );

      // Get location coordinates
      const geocoder = new google.maps.Geocoder();
      const geocodeResult = await new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
        geocoder.geocode({ address: location }, (results, status) => {
          if (status === 'OK' && results) {
            resolve(results);
          } else {
            reject(new Error('Geocoding failed'));
          }
        });
      });

      const locationCoords = geocodeResult[0].geometry.location;
      setCurrentLocation(location);
      setSearchRadius(radius);

      // Search for businesses
      const searchRequest: google.maps.places.PlaceSearchRequest = {
        location: locationCoords,
        radius: radius * 1609.34, // Convert miles to meters
        keyword: query,
        type: filters.type || 'establishment'
      };

      const places = await new Promise<google.maps.places.PlaceResult[]>((resolve, reject) => {
        service.nearbySearch(searchRequest, (results, status) => {
          if (status === 'OK' && results) {
            resolve(results);
          } else {
            reject(new Error('Places search failed'));
          }
        });
      });

      // Transform places into businesses
      const transformedBusinesses: Business[] = places.map(place => ({
        id: place.place_id!,
        name: place.name!,
        logo: place.photos?.[0].getUrl() || 'https://via.placeholder.com/150',
        type: place.types || [],
        description: place.vicinity || '',
        address: {
          street: place.vicinity || '',
          city: '', // Would need additional API call to get detailed address
          state: '',
          zip: '',
          coordinates: {
            lat: place.geometry?.location?.lat() || 0,
            lng: place.geometry?.location?.lng() || 0
          }
        },
        contact: {
          phone: '',
          email: '',
          website: place.website || ''
        },
        hours: [],
        badges: [],
        contributionTier: undefined,
        joinedDate: new Date().toISOString(),
        verified: place.business_status === 'OPERATIONAL'
      }));

      // Filter for donors if requested
      const filteredBusinesses = filters.donorsOnly
        ? transformedBusinesses.filter(b => b.contributionTier)
        : transformedBusinesses;

      setBusinesses(filteredBusinesses);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setBusinesses([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    businesses,
    loading,
    error,
    searchBusinesses,
    currentLocation,
    searchRadius
  };
}