# Next.js Boilerplate

A modern, feature-rich boilerplate for Next.js 14 applications with TypeScript, Tailwind CSS, and theme support.

## Features

- ⚡️ **Next.js 14** - Latest version of Next.js with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📝 **TypeScript** - Type safety and enhanced developer experience
- 🌓 **Theme Support** - Built-in dark/light mode with next-themes
- 🧱 **UI Components** - Pre-built components using shadcn/ui
- 📱 **Responsive Design** - Mobile-first approach
- 🔒 **Authentication Ready** - Pre-built auth pages and structure

## Project Structure

```
src/
├── app/                    # App router directory
│   ├── auth/              # Authentication routes
│   │   ├── signin/        # Sign in page
│   │   └── signup/        # Sign up page
│   ├── dashboard/         # Dashboard page
│   ├── profile/          # User profile page
│   ├── settings/         # Settings page
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   └── ui/              # UI components
└── styles/              # Global styles
```

## Routes

- **/** - Home page with welcome message
- **/dashboard** - Main dashboard with overview and statistics
- **/profile** - User profile management
- **/settings** - Application settings and preferences
- **/auth/signin** - User sign in
- **/auth/signup** - New user registration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Dependencies

### Core Dependencies
- next: 14.0.4
- react: 18.2.0
- react-dom: 18.2.0
- next-themes: 0.2.1

### UI and Styling
- tailwindcss: 3.3.6
- class-variance-authority: 0.7.0
- clsx: 2.0.0
- tailwind-merge: 2.1.0
- @radix-ui/react-slot: 1.0.2
- lucide-react: 0.294.0

### Development Dependencies
- typescript: 5.3.3
- @types/react: 18.2.45
- @types/react-dom: 18.2.17
- @types/node: 20.10.4
- eslint: 8.55.0
- eslint-config-next: 14.0.4
- autoprefixer: 10.4.16
- postcss: 8.4.32

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
