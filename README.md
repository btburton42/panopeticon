# panopeticon

NOPE.

Someday I'll have a way for you to contribute to NOPE. Right now it's mostly me and the robots.


### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Use

- **Auto Carousel**: The carousel automatically cycles through slides every 4 seconds
- **Manual Navigation**: Click the `<` and `>` buttons to manually navigate between slides
- **Jump to Slide**: Click the indicator dots to jump directly to a specific slide

## Customization

### Modify SVGs
Edit the SVG elements in [src/components/Carousel.astro](src/components/Carousel.astro) to customize the icons.

### Change Colors
The gradient background and SVG colors can be modified in the component's style sections.

### Adjust Auto-cycle Timing
In [src/components/Carousel.astro](src/components/Carousel.astro), find the `setInterval(nextSlide, 4000)` line and change `4000` (milliseconds) to your preferred interval.

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro on GitHub](https://github.com/withastro/astro)
