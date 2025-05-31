# HR-EZ-V1

A modern HR management system built with Next.js 14, featuring a robust tech stack and comprehensive features.

## Tech Stack

### Core
- ⚡️ **Next.js 14** - React framework with App Router
- 🔒 **TypeScript** - Static type checking
- 🎨 **Tailwind CSS** - Utility-first CSS
- 📦 **shadcn/ui** - Re-usable components

### Authentication & Database
- 🔑 **NextAuth.js** - Authentication with multiple providers
- 🔐 **Google OAuth** - Social authentication
- 💾 **Prisma** - Type-safe ORM
- 🐘 **PostgreSQL** - Relational database

### State Management & Forms
- 🔄 **TanStack Query** - Server state management
- 📝 **React Hook Form** - Form handling
- ✅ **Zod** - Schema validation
- 🎯 **Axios** - HTTP client

### Development Tools
- 🧪 **Vitest** - Unit testing
- 🎭 **React Testing Library** - Component testing
- 📝 **ESLint** - Code linting
- 💅 **Prettier** - Code formatting

### UI/UX Features
- 🌓 **next-themes** - Dark mode support
- 🔤 **Google Fonts** - Custom typography
- 📱 **Responsive Design** - Mobile-first approach
- ⚡️ **Optimized Performance** - Built-in performance optimizations

## Features

### Authentication
- Social login with Google
- Email/password authentication
- Protected routes
- Session management
- Password recovery (coming soon)

### User Management
- User profiles
- Account settings
- Role-based access control (coming soon)
- User preferences

### Theme System
- Light/Dark mode toggle
- System preference detection
- Persistent theme selection
- Smooth theme transitions

### Form Handling
- Form validation
- Error handling
- Loading states
- Inline validation
- Custom form components

## Project Structure

```
src/
├── app/                    # App router directory
│   ├── auth/              # Authentication routes
│   │   ├── signin/        # Sign in page
│   │   └── signup/        # Sign up page
│   ├── dashboard/         # Dashboard page
│   ├── profile/          # User profile page
│   └── settings/         # Settings page
├── components/           # Reusable components
│   ├── auth/            # Authentication components
│   └── ui/              # UI components
├── lib/                 # Utility functions
│   ├── db.ts           # Database client
│   └── auth.ts         # Auth configuration
├── styles/             # Global styles
└── generated/          # Generated Prisma client
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Google OAuth credentials

### Environment Setup

1. Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Generate Prisma client:
```bash
npx prisma generate
```

4. Push database schema:
```bash
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
