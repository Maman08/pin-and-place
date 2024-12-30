import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div 
      className={cn(
        'bg-gradient-to-b from-white to-gray-50',
        'rounded-xl shadow-sm border border-gray-100',
        'transition-all duration-300 ease-out',
        'hover:shadow-lg hover:border-primary-200',
        'hover:from-white hover:to-primary-50/30',
        'animate-fade-in',
        className
      )}
    >
      {children}
    </div>
  );
};