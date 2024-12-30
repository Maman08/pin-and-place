import React from 'react';
import { cn } from '@/lib/utils';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, className }) => {
  return (
    <div className={cn('space-y-1', className)}>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 text-transparent bg-clip-text animate-fade-in">
        {title}
      </h1>
      {subtitle && (
        <p className="text-gray-600 animate-fade-in animation-delay-100">
          {subtitle}
        </p>
      )}
    </div>
  );
};