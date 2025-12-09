# Nexus - Community Q&A Platform

## Overview

Nexus is a premium, community-driven Questions & Answers platform inspired by Quora. This is a **frontend-focused mockup application** built with modern web technologies, featuring a polished, production-ready UI with comprehensive design system implementation. The application showcases a complete Q&A social platform experience with multiple pages, interactive components, and responsive design patterns.

**Key Characteristics:**
- Frontend mockup using static/mock data (no live backend implementation)
- Full-featured UI resembling a mature Q&A platform
- Mobile-first responsive design
- Dark mode support
- Comprehensive component library using shadcn/ui
- Multi-language translation system with 27+ languages

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing (SPA architecture)
- **TanStack Query** for data fetching and state management patterns

**UI Framework:**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS v4** for utility-first styling with custom design tokens
- **Framer Motion** for animations and transitions
- **Lucide React** for icon system

**Design System:**
- Custom theme configuration in `index.css` with CSS custom properties
- Dark mode support via CSS variables
- Neutral base color palette
- Typography using Inter (sans) and Plus Jakarta Sans (display) fonts
- Standardized spacing, radius, and elevation scales

**State Management:**
- Mock data stored in `client/src/lib/mock-data.ts`
- Client-side state management using React hooks
- Translation cache persists in localStorage

**Translation System:**
- `TranslatedText` component wraps text for translation
- 27+ supported languages (Hindi, Japanese, Spanish, French, German, etc.)
- Translation cache persists in localStorage
- Language settings available at `/languages` page

**Page Structure:**
The application includes comprehensive page coverage:
- Home feed with post cards
- Following page (spaces/topics)
- Questions page (answer requests)
- Spaces page (community areas)
- Notifications center
- Messages interface
- Profile page
- Settings (account, privacy, display, languages)
- Bookmarks and drafts
- Create Ad, Monetization, Plus subscription modals
- Help center
- 404 page

### Architecture Note

**Pure Frontend Application:**
- This is a pure frontend UI mockup with no backend
- All data is mock/static data stored in `client/src/lib/mock-data.ts`
- Payment flows (Razorpay) are in demo mode
- Run with `npm run dev:client` (Vite dev server on port 5000)

### Component Architecture

**Layout Components:**
- `AppShell`: Main application wrapper with header and optional sidebar
- `Header`: Global navigation with profile dropdown, search, notifications
- `RightSidebar`: Suggestions for topics and users to follow
- `Sidebar`: Left navigation (legacy, mostly unused in favor of header)

**Feature Components:**
- `FeedCard`: Question/answer card with interactions (upvote, comment, share, bookmark)
- `Feed`: Container for question cards with infinite scroll placeholder
- `MyBlogPlusModal`: Subscription upgrade modal with pricing tiers
- Comprehensive shadcn/ui primitives (buttons, dialogs, dropdowns, forms, etc.)

**Design Patterns:**
- Composition over inheritance for component reusability
- Controlled vs uncontrolled component patterns for forms
- Custom hooks for responsive design (`use-mobile.tsx`)
- Toast notifications system for user feedback

### Static Asset Handling

**Vite Configuration:**
- Custom plugin (`vite-plugin-meta-images.ts`) for OpenGraph meta tag updates
- Replit-specific plugins for development tooling (cartographer, dev banner)
- Path aliases (`@/`, `@assets/`) for clean imports
- Static assets served from `client/public/`

### Development Workflow

**Development Mode:**
- Vite dev server on port 5000 with HMR
- Hot module replacement for rapid iteration
- Runtime error overlay for debugging
- Run command: `npm run dev:client`

## External Dependencies

### UI & Styling
- **@radix-ui/* (multiple packages)**: Headless UI primitives for accessible components
- **tailwindcss**: Utility-first CSS framework (v4)
- **@tailwindcss/vite**: Vite integration for Tailwind
- **class-variance-authority**: Type-safe component variants
- **framer-motion**: Animation library
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel/slider component

### Forms & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolvers
- **zod**: Schema validation
- **drizzle-zod**: Drizzle ORM to Zod schema conversion

### Data & State
- **@tanstack/react-query**: Server state management
- **date-fns**: Date manipulation and formatting

### Development Tools
- **typescript**: Type safety
- **vite**: Build tool and dev server
- **@replit/vite-plugin-***: Replit-specific development enhancements