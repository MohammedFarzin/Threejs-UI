# LUXE - Ultra-Luxury Jewelry Showcase Website

![LUXE Jewelry](https://img.shields.io/badge/Status-In%20Development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![Three.js](https://img.shields.io/badge/Three.js-3D-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🌟 Overview

LUXE is an ultra-luxury jewelry showcase website built with cutting-edge web technologies to deliver an immersive, premium experience for discerning customers. The website features stunning 3D product visualizations, smooth animations, and an elegant gold and green color palette.

## ✨ Features

### 🎨 Design & UX
- **Ultra-Luxury Gold & Green Color Palette** - Carefully crafted to evoke elegance and sophistication
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - GSAP and Framer Motion powered transitions
- **Custom Scrollbar** - Gold-themed scrollbar matching the brand identity
- **Parallax Effects** - Engaging scroll-based animations

### 💎 3D Integration
- **Interactive 3D Hero Section** - Floating jewelry piece with auto-rotation
- **Gold Particle System** - Shimmer effects creating a luxurious atmosphere
- **WebGL Rendering** - Hardware-accelerated 3D graphics using Three.js
- **Dynamic Lighting** - Professional lighting setup for realistic gold material
- **Smooth Camera Controls** - Orbit controls for interactive exploration

### 🏗️ Technical Features
- **Next.js 16** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern utility-first styling
- **React Three Fiber** - Declarative 3D in React
- **Server Components** - Optimized performance
- **Progressive Loading** - Fast initial load with lazy-loaded 3D assets

## 🎯 Target Audience

- **Demographics:** 18+ years
- **Price Range:** ₹20,000 - ₹1,00,000
- **Customer Type:** Impulse buyers seeking luxury experiences
- **Focus:** Brand awareness and storytelling

## 📦 Project Structure

```
jewelry-showcase/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles and design system
├── components/
│   ├── Hero/
│   │   ├── Hero3D.tsx      # Main 3D hero section
│   │   └── GoldParticles.tsx # Particle system
│   ├── 3D/
│   │   └── JewelryModel.tsx # 3D ring model
│   ├── Layout/
│   │   └── Header.tsx      # Navigation header
│   ├── Products/           # Product components (to be added)
│   ├── Forms/             # Contact forms (to be added)
│   └── UI/                # Reusable UI components (to be added)
├── data/                  # Product data (to be added)
├── hooks/                 # Custom React hooks (to be added)
└── public/
    └── models/            # 3D model files (to be added)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd jewelry-showcase
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design System

### Color Palette

**Primary - Luxury Gold:**
- Gold 500: `#D4AF37` (Main brand color)
- Gold 400: `#FFC107` (Accents)
- Gold 600: `#B8860B` (Dark gold)

**Secondary - Elegant Green:**
- Green 600: `#2F5233` (Deep forest green)
- Green 500: `#4A7C59` (Medium green)
- Green 100: `#D4EDDA` (Light green)

**Neutrals:**
- White: `#FFFFFF`
- Black: `#0A0A0A`
- Gray scale: 50-900

### Typography

- **Headings:** Playfair Display (Elegant serif)
- **Body:** Inter (Clean sans-serif)
- **Accent:** Great Vibes (Luxury script - used sparingly)

### Spacing & Layout

- Container max-width: `1280px`
- Section padding: `96px` (desktop) / `64px` (mobile)
- Grid gaps: `32px` (desktop) / `16px` (mobile)

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type safety and better DX |
| **Tailwind CSS v4** | Utility-first styling |
| **Three.js** | 3D graphics library |
| **React Three Fiber** | React renderer for Three.js |
| **@react-three/drei** | Useful Three.js helpers |
| **GSAP** | Advanced animations |
| **Framer Motion** | React animation library |
| **React Hook Form** | Form handling (to be implemented) |
| **Zod** | Schema validation (to be implemented) |
| **Zustand** | State management (to be implemented) |

## 📱 Features by Section

### Hero Section
- Full-screen 3D experience
- Floating jewelry with auto-rotation
- Gold particle shimmer effects
- Gradient background (green to gold)
- Clear call-to-action
- Scroll indicator animation

### Brand Story Section
- Two-column layout (text + image)
- Brand narrative and heritage
- Elegant typography
- Call-to-action button

### Collections Section
- Three main categories: Rings, Necklaces, Bracelets
- Interactive cards with hover effects
- Shimmer animations
- Category descriptions

### Featured Products
- Product grid (3 columns)
- Hover overlays
- Product details (name, metal, price)
- "View Details" buttons

### CTA Section
- Gradient background
- Multiple action buttons
- "Book Consultation" and "Request Callback"
- Decorative blur elements

### Footer
- Four-column layout
- Quick links
- Social media links
- Copyright information

## 🎯 Next Steps

### Phase 1: Product Management (Upcoming)
- [ ] Create product data structure
- [ ] Add 5 product entries (2 rings, 2 necklaces, 1 bracelet)
- [ ] Build product detail page
- [ ] Implement product filtering

### Phase 2: 3D Enhancement (Upcoming)
- [ ] Acquire/create real 3D jewelry models (.glb format)
- [ ] Implement 360° rotation controls
- [ ] Add zoom functionality
- [ ] Material switcher (yellow gold, rose gold, white gold)
- [ ] AR try-on feature

### Phase 3: Forms & Interaction (Upcoming)
- [ ] Build inquiry form
- [ ] Create callback request modal
- [ ] Form validation
- [ ] Success/error states
- [ ] Email integration

### Phase 4: Advanced Features (Future)
- [ ] Custom cursor
- [ ] Page transitions
- [ ] Scroll-triggered animations
- [ ] Product comparison
- [ ] Wishlist functionality

### Phase 5: Performance & SEO (Future)
- [ ] Image optimization
- [ ] 3D model optimization
- [ ] Lazy loading
- [ ] SEO metadata
- [ ] Analytics integration

## 🎨 Customization Guide

### Changing Colors

Edit `/app/globals.css`:

```css
:root {
  --gold-500: #YOUR_GOLD_COLOR;
  --green-600: #YOUR_GREEN_COLOR;
}
```

### Adding Products

Create a product data file in `/data/products.ts`:

```typescript
export const products = [
  {
    id: 1,
    name: "Eternal Elegance Ring",
    category: "ring",
    price: 45000,
    // ... more properties
  }
];
```

### Updating 3D Model

Replace the procedural geometry in `/components/3D/JewelryModel.tsx` with a real model:

```typescript
import { useGLTF } from '@react-three/drei';

const { scene } = useGLTF('/models/your-model.glb');
```

## 🐛 Known Issues

- None currently (initial development)

## 📝 Development Notes

### Performance Considerations
- 3D models are dynamically imported to avoid SSR issues
- Particle count is optimized for performance (100 particles)
- Progressive loading strategy for images
- Lazy loading for off-screen components

### Browser Compatibility
- Chrome: ✅ Full support
- Safari: ✅ Full support (WebGL 2.0)
- Firefox: ✅ Full support
- Edge: ✅ Full support

## 🤝 Contributing

This is a custom project. For any modifications or enhancements, please follow these guidelines:

1. Create a new branch for features
2. Test thoroughly on all target browsers
3. Ensure TypeScript types are correct
4. Maintain the luxury design aesthetic
5. Optimize for performance

## 📄 License

Private project - All rights reserved

## 👥 Credits

- **Design:** Custom ultra-luxury jewelry theme
- **3D Models:** Procedurally generated (to be replaced with real models)
- **Fonts:** Google Fonts (Inter, Playfair Display, Great Vibes)
- **Icons:** SVG (custom)

## 📞 Support

For questions or issues:
- Check the Next.js documentation: https://nextjs.org/docs
- Three.js documentation: https://threejs.org/docs
- React Three Fiber: https://docs.pmnd.rs/react-three-fiber

---

**Built with ❤️ for luxury jewelry connoisseurs**

*Last Updated: November 2024*
