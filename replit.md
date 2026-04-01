# Amplify - Shopify Sales Amplification Platform

## Overview

Amplify is a landing page for a Shopify merchant ad automation tool. The application is a pure frontend React app served by a minimal Node.js/Express backend (no database, no API routes). All media assets for the ad gallery are hosted on S3. The landing page showcases features, pricing, testimonials, and an ad gallery.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Build Tool**: Vite with path aliases (@/ for client/src, @shared/ for shared)

### Backend Architecture
- **Runtime**: Node.js with Express (minimal — only serves the frontend)
- **Language**: TypeScript with ES modules
- **No API routes, no database** — backend logic lives in a separate service
- **Development**: tsx for TypeScript execution, Vite dev server with HMR

### Project Structure
```
├── client/              # React frontend
│   └── src/
│       ├── components/  # UI components (shadcn/ui in ui/)
│       ├── pages/       # Page components (Home.tsx, Privacy.tsx)
│       ├── hooks/       # Custom React hooks
│       └── lib/         # Utilities and query client
├── server/              # Express backend (static file serving only)
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # Empty — no API routes
│   ├── storage.ts       # Empty — no database storage
│   └── db.ts            # Empty — no database connection
└── shared/              # Shared code (empty — no shared schemas/routes)
```

### Key Design Decisions
- **Frontend-only**: All business logic is client-side; subscriber/backend logic is handled by a separate external service
- **S3 media**: All ad gallery videos and images are served from `https://amplify-shopify-uploads.s3.amazonaws.com/website/`
- **Waitlist form**: Shows a local success toast on submit (no API call)
- **Component-first UI**: shadcn/ui provides accessible, customizable components without external dependencies
- **CSS variables theming**: Enables light/dark mode support through Tailwind configuration

## External Dependencies

### Media
- **S3**: `s3://amplify-shopify-uploads/website/` — all ad gallery videos and images
- **Bucket must be publicly readable** for media to load in the browser

### UI Libraries
- **Radix UI**: Headless component primitives (dialog, dropdown, accordion, etc.)
- **Lucide React**: Icon library
- **react-icons**: Additional icons (social media)
- **Embla Carousel**: Carousel/slider component
- **class-variance-authority**: Component variant management

### Development Tools
- **Vite**: Frontend build and development server
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **esbuild**: Server bundling for production

### Fonts
- **Satoshi** (via Fontshare): Display font
- **Inter** (via Google Fonts): Body text font
