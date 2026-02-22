/**
 * Available icon names in the icon library
 */
export type IconName =
  | 'no-sign'
  | 'surveillance-camera'
  | 'eye'
  | 'ellipsis'
  | 'question-mark'
  | 'retro-mac'
  | 'menacing-mac';

/**
 * Size presets for icons
 */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Props for the Icon component
 */
export interface IconProps {
  /** Name of the icon to display */
  name: IconName;

  /** Size preset or custom size in pixels */
  size?: IconSize | number;

  /** Custom CSS class */
  class?: string;

  /** Accessible label for screen readers */
  label?: string;

  /** Whether the icon is decorative (hides from screen readers) */
  decorative?: boolean;
}

/**
 * Icon metadata for library management
 */
export interface IconMeta {
  name: IconName;
  description: string;
  keywords: string[];
}

/**
 * Size mapping for IconSize presets
 */
export const ICON_SIZE_MAP: Record<IconSize, number> = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
  full: 100,
} as const;
