# LavaLinks 🔗

A beautiful, modern Linktree alternative built with Next.js 15, React 19, and Framer Motion. Create your stunning personal link hub with smooth animations and a glassmorphic design.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-ff0055?style=flat-square&logo=framer)

## ✨ Features

- **Modern Design**: Glassmorphic mobile-frame design with vibrant cyan-to-magenta gradient
- **Smooth Animations**: Professional animations powered by Framer Motion
- **Fully Responsive**: Perfect on all devices from mobile to desktop
- **Fast Performance**: Built with Next.js 15 and Turbopack for lightning-fast builds
- **Easy Customization**: Simple configuration file for all your links and data
- **Type-Safe**: Built with TypeScript for better developer experience
- **Icon Support**: Includes Lucide React and React Icons libraries

## 🎨 Design Highlights

- Animated floating particles and background blur effects
- Interactive hover states with glow effects
- Spring-based physics animations
- Glassmorphism with backdrop blur
- Mobile-first responsive design
- Professional shine effects on buttons
- Rotating avatar ring animation

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/lavalinks.git
cd lavalinks
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Configuration

Edit your profile data in `src/constants/index.ts` or your constants file:

````typescript


## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.4](https://nextjs.org/)
- **UI Library**: [React 19.1.0](https://react.dev/)
- **Animation**: [Framer Motion 12.23.22](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS 3.4.17](https://tailwindcss.com/)
- **Icons**:
  - [Lucide React 0.544.0](https://lucide.dev/)
  - [React Icons 5.5.0](https://react-icons.github.io/react-icons/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)

## 📦 Build

Create a production build:

```bash
npm run build
````

Start the production server:

```bash
npm start
```

## 🎯 Key Features Explained

### Animations

All animations use Framer Motion with:

- Spring physics for natural movement
- Staggered entrance animations
- Hover and tap interactions
- Optimized performance

### Responsive Design

Breakpoints for all screen sizes:

- Mobile: 320px+
- Tablet: 640px+ (sm)
- Desktop: 768px+ (md)
- Large: 1024px+ (lg)

### Performance

- Server-side rendering with Next.js
- Optimized with Turbopack
- Minimal JavaScript bundle
- Fast page loads

## 🎨 Customization

### Colors

Edit the gradient colors in the component or create a theme file:

```typescript
export const THEME = {
  background: "from-[#6cd0d0] via-[#8dd5d5] to-[#ba008a]",
  buttonBg: "bg-white/95",
  buttonHover: "hover:bg-[#6cd0d0]",
  // ... more theme options
};
```

### Animations

Adjust animation timing in the component:

```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100, // Adjust for bounciness
      damping: 12, // Adjust for smoothness
    },
  },
};
```

## 👤 Author

**Mohamed Tarek**

- Website: [mohamedtarek.site](https://mohamedtarek.site)
- GitHub: [@3tared](https://github.com/3tared)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using Next.js and Framer Motion
