# Amplify - AI-Powered Marketing Automation Platform

## Overview
Amplify is a marketing automation platform built for Shopify merchants. It helps automate ad campaigns with AI-powered optimization across multiple platforms to maximize ROAS (Return on Ad Spend) and grow sales.

## Tech Stack
- **Framework**: Next.js 15.2.4 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Database**: Neon (PostgreSQL) via @neondatabase/serverless
- **Forms**: React Hook Form with Zod validation
- **Package Manager**: pnpm

## Project Structure
```
/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes for database operations
│   ├── admin/             # Admin dashboard (waitlist management)
│   ├── blog/              # Blog pages
│   ├── layout.tsx         # Root layout with fonts, analytics
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── ui/               # Radix UI components
│   └── [feature components]
├── lib/                   # Utility functions and configs
│   ├── db.ts             # Database connection and queries
│   ├── supabase/         # Supabase client setup
│   └── utils.ts          # Helper functions
├── public/               # Static assets (images, fonts)
└── styles/              # Global CSS styles
```

## Recent Changes
- **2025-12-01**: Partner logos moved to sticky header
  - Shopify Partners, Meta Business Partner, and Google Partner logos now in navbar
  - Logos display on desktop (lg: 1024px+) on the right side before Login/Sign Up buttons
  - Removed partner logos from hero section (no longer duplicated)
  - Logos stay visible as users scroll (sticky header behavior)

- **2025-12-01**: Header alignment and analytics improvements
  - Fixed navbar alignment with consistent flex container heights (h-16/h-18/h-20)
  - Improved logo, nav links, and CTA button vertical alignment
  - Added Google Analytics (G-7Q60C6KS7N) alongside GTM tracking
  - Fixed TypeScript errors in testimonials.tsx with proper Testimonial interface
  - Enhanced testimonials masonry layout with typed arrays
  - Converted waitlist modal to direct signup link (app.useamplify.ai/auth/signup)
  - Removed "Book a demo" button from navbar and hero
  - Eliminated "Scale" pricing tier (now Launch/Starter/Grow only)
  - Updated contact address to "909 Reinli Street, Austin, TX 78751"

- **2025-10-01**: Comprehensive mobile optimization and responsiveness improvements
  - Implemented 44px minimum touch targets across all interactive elements
  - Added responsive viewport meta tag (width=device-width, user-scalable=yes, maximum-scale=5)
  - Optimized mobile typography with responsive text scaling (text-xs/sm/base/lg/xl)
  - Enhanced mobile layouts with responsive padding, spacing, and grid configurations
  - Improved all components for mobile: Hero, Navbar, Pricing, Features, How It Works, Footer
  - Added mobile-specific CSS utilities for touch optimization and smooth scrolling
  - Scoped -webkit-overflow-scrolling to overflow containers only
  - All TypeScript/LSP errors and hydration warnings resolved

- **2025-09-30**: Initial Replit setup
  - Installed Node.js 20 and pnpm package manager
  - Configured Next.js to work with Replit proxy (allowedDevOrigins)
  - Added cache control headers for development
  - Set up development workflow on port 5000
  - Configured autoscale deployment with production build

## Configuration

### Next.js Configuration (next.config.mjs)
- **ESLint**: Disabled during builds
- **TypeScript**: Build errors ignored (existing from import)
- **Images**: Unoptimized for compatibility
- **Dev Origins**: Allowed all origins for Replit proxy support
- **Cache Control**: Disabled caching for development

### Environment Variables
The application uses Neon database and requires database credentials. The database connection checks multiple environment variable names:
- `NEON_DATABASE_URL`
- `POSTGRES_URL`
- Other Neon-prefixed variants

### Database Schema
The application uses a PostgreSQL database with the following table:
- **waitlist**: Stores waitlist signups
  - id, name, email, shopify_url, sales_locations, plan_interest, status, notes, timestamps

## Development

### Running Locally
The app runs on port 5000 using:
```bash
pnpm dev --port 5000 --hostname 0.0.0.0
```

### Key Features
1. **Landing Page**: Hero section, features, testimonials, pricing, FAQ
2. **Direct Signup**: Links to app.useamplify.ai/auth/signup
3. **Admin Dashboard**: Waitlist management and analytics
4. **Database Integration**: Neon PostgreSQL for data persistence
5. **Analytics**: Google Analytics (G-7Q60C6KS7N) and Google Tag Manager (GTM-WV76XP37)

### Important Notes
- The dev server must bind to `0.0.0.0:5000` for Replit compatibility
- The application uses SSR (Server-Side Rendering) with some client components
- Font loading uses local fonts (Eudoxus Sans)
- Third-party scripts (GTM) may cause hydration warnings in development (expected)

### Mobile Optimization
- All interactive elements meet WCAG 44px minimum touch target on mobile
- Responsive breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile-first approach with progressive enhancement
- Touch-optimized with tap highlight colors and smooth scrolling
- Text scales appropriately across all device sizes

## Deployment
The application is configured for autoscale deployment on Replit:
- **Build**: `pnpm build`
- **Run**: `pnpm start --port 5000 --hostname 0.0.0.0`
- **Target**: Autoscale (stateless web application)

## Known Issues
None - all errors and warnings have been resolved.
