# Icon Library

A consistent, accessible icon library for the surveillance carousel.

## Available Icons

| Icon | Name | Description |
|------|------|-------------|
| 🚫 | `no-sign` | Prohibition symbol - circle with diagonal line |
| 📹 | `surveillance-camera` | Security camera on mount |
| 👁️ | `eye` | Stylized eye with red iris |
| ⋯ | `ellipsis` | Three horizontal dots |
| ❓ | `question-mark` | Question mark symbol |
| 🖥️ | `retro-mac` | Vintage Macintosh computer with smile |
| 👹 | `menacing-mac` | Angry vintage computer with sharp features |

## Usage

### Using the Icon Component

```astro
---
import Icon from '../components/Icon.astro';
---

<!-- Size presets -->
<Icon name="no-sign" size="lg" label="Stop sign" />

<!-- Custom size in pixels -->
<Icon name="eye" size={64} decorative />

<!-- With custom classes -->
<Icon name="surveillance-camera" size="md" class="my-custom-class" />
```

### Size Presets

| Size | Pixels |
|------|--------|
| `xs` | 16px |
| `sm` | 24px |
| `md` | 32px (default) |
| `lg` | 48px |
| `xl` | 64px |
| `full` | 100px |

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | *required* | Name of the icon |
| `size` | `IconSize \| number` | `'md'` | Size preset or custom pixel value |
| `class` | `string` | `''` | Custom CSS class |
| `label` | `string` | `undefined` | Accessible label for screen readers |
| `decorative` | `boolean` | `false` | If true, hides from screen readers |

## Editing Icons

Icons are stored as individual SVG files in this directory. They use `currentColor` for strokes and fills, allowing CSS color inheritance.

### Guidelines

1. **ViewBox**: All icons use `viewBox="0 0 100 100"` for consistency
2. **No fixed dimensions**: Let the Icon component handle sizing
3. **Use currentColor**: For themability via CSS
4. **Accessibility**: The Icon component handles ARIA attributes

### Editing in VS Code

1. Install the "SVG" extension by jock
2. Open any `.svg` file
3. Edit directly with live preview

## Testing

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# With UI
npm run test:ui

# With coverage
npm run test:coverage
```

Tests validate:
- SVG structure (valid XML, viewBox, xmlns)
- Consistency (all icons have same viewBox)
- Library metadata (all icons documented)
- Size presets (correct values)
