# T-Study Clone — ThinhNH39 Learning Hub

A complete, fully functional local clone of [https://tstudy.vercel.app](https://tstudy.vercel.app), including all course routes, questions, interactive quiz engine, explanations, themes (Dark/Light), and ranking.

## Quick Start

You can run this project immediately using standard Node.js (no `npm install` needed):

```bash
# Using Node directly:
node server.js

# Or using npm:
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Features Cloned

- **Homepage & Course Library (`/`)**: All 6 certification courses, search bar, provider filters (Microsoft, Claude, GitHub), and Grid/List views.
- **Top Contributor Leaderboard (`/ranking`)**: Community contributor profiles and avatars.
- **Login Portal (`/login`)**: Sign-in interface.
- **All Interactive Study Pages (`/study/[course-id]`)**:
  - `ccar-f`: Claude Certified Architect – Foundations (162 questions)
  - `ai-103`: Azure AI Apps and Agents Developer Associate (175 questions)
  - `ab-100`: Agentic AI Business Solutions Architect (111 questions)
  - `ab-730`: AI Business Professional (100 questions)
  - `ab-731`: AI Transformation Leader (100 questions)
  - `gh-300`: GitHub Copilot (116 questions)
  - Full support for `?view=all` mode to review all questions and explanations simultaneously.
- **Next.js Client Routing & State**: Full RSC payloads included so in-app page transitions and local progress tracking work seamlessly.
- **Raw Question Datasets**: Extracted into clean, portable JSON files under `data/`.

## Directory Structure

```text
tstudy/
├── data/                    # Extracted raw question datasets (JSON)
│   ├── ccar-f.json          # 162 questions
│   ├── ai-103.json          # 175 questions
│   ├── ab-100.json          # 111 questions
│   ├── ab-730.json          # 100 questions
│   ├── ab-731.json          # 100 questions
│   └── gh-300.json          # 116 questions
├── branding/                # Logos and ranking avatars
├── content/course-icons/    # Badge and certification icons
├── _next/                   # Next.js bundles, styles, and font files
├── study/                   # Study route HTML and RSC files
├── ranking/                 # Ranking route HTML
├── login/                   # Login route HTML
├── index.html               # Main catalog homepage
├── server.js                # Zero-dependency local Node server
├── package.json             # NPM package scripts
└── README.md
```
