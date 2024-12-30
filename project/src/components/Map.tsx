import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Location } from '../types/address';
import { AlertCircle } from 'lucide-react';

interface Props {
  center: Location;
  onLocationChange?: (location: Location) => void;
}

export const Map: React.FC<Props> = ({ center, onLocationChange }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      setError('Google Maps API key is missing. Please add VITE_GOOGLE_MAPS_API_KEY to your .env file.');
      return;
    }

    const loader = new Loader({
      apiKey,
      version: 'weekly',
    });

    loader.load().then(() => {
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
      });

      markerRef.current = new google.maps.Marker({
        position: center,
        map,
        draggable: true,
      });

      if (onLocationChange) {
        markerRef.current.addListener('dragend', () => {
          const position = markerRef.current?.getPosition();
          if (position) {
            onLocationChange({
              lat: position.lat(),
              lng: position.lng(),
            });
          }
        });

        map.addListener('click', (e: google.maps.MapMouseEvent) => {
          const position = e.latLng;
          if (position && markerRef.current) {
            markerRef.current.setPosition(position);
            onLocationChange({
              lat: position.lat(),
              lng: position.lng(),
            });
          }
        });
      }
    }).catch((err) => {
      setError('Failed to load Google Maps. Please check your API key and try again.');
      console.error('Google Maps load error:', err);
    });
  }, [center]);

  if (error) {
    return (
      <div className="w-full h-full rounded-lg bg-red-50 flex items-center justify-center p-4">
        <div className="flex items-center gap-2 text-red-600">
          <AlertCircle size={20} />
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
};