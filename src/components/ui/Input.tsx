import React from 'react';
import { InputProps, TextareaProps } from '@/types';
import { cn } from '@/lib/utils';

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  required = false,
  disabled = false,
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={cn(baseClasses, className)}
      required={required}
      disabled={disabled}
      {...props}
    />
  );
};

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  className,
  required = false,
  disabled = false,
  rows = 4,
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed resize-none';
  
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={cn(baseClasses, className)}
      required={required}
      disabled={disabled}
      rows={rows}
      {...props}
    />
  );
};

export default Input;






