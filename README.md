# Playzone Web

Playzone is a responsive digital game storefront and cloud-gaming interface built with React, TypeScript, and Vite. The project demonstrates a cinematic dark UI for discovering games, browsing the catalog, managing a cart, and completing a checkout flow.

## Features

- Featured-game discovery experience with selectable spotlight highlights
- Store catalog with filtering controls, sorting, and grid/list views
- Reusable game cards with pricing, genres, ratings, editions, and cart actions
- Shopping cart managed with Redux Toolkit
- Multi-step checkout experience with cart, payment, and review routes
- Demo login and registration screens
- User state displayed in the shared header
- Responsive desktop, tablet, and mobile layouts
- Global toast notifications
- Shared design system defined with CSS custom properties and CSS Modules

> Playzone currently uses local demo data and client-side state. Authentication, payments, persistence, and backend services are not connected.

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- CSS Modules and CSS custom properties
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL printed by Vite, typically `http://localhost:5173`.

### Build for production

```bash
npm run build
```

The production bundle is generated in `dist/`.

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Routes

| Route | Screen |
| --- | --- |
| `/` | Discover page with featured and trending games |
| `/store` | Filterable game catalog |
| `/login` | Demo sign-in experience |
| `/register` | Account creation experience |
| `/profile` | Player profile route; currently under development |
| `/cart` | Shopping cart |
| `/cart/payment` | Payment step |
| `/cart/review` | Order review step |

The shared site header and footer are provided by `SiteLayout`. Checkout routes use a separate `CheckoutLayout` while remaining inside the main application shell.

## Project Structure

```text
src/
├── app/                 # Redux hooks and store configuration
├── assets/              # Bundled visual assets
├── components/          # Reusable UI, layouts, cards, and filters
├── extras/              # Demo game data and helper functions
├── features/            # Redux slices for cart and user state
├── hooks/               # Reusable application hooks
├── pages/               # Route-level screens
├── types/               # Shared TypeScript models
├── App.tsx              # Route definitions
├── index.css            # Global styles and design tokens
└── main.tsx             # React entry point and providers
```

### State management

The Redux store currently contains:

- `cart`: cart items, quantities, and prices
- `user`: the demo authenticated user and login state

State is held in memory and resets when the page is refreshed.

### Demo content

Sample game content is defined in `src/extras/dummy_data.ts`. It includes titles, descriptions, publishers, genres, ratings, editions, gallery assets, languages, and system requirements.

Game artwork is currently loaded from external image URLs, so an internet connection is required to display those images.

## Design System

The interface uses a dark, gaming-focused visual language:

- Background: `#0B0C10`
- Primary surface: `#1E1E22`
- Indigo accent: `#6366F1`
- Cyan accent: `#06B6D4`
- Emerald accent: `#10B981`
- Headings: Plus Jakarta Sans
- Body text: Inter

Global tokens for colors, typography, spacing, radii, shadows, and transitions are defined in `src/index.css`. Component-specific styles use CSS Modules.

## Current Limitations

- Game, order, and user data are mocks rather than API-backed data
- Login accepts demo input but does not validate credentials
- Checkout does not process real payments
- Store filters and several secondary navigation controls are presentation-focused
- Redux state is not persisted
- The profile screen is currently a placeholder
- Some links and product detail routes are awaiting implementation

## Roadmap

- Build the full player profile and overview experience
- Add game detail pages
- Connect the catalog, authentication, wishlist, and orders to an API
- Persist cart and authenticated user state
- Implement functional catalog filtering and search
- Add tests for checkout, cart behavior, and routes
- Improve keyboard navigation and automated accessibility coverage

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run lint` | Run Oxlint |
| `npm run preview` | Serve the production build locally |
