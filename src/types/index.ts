// Type definitions for the portfolio website

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  school: string;
  major: string;
  batch: string;
  location: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'programming' | 'soft';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Hobby {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  school: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    x?: number;
    y?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
    };
  };
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

// Theme types
export type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Animation types
export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface MotionProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  variants?: any;
}

// Component prop types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void | ((event: any) => void);
  onBlur?: (value: string) => void | ((event: any) => void);
  name?: string;
  ref?: any;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  pattern?: string;
}

export interface TextareaProps extends Omit<InputProps, 'type'> {
  rows?: number;
}

// API types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Event types
export interface CustomEvent<T = any> {
  type: string;
  detail: T;
}

export interface ScrollEvent {
  scrollY: number;
  direction: 'up' | 'down';
  progress: number;
}

// Performance types
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

// Accessibility types
export interface A11yProps {
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  role?: string;
  tabIndex?: number;
}






