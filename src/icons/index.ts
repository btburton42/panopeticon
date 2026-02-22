/**
 * Icon Library
 *
 * A consistent, accessible icon library for the surveillance carousel.
 *
 * Usage:
 *   import { Icon } from '../icons';
 *   <Icon name="no-sign" size="lg" label="Stop sign" />
 *
 * Or import individual SVGs:
 *   import NoSignIcon from '../icons/no-sign.svg';
 */

export type { IconName, IconProps, IconSize, IconMeta } from './types';
export { ICON_SIZE_MAP } from './types';

/**
 * Icon metadata for documentation and search
 */
export const ICON_META: IconMeta[] = [
  {
    name: 'no-sign',
    description: 'Prohibition symbol - circle with diagonal line',
    keywords: ['stop', 'prohibited', 'forbidden', 'ban', 'no'],
  },
  {
    name: 'surveillance-camera',
    description: 'Security camera on mount',
    keywords: ['camera', 'security', 'cctv', 'watching', 'monitor'],
  },
  {
    name: 'eye',
    description: 'Stylized eye with red iris',
    keywords: ['watch', 'see', 'look', 'vision', 'observe'],
  },
  {
    name: 'ellipsis',
    description: 'Three horizontal dots',
    keywords: ['more', 'loading', 'dots', 'menu', 'options'],
  },
  {
    name: 'question-mark',
    description: 'Question mark symbol',
    keywords: ['help', 'unknown', 'ask', 'query', 'what'],
  },
  {
    name: 'retro-mac',
    description: 'Vintage Macintosh computer with smile',
    keywords: ['computer', 'mac', 'happy', 'vintage', 'retro'],
  },
  {
    name: 'menacing-mac',
    description: 'Angry vintage computer with sharp features',
    keywords: ['computer', 'mac', 'angry', 'scary', 'evil'],
  },
];

import type { IconMeta } from './types';
