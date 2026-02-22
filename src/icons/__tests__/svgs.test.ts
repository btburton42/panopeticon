import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';

const ICONS_DIR = resolve(__dirname, '..');

describe('SVG Files', () => {
  const svgFiles = readdirSync(ICONS_DIR).filter((file) =>
    file.endsWith('.svg')
  );

  it('should have SVG files', () => {
    expect(svgFiles.length).toBeGreaterThan(0);
  });

  describe.each(svgFiles)('%s', (filename) => {
    const filePath = resolve(ICONS_DIR, filename);
    const content = readFileSync(filePath, 'utf-8');

    it('should be valid XML/SVG', () => {
      expect(content).toContain('<svg');
      expect(content).toContain('</svg>');
    });

    it('should have viewBox attribute', () => {
      expect(content).toMatch(/viewBox="[^"]+"/);
    });

    it('should have xmlns attribute', () => {
      expect(content).toContain('xmlns="http://www.w3.org/2000/svg"');
    });

    it('should NOT have width/height attributes (for scalability)', () => {
      // The SVG itself shouldn't have fixed dimensions - the Icon component adds them
      const svgOpenTag = content.match(/<svg[^>]*>/);
      if (svgOpenTag) {
        const hasWidth = /\swidth=/.test(svgOpenTag[0]);
        const hasHeight = /\sheight=/.test(svgOpenTag[0]);
        expect(hasWidth).toBe(false);
        expect(hasHeight).toBe(false);
      }
    });

    it('should use currentColor for themability', () => {
      // Should have at least one use of currentColor for stroke or fill
      const hasCurrentColor =
        content.includes('stroke="currentColor"') ||
        content.includes('fill="currentColor"');
      expect(hasCurrentColor).toBe(true);
    });

    it('should not contain inline styles that override CSS', () => {
      const hasInlineStyles = /style="[^"]*"/.test(content);
      expect(hasInlineStyles).toBe(false);
    });
  });

  describe('Icon Library Consistency', () => {
    it('should have all icons expected in the library', () => {
      const expectedIcons = [
        'no-sign',
        'surveillance-camera',
        'eye',
        'ellipsis',
        'question-mark',
        'retro-mac',
        'menacing-mac',
      ];

      const actualIcons = svgFiles.map((f) => f.replace('.svg', ''));
      expectedIcons.forEach((iconName) => {
        expect(actualIcons).toContain(iconName);
      });
    });

    it('should have consistent viewBox sizes', () => {
      const viewBoxes = svgFiles.map((filename) => {
        const content = readFileSync(resolve(ICONS_DIR, filename), 'utf-8');
        const match = content.match(/viewBox="([^"]+)"/);
        return match ? match[1] : null;
      });

      // All icons should have the same viewBox for consistency
      const uniqueViewBoxes = new Set(viewBoxes);
      expect(uniqueViewBoxes.size).toBe(1);
      expect(viewBoxes[0]).toBe('0 0 100 100');
    });
  });
});
