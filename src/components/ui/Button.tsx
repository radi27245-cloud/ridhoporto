import React from 'react';
import { ButtonProps } from '@/types';
import { cn } from '@/lib/utils';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'btn inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow hover:shadow-glow-lg hover:-translate-y-1',
    secondary: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-dark-950 hover:-translate-y-1',
    outline: 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:-translate-y-1'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };
  
  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;






