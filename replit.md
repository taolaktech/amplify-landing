# Amplify - Shopify Sales Amplification Platform

## Overview

Amplify is a landing page and waitlist application for a Shopify merchant tool designed to help e-commerce businesses grow their sales. The application features a modern React frontend with a Node.js/Express backend, using PostgreSQL for data persistence. The current functionality focuses on collecting email subscribers for a waitlist while showcasing the product's features, pricing, and testimonials.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with path aliases (@/ for client/src, @shared/ for shared)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints defined in shared/routes.ts with Zod schemas for validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development**: tsx for TypeScript execution, Vite dev server with HMR

### Project Structure
```
├── client/              # React frontend
│   └── src/
│       ├── components/  # UI components (shadcn/ui in ui/)
│       ├── pages/       # Page components
│       ├── hooks/       # Custom React hooks
│       └── lib/         # Utilities and query client
├── server/              # Express backend
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route handlers
│   ├── storage.ts       # Database abstraction layer
│   └── db.ts            # Database connection
├── shared/              # Shared code between client/server
│   ├── schema.ts        # Drizzle database schemas
│   └── routes.ts        # API route definitions with Zod
└── migrations/          # Drizzle database migrations
```

### Data Flow Pattern
1. Shared Zod schemas define both database models and API contracts
2. Frontend uses typed hooks (e.g., useCreateSubscriber) that validate data before sending
3. Backend validates incoming requests against the same schemas
4. Storage layer abstracts database operations for testability

### Database Schema
- **subscribers**: Stores waitlist email subscriptions (id, email, createdAt)

### Key Design Decisions
- **Shared validation schemas**: Using drizzle-zod to generate Zod schemas from database models ensures type safety across the stack
- **Component-first UI**: shadcn/ui provides accessible, customizable components without external dependencies
- **CSS variables theming**: Enables light/dark mode support through Tailwind configuration
- **Storage abstraction**: DatabaseStorage class implements IStorage interface for potential future storage backends

## External Dependencies

### Database
- **PostgreSQL**: Primary database via DATABASE_URL environment variable
- **Drizzle ORM**: Schema management and query building
- **drizzle-kit**: Database migrations with `npm run db:push`

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