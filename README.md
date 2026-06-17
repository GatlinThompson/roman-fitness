# Roman Fitness

A personal workout tracking app built with Next.js and Supabase. Structured around a phase-based periodization system, it tracks lifts and supersets day-by-day across training phases with real-time updates.

## Features

- **Phase-based training** — Cycles through 5 OPT model phases: Stabilization Endurance, Strength Endurance, Muscular Development, Maximal Strength, and Power. Tracks current week and day within each phase (Mon–Sat, Sundays excluded).
- **Workout dashboard** — Shows today's scheduled lifts and the full weekly workout view.
- **Lift & superset tracking** — Each lift stores exercise name, reps, and tempo. Supersets group multiple lifts together.
- **Admin panel** — Supabase-authenticated route for managing lifts, supersets, and phase configuration.
- **Real-time updates** — WebSocket connection keeps workout data in sync across devices.
- **Mobile-first UI** — Glass-morphism design with Tailwind CSS and Framer Motion animations.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Backend / Auth / DB | Supabase |
| Real-time | WebSocket |
| Font | Montserrat (Google Fonts) |

## Project Structure

```
roman-fitness/
├── app/
│   ├── (admin)/admin/     # Auth-gated admin panel
│   ├── api/               # REST API routes (lifts, phases)
│   └── layout.tsx         # Root layout with ModalProvider
├── components/
│   ├── features/          # Dashboard, workout, and auth components
│   ├── forms/             # Form inputs (lift date, options)
│   └── ui/                # Primitives — button, modal, spinner, glass card
├── contexts/              # Modal context
├── lib/supabase/          # Supabase client, server, middleware, and query utils
├── types/                 # TypeScript types (Lift, SuperSet, PhaseInfo)
└── utils/                 # Date helpers, phase calculation, lift utilities
```

## Getting Started

### Prerequisites

- Node.js v20+
- A [Supabase](https://supabase.com) project

### Environment Variables

Create a `.env.local` file at the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Install & Run

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## License

Private and proprietary.
