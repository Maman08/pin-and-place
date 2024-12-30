import React from 'react';
import { MapPin, Search } from 'lucide-react';
import { useAddressStore } from '../store/useAddressStore';

interface Props {
  onEnableLocation: () => void;
  onSearchManually: () => void;
}

export const LocationPermissionModal: React.FC<Props> = ({
  onEnableLocation,
  onSearchManually,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Enable Location Services</h2>
        <p className="text-gray-600 mb-6">
          To provide you with the best delivery experience, we need access to your location.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={onEnableLocation}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MapPin size={20} />
            Enable Location
          </button>
          
          <button
            onClick={onSearchManually}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Search size={20} />
            Search Manually
          </button>
        </div>
      </div>
    </div>
  );
};