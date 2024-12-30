import { create } from 'zustand';
import { Location } from '../types/address';

interface AddressStore {
  currentLocation: Location | null;
  selectedLocation: Location | null;
  locationPermission: PermissionState | null;
  setCurrentLocation: (location: Location | null) => void;
  setSelectedLocation: (location: Location | null) => void;
  setLocationPermission: (permission: PermissionState | null) => void;
}

export const useAddressStore = create<AddressStore>((set) => ({
  currentLocation: null,
  selectedLocation: null,
  locationPermission: null,
  setCurrentLocation: (location) => set({ currentLocation: location }),
  setSelectedLocation: (location) => set({ selectedLocation: location }),
  setLocationPermission: (permission) => set({ locationPermission: permission }),
}));