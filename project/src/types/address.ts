export interface Location {
  lat: number;
  lng: number;
}

export interface Address {
  _id: string;
  userId: string;
  houseNo: string;
  area: string;
  type: 'home' | 'office' | 'friend';
  location: Location;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AddressInput {
  houseNo: string;
  area: string;
  type: Address['type'];
  location: Location;
  isFavorite: boolean;
}