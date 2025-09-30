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
2. **Waitlist System**: Email collection with Shopify store info
3. **Admin Dashboard**: Waitlist management and analytics
4. **Database Integration**: Neon PostgreSQL for data persistence
5. **Analytics**: Google Tag Manager integration

### Important Notes
- The dev server must bind to `0.0.0.0:5000` for Replit compatibility
- The application uses SSR (Server-Side Rendering) with some client components
- Font loading uses local fonts (Eudoxus Sans)
- Third-party scripts (GTM) may cause hydration warnings in development (expected)

## Deployment
The application is configured for autoscale deployment on Replit:
- **Build**: `pnpm build`
- **Run**: `pnpm start --port 5000 --hostname 0.0.0.0`
- **Target**: Autoscale (stateless web application)

## Known Issues
- Minor TypeScript errors in app/page.tsx and lib/db.ts (non-blocking)
- Hydration mismatch warnings from Google Tag Manager (expected in development)
- Cross-origin request warnings (framework-level, not affecting functionality)
