import React from 'react';
import { cn } from '@/lib/utils';

interface GradientProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Gradient: React.FC<GradientProps> = ({ variant = 'primary', className }) => {
  return (
    <div className={cn(
      'absolute inset-0 pointer-events-none opacity-50',
      {
        'bg-gradient-to-tr from-primary-500/20 via-primary-300/10 to-transparent': variant === 'primary',
        'bg-gradient-to-bl from-white/50 via-gray-100/30 to-transparent': variant === 'secondary',
      },
      className
    )} />
  );
};