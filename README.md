# Workout App

A full-stack workout tracking application built with Next.js, featuring real-time updates via WebSockets and powered by Supabase.

## Features

- 📊 **Dashboard** - View today's workout and weekly lift schedule
- 🏋️ **Workout Tracking** - Track lifts, supersets, and workout sessions
- 👨‍💼 **Admin Panel** - Manage and edit lifts with a dedicated admin interface
- ⚡ **Real-time Updates** - WebSocket integration for live workout data
- 📱 **Responsive Design** - Mobile and desktop-optimized views
- 🎨 **Modern UI** - Glass-morphism design with Tailwind CSS and Framer Motion

## Tech Stack

### Frontend (Client)

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Database:** Supabase (Client-side)
- **Icons:** React Icons
- **Real-time:** WebSocket client

## Project Structure

```
workout-app/
├── client/                 # Next.js frontend application
│   ├── app/               # App router pages and API routes
│   │   ├── (admin)/       # Admin-only pages
│   │   ├── api/           # API endpoints
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable React components
│   │   ├── features/      # Feature-specific components
│   │   ├── forms/         # Form components
│   │   ├── layout/        # Layout components
│   │   └── ui/            # UI primitives
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Libraries and utilities
│   │   └── supabase/      # Supabase client configuration
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn
- Supabase account and project

### Environment Variables

Create `.env.local` files in both client and server directories:

**Client (.env.local)**

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd workout-app
   ```

2. **Install client dependencies**

   ```bash
   cd client
   npm install
   ```

### Development

Run the client:

**Terminal - Client**

```bash
cd client
npm run dev
```

The client will be available at `http://localhost:3000`

### Production Build

**Client**

```bash
cd client
npm run build
npm start
```

## Features Overview

### Dashboard

- View today's scheduled workout
- See weekly lift overview
- Track workout progress

### Admin Panel

- Create, edit, and delete lifts
- Manage workout schedules
- Configure supersets

### Workout Tracking

- Track individual lifts and supersets
- Mobile-optimized workout views
- Real-time workout updates

### Real-time Functionality

- WebSocket connection for live data updates
- Instant synchronization across devices
- Real-time workout modifications

## Database

This application uses Supabase for:

- User authentication
- Workout and lift data storage
- Real-time subscriptions
- Server-side data management

## Scripts

### Client Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Contact

For questions or support, please open an issue in the repository.
