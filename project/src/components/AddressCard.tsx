import React from 'react';
import { MapPin, Pencil, Trash2, Star, Home, Building2, Users } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import type { Address } from '@/types/address';

interface AddressCardProps {
  address: Address;
  onSelect: (address: Address) => void;
  onEdit: (address: Address) => void;
  onDelete: (address: Address) => void;
}

const getAddressIcon = (type: Address['type']) => {
  switch (type) {
    case 'home':
      return Home;
    case 'office':
      return Building2;
    case 'friend':
      return Users;
  }
};

export const AddressCard: React.FC<AddressCardProps> = ({
  address,
  onSelect,
  onEdit,
  onDelete,
}) => {
  const Icon = getAddressIcon(address.type);

  return (
    <Card className="p-4 group hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl shadow-inner animate-pulse-glow">
          <Icon className="w-6 h-6 text-primary-600" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold capitalize text-gray-900">{address.type}</h3>
            {address.isFavorite && (
              <Star 
                size={16} 
                className="text-yellow-500 fill-yellow-500 animate-float"
              />
            )}
          </div>
          
          <p className="text-gray-600 text-sm mt-1">
            {address.houseNo}, {address.area}
          </p>
        </div>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="primary"
            size="sm"
            icon={<MapPin size={18} />}
            onClick={() => onSelect(address)}
            title="Select Address"
            className="animate-fade-in"
          />
          
          <Button
            variant="outline"
            size="sm"
            icon={<Pencil size={18} />}
            onClick={() => onEdit(address)}
            title="Edit Address"
            className="animate-fade-in delay-75"
          />
          
          <Button
            variant="danger"
            size="sm"
            icon={<Trash2 size={18} />}
            onClick={() => onDelete(address)}
            title="Delete Address"
            className="animate-fade-in delay-150"
          />
        </div>
      </div>
    </Card>
  );
};