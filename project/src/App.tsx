import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Container } from './components/ui/Container';
import { PageTitle } from './components/ui/PageTitle';
import { Gradient } from './components/ui/Gradient';
import { LocationPermissionModal } from './components/LocationPermissionModal';
import { Map } from './components/Map';
import { AddressForm } from './components/AddressForm';
import { AddressList } from './components/AddressList';
import { useAddressStore } from './store/useAddressStore';
import { useAddressApi } from './hooks/useAddressApi';
import type { Address } from './types/address';

function App() {
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  
  const {
    currentLocation,
    selectedLocation,
    locationPermission,
    setCurrentLocation,
    setSelectedLocation,
    setLocationPermission,
  } = useAddressStore();

  const {
    addresses,
    createAddress,
    updateAddress,
    deleteAddress,
  } = useAddressApi();

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentLocation(location);
        setSelectedLocation(location);
        setShowPermissionModal(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        setShowPermissionModal(true);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {showPermissionModal && (
        <LocationPermissionModal
          onEnableLocation={getCurrentLocation}
          onSearchManually={() => setShowPermissionModal(false)}
        />
      )}

      <main className="py-8">
        <Container>
          <PageTitle 
            title="My Addresses"
            subtitle="Manage your delivery locations"
            className="mb-8"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Gradient />
            
            {/* Map Section */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="h-[400px]">
                  {(currentLocation || selectedLocation) && (
                    <Map
                      center={selectedLocation || currentLocation}
                      onLocationChange={setSelectedLocation}
                    />
                  )}
                </div>
                
                {showAddressForm && (
                  <div className="p-6 border-t border-gray-100">
                    <h2 className="text-xl font-semibold mb-4">
                      {editingAddress ? 'Edit Address' : 'Add New Address'}
                    </h2>
                    <AddressForm
                      onSubmit={(data) => {
                        if (editingAddress) {
                          updateAddress({
                            id: editingAddress._id,
                            data: {
                              ...data,
                              location: selectedLocation || currentLocation!,
                            },
                          });
                        } else {
                          createAddress({
                            ...data,
                            location: selectedLocation || currentLocation!,
                          });
                        }
                        setShowAddressForm(false);
                        setEditingAddress(null);
                      }}
                      initialData={editingAddress || undefined}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Address List Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
              <AddressList
                addresses={addresses}
                onSelect={(address) => setSelectedLocation(address.location)}
                onEdit={(address) => {
                  setEditingAddress(address);
                  setSelectedLocation(address.location);
                  setShowAddressForm(true);
                }}
                onDelete={(address) => deleteAddress(address._id)}
              />
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}