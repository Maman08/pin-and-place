import axios from 'axios';
import type { Address, AddressInput } from '@/types/address';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// GET /api/addresses - Get all addresses
export const getAddresses = async (): Promise<Address[]> => {
  const { data } = await api.get('/addresses');
  return data;
};

// GET /api/addresses/:id - Get address by ID
export const getAddressById = async (id: string): Promise<Address> => {
  const { data } = await api.get(`/addresses/${id}`);
  return data;
};

// POST /api/addresses - Create new address
export const createAddress = async (address: AddressInput): Promise<Address> => {
  const { data } = await api.post('/addresses', address);
  return data;
};

// PUT /api/addresses/:id - Update address
export const updateAddress = async (id: string, address: Partial<AddressInput>): Promise<Address> => {
  const { data } = await api.put(`/addresses/${id}`, address);
  return data;
};

// DELETE /api/addresses/:id - Delete address
export const deleteAddress = async (id: string): Promise<void> => {
  await api.delete(`/addresses/${id}`);
};