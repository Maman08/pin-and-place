import React from 'react';
import { Address } from '@/types/address';
import { AddressCard } from './AddressCard';

interface Props {
  addresses: Address[];
  onSelect: (address: Address) => void;
  onEdit: (address: Address) => void;
  onDelete: (address: Address) => void;
}

export const AddressList: React.FC<Props> = ({
  addresses,
  onSelect,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="space-y-4">
      {addresses.map((address, index) => (
        <div
          key={address._id}
          className="animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <AddressCard
            address={address}
            onSelect={onSelect}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
};