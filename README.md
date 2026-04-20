# ⌨️ Ayush Mandowara Portfolio (CEO)
**Interactive Terminal-Themed Developer Showcase**

[![Tested on Gemini](https://img.shields.io/badge/Tested_on-Gemini_CLI-8E44AD?style=for-the-badge&logo=google-gemini&logoColor=white)](https://github.com/google/gemini-cli)
[![Tech Stack: Next.js](https://img.shields.io/badge/Next.js-15+-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![UI: Tailwind](https://img.shields.io/badge/UI-Tailwind_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[![Live App](https://img.shields.io/badge/Live_App-Click_Here_to_Explore-blue?style=for-the-badge&logo=vercel)](https://ayush-mandowara.vercel.app/)

**CEO** is a high-fidelity, terminal-themed portfolio built with Next.js and Framer Motion. It features a fully interactive command-line interface that doubles as a navigation system for exploring projects, experience, and skills.

## 🎬 Showcase Gallery
| 🏠 Terminal Interface | 📊 Skills Overview |
| :---: | :---: |
| ![Terminal](screenshots/readme-screens/portfolio-welcome-terminal.png) | ![Skills](screenshots/readme-screens/portfolio-skills-overview.png) |

## 📊 Repo Health: 95 / 100 (Pristine)
This project follows modern frontend standards and has exhaustive E2E coverage.

| Category | Item | Status | Score |
| :--- | :--- | :--- | :--- |
| **Documentation** | README & LICENSE | ✅ Updated | 15 / 15 |
| **Security** | Secret Scan & .gitignore | ✅ Secure | 15 / 15 |
| **Automation** | Playwright E2E & Vite | ✅ Working | 20 / 20 |
| **Showcase** | High-res UI Screenshots | ✅ Verified | 20 / 20 |
| **Distribution** | Vercel Auto-Deploy | ✅ Active | 25 / 30 |

## 🏗 Architecture
The portfolio uses a server-side rendered Next.js architecture with a client-side state machine for terminal interactions.

```mermaid
graph TD
    A[User] --> B[Next.js App Router]
    B --> C[Terminal Controller]
    C --> D[Command Parser]
    D --> E[Navigation State]
    E --> F[Experience/Projects Pages]
    B --> G[Framer Motion Animations]
    B --> H[Tailwind 4 Styling]
```

### Core Components
- **Terminal Controller (`components/`)**: Manages the input/output buffer and command execution logic.
- **Command Parser**: Distills natural language inputs into navigation triggers or informational outputs.
- **Content Layer (`app/`)**: Modular pages for Experience, Projects, and Accomplishments, optimized for SEO.
- **Automation Hub (`e2e/`)**: Comprehensive Playwright test suite for validating navigation and terminal responsiveness.

## ⌨️ Terminal Commands

- `help` - Show available commands
- `about` - Navigate to about page
- `experience` - Navigate to experience page
- `projects` - Navigate to projects page
- `accomplishments` - Navigate to accomplishments page
- `shelf` - Navigate to shelf page
- `skills` / `core skills` / `stack` - View core skills
- `cat skills.json` - Navigate to /about#skills
- `cd <dir>` - Change directory navigation

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # Lint check
npm run test:e2e  # Run E2E tests
```

## Screenshots

### Welcome Card
![Welcome Card](screenshots/readme-screens/portfolio-welcome-card.png)

### Terminal Commands
![Terminal Commands](screenshots/readme-screens/portfolio-terminal-commands.png)

### Terminal (Home)
![Terminal](screenshots/readme-screens/portfolio-welcome-terminal.png)

### About Page
![About](screenshots/readme-screens/portfolio-skills-overview.png)

### Experience Page
![Experience](screenshots/readme-screens/portfolio-terminal-fun-apps.png)

### Projects Page
![Projects](screenshots/readme-screens/portfolio-projects.png)

### Accomplishments Page
![Accomplishments](screenshots/readme-screens/portfolio-accomplishments.png)

### Shelf Page
![Shelf](screenshots/readme-screens/portfolio-shelf.png)

---

## Deploy

Deployed on Vercel - push to main and it auto-deploys.
