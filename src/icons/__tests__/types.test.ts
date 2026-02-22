import { describe, it, expect } from 'vitest';
import { ICON_SIZE_MAP } from '../types';

describe('Icon Types', () => {
  describe('ICON_SIZE_MAP', () => {
    it('should have all size presets defined', () => {
      expect(ICON_SIZE_MAP).toHaveProperty('xs');
      expect(ICON_SIZE_MAP).toHaveProperty('sm');
      expect(ICON_SIZE_MAP).toHaveProperty('md');
      expect(ICON_SIZE_MAP).toHaveProperty('lg');
      expect(ICON_SIZE_MAP).toHaveProperty('xl');
      expect(ICON_SIZE_MAP).toHaveProperty('full');
    });

    it('should have correct size values', () => {
      expect(ICON_SIZE_MAP.xs).toBe(16);
      expect(ICON_SIZE_MAP.sm).toBe(24);
      expect(ICON_SIZE_MAP.md).toBe(32);
      expect(ICON_SIZE_MAP.lg).toBe(48);
      expect(ICON_SIZE_MAP.xl).toBe(64);
      expect(ICON_SIZE_MAP.full).toBe(100);
    });

    it('should have increasing sizes', () => {
      const sizes = Object.values(ICON_SIZE_MAP);
      for (let i = 1; i < sizes.length; i++) {
        expect(sizes[i]).toBeGreaterThan(sizes[i - 1]);
      }
    });
  });
});
