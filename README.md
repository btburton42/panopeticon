# Surveillance Carousel

A responsive single-page website built with Astro featuring an SVG carousel that cycles through three icons:
- 🚫 No Sign
- 📹 Surveillance Camera
- 👁️ Eye

## Features

- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **SVG Carousel**: Smooth transitions between three custom SVG illustrations
- **Interactive Controls**: 
  - Previous/Next buttons to manually cycle through slides
  - Clickable indicators to jump to a specific slide
  - Auto-cycling every 4 seconds
- **Beautiful UI**: Glassmorphism design with gradient background

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro       # Main layout component
├── components/
│   └── Carousel.astro     # Carousel component with SVGs
└── pages/
    └── index.astro        # Home page
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Installation

1. Navigate to the project directory:
```bash
cd /Users/tylerburton/Repos/panopeticon
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

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
