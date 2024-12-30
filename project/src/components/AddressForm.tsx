import React from 'react';
import { Home, Building2, Users, Star } from 'lucide-react';
import { AddressInput } from '../types/address';

interface Props {
  onSubmit: (data: AddressInput) => void;
  initialData?: Partial<AddressInput>;
}

export const AddressForm: React.FC<Props> = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = React.useState<AddressInput>({
    houseNo: initialData.houseNo || '',
    area: initialData.area || '',
    type: initialData.type || 'home',
    location: initialData.location || { lat: 0, lng: 0 },
    isFavorite: initialData.isFavorite || false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="houseNo" className="block text-sm font-medium text-gray-700">
          House/Flat/Block No.
        </label>
        <input
          type="text"
          id="houseNo"
          value={formData.houseNo}
          onChange={(e) => setFormData({ ...formData, houseNo: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="area" className="block text-sm font-medium text-gray-700">
          Apartment/Road/Area
        </label>
        <input
          type="text"
          id="area"
          value={formData.area}
          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Save as
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, type: 'home' })}
            className={`flex-1 flex flex-col items-center p-4 rounded-lg border ${
              formData.type === 'home' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
          >
            <Home size={24} className={formData.type === 'home' ? 'text-blue-500' : 'text-gray-500'} />
            <span className="mt-2 text-sm">Home</span>
          </button>
          
          <button
            type="button"
            onClick={() => setFormData({ ...formData, type: 'office' })}
            className={`flex-1 flex flex-col items-center p-4 rounded-lg border ${
              formData.type === 'office' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
          >
            <Building2 size={24} className={formData.type === 'office' ? 'text-blue-500' : 'text-gray-500'} />
            <span className="mt-2 text-sm">Office</span>
          </button>
          
          <button
            type="button"
            onClick={() => setFormData({ ...formData, type: 'friend' })}
            className={`flex-1 flex flex-col items-center p-4 rounded-lg border ${
              formData.type === 'friend' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
          >
            <Users size={24} className={formData.type === 'friend' ? 'text-blue-500' : 'text-gray-500'} />
            <span className="mt-2 text-sm">Friends</span>
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          onClick={() => setFormData({ ...formData, isFavorite: !formData.isFavorite })}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
            formData.isFavorite ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200'
          }`}
        >
          <Star
            size={20}
            className={formData.isFavorite ? 'text-yellow-500 fill-yellow-500' : 'text-gray-500'}
          />
          <span>Save as Favorite</span>
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Save Address
      </button>
    </form>
  );
};