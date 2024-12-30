import { Home, Building2, Users } from 'lucide-react';
import type { Address } from '@/types/address';

export const getAddressIcon = (type: Address['type']) => {
  switch (type) {
    case 'home':
      return Home;
    case 'office':
      return Building2;
    case 'friend':
      return Users;
  }
};