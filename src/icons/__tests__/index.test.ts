import { describe, it, expect } from 'vitest';
import { ICON_META } from '../index';

describe('Icon Library Index', () => {
  describe('ICON_META', () => {
    it('should export icon metadata', () => {
      expect(ICON_META).toBeDefined();
      expect(Array.isArray(ICON_META)).toBe(true);
      expect(ICON_META.length).toBeGreaterThan(0);
    });

    it('should have all required icon metadata fields', () => {
      ICON_META.forEach((icon) => {
        expect(icon).toHaveProperty('name');
        expect(icon).toHaveProperty('description');
        expect(icon).toHaveProperty('keywords');
        expect(typeof icon.name).toBe('string');
        expect(typeof icon.description).toBe('string');
        expect(Array.isArray(icon.keywords)).toBe(true);
      });
    });

    it('should have unique icon names', () => {
      const names = ICON_META.map((icon) => icon.name);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(names.length);
    });

    it('should have all expected icons', () => {
      const expectedIcons = [
        'no-sign',
        'surveillance-camera',
        'eye',
        'ellipsis',
        'question-mark',
        'retro-mac',
        'menacing-mac',
      ];

      const actualIcons = ICON_META.map((icon) => icon.name);
      expectedIcons.forEach((iconName) => {
        expect(actualIcons).toContain(iconName);
      });
    });

    it('should have non-empty keywords for each icon', () => {
      ICON_META.forEach((icon) => {
        expect(icon.keywords.length).toBeGreaterThan(0);
        icon.keywords.forEach((keyword) => {
          expect(typeof keyword).toBe('string');
          expect(keyword.length).toBeGreaterThan(0);
        });
      });
    });
  });
});
