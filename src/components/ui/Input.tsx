import React from 'react';
import { InputProps, TextareaProps } from '@/types';
import { cn } from '@/lib/utils';

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  ref,
  className,
  required = false,
  disabled = false,
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      // Check if onChange expects a string (our custom type) or an event (react-hook-form)
      if (onChange.length === 1) {
        onChange(e.target.value);
      } else {
        (onChange as any)(e);
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      if (onBlur.length === 1) {
        onBlur(e.target.value);
      } else {
        (onBlur as any)(e);
      }
    }
  };
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      name={name}
      ref={ref}
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
  onBlur,
  name,
  ref,
  className,
  required = false,
  disabled = false,
  rows = 4,
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed resize-none';
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      if (onChange.length === 1) {
        onChange(e.target.value);
      } else {
        (onChange as any)(e);
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onBlur) {
      if (onBlur.length === 1) {
        onBlur(e.target.value);
      } else {
        (onBlur as any)(e);
      }
    }
  };
  
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      name={name}
      ref={ref}
      className={cn(baseClasses, className)}
      required={required}
      disabled={disabled}
      rows={rows}
      {...props}
    />
  );
};

export default Input;






