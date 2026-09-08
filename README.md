# 🚀 Modern Developer Portfolio

A responsive, high-performance developer portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

Designed specifically to showcase software engineering projects, technical skills, career achievements, and direct contact options with zero friction.

---

## ✨ Features

- **⚡ Lightning Fast**: Built with Vite and React 19 for instant hot-module replacement and optimized production chunks.
- **🎨 Glassmorphic & Modern Design**: Polished with subtle backdrop blurs, gradient text highlights, and smooth scroll transitions.
- **🌓 Dark & Light Mode**: Seamless theme toggle with local storage persistence and system preference detection.
- **📂 Filterable Projects Showcase**:
  - Live category filtering (All, Full Stack, AI / ML, Frontend, Cloud & Tools).
  - Real-time search by technology tags (e.g. `React`, `Go`, `Python`) or project keywords.
  - Interactive **Deep Dive Modal** detailing project architecture, key metrics, and direct links to live previews and GitHub repositories.
- **📊 Interactive Skills Matrix**: Categorized tech stacks with visual proficiency indicators.
- **⏳ Career & Milestones Timeline**: Chronological presentation of roles, contributions, and tools used.
- **📬 Interactive Contact Section**: Functional form simulation, fast response promise, and one-click "Copy Email to Clipboard" button with live toast notification.
- **🎯 100% Configurable**: All projects, skills, biography, and social links live in a single centralized file (`src/data/portfolioData.ts`).

---

## 🛠️ Quick Start

### 1. Development Server
Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Production Build
Create an optimized production bundle:
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📝 How to Customize With Your Own Content

All content is centralized in **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**. You don't need to touch JSX or Tailwind classes to personalize it!

### 1. Update Personal Info & Socials
Open `src/data/portfolioData.ts` and modify `personalInfo`:
```typescript
personalInfo: {
  name: "Your Name",
  role: "Software Engineer / Full Stack Developer",
  tagline: "Your punchy personal tagline here.",
  bio: "Your short background...",
  location: "Your City / Remote",
  status: "Available for new roles",
  email: "your.email@example.com",
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/yourhandle",
    email: "mailto:your.email@example.com",
  },
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Completed Projects", value: "15+" },
    ...
  ]
}
```

### 2. Add or Edit Projects
In `portfolioData.ts`, each project in the `projects` array has the following structure:
```typescript
{
  id: "my-cool-project",
  title: "Project Title",
  subtitle: "Short 1-line summary",
  category: "Full Stack", // 'Full Stack' | 'AI / ML' | 'Frontend' | 'Cloud & Tools'
  description: "Brief overview for the card...",
  longDescription: "Detailed breakdown shown inside the modal...",
  highlights: [
    "Key achievement 1",
    "Key achievement 2"
  ],
  technologies: ["React", "TypeScript", "PostgreSQL"],
  liveUrl: "https://yourproject.com",
  githubUrl: "https://github.com/yourhandle/repo",
  featured: true,
  image: "https://images.unsplash.com/...", // or local image in /public
  metrics: "40% Performance Boost"
}
```

### 3. Update Skills & Work Experience
Edit `skillCategories` and `experiences` in `src/data/portfolioData.ts` to reflect your background.

---

## 🚀 Deployment

### Deploy to Vercel
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. The default Vite settings (`npm run build` & output directory `dist`) work automatically out-of-the-box.

### Deploy to Netlify
1. Drag and drop the `dist` folder onto [Netlify Drop](https://app.netlify.com/drop), or connect your repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
