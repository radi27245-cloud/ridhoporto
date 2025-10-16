import React from 'react';
import { CardProps } from '@/types';
import { cn } from '@/lib/utils';

const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  glow = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'card bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-300',
        hover && 'hover:bg-white/10 hover:-translate-y-2 hover:shadow-card',
        glow && 'shadow-glow',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;






