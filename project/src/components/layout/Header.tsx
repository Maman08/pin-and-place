import React from 'react';
import { MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="relative bg-white shadow-sm">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 text-transparent bg-clip-text">
              DeliverEase
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Orders</a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Profile</a>
            </nav>
          </div>
          
          <Button
            variant="primary"
            icon={<MapPin className="animate-float" />}
          >
            Add New Address
          </Button>
        </div>
      </Container>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
    </header>
  );
};