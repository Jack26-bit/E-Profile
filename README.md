# Neeraj Kiran Janakula — Portfolio

A world-class personal portfolio for Neeraj Kiran Janakula — AI/ML Engineer, Full-Stack Developer, Creative Technologist.

Built with **React + FastAPI + MongoDB** on the Emergent template. The portfolio itself is **fully static** — no API calls — so for local dev you only need the frontend running, but full-stack instructions are included for completeness.

- Stack: React 19 · TailwindCSS · shadcn/ui · FastAPI · MongoDB · framer-motion · Google Fonts (Cormorant Garamond / Manrope / JetBrains Mono)
- Live aesthetic: dark editorial, vermillion accent (`#FF3B30`), custom cursor, SVG grain overlay
- Sections: Hero · About · Skills · Projects · Experience (+ Education + Recognition) · Contact · Footer
- Resume: served as a static asset at `/Neeraj-Kiran-Janakula-Resume.pdf`

---

## 1. Prerequisites

Install these once on your laptop:

| Tool          | Version           | macOS                          | Linux (Debian/Ubuntu)                   | Windows                       |
| ------------- | ----------------- | ------------------------------ | --------------------------------------- | ----------------------------- |
| **Node.js**   | 18 LTS or 20 LTS  | `brew install node@20`         | `nvm install 20 && nvm use 20`          | nodejs.org installer or `nvm` |
| **Yarn**      | 1.22+ (classic)   | `corepack enable && corepack prepare yarn@1.22.22 --activate` | same as macOS | same as macOS |
| **Python**    | 3.10 – 3.12       | `brew install python@3.11`     | `sudo apt install python3 python3-venv` | python.org installer          |
| **MongoDB**   | 6.0+ (only for backend) | `brew install mongodb-community` | follow mongodb.com/docs/manual/installation | mongodb.com installer    |
| **Git**       | any               | `brew install git`             | `sudo apt install git`                  | git-scm.com                   |

> The portfolio is static. **If you only want to view the site locally, you can skip Python + MongoDB entirely** and follow “Path A — Frontend only”.

---

## 2. Clone and configure

```bash
git clone <your-repo-url> portfolio
cd portfolio
```

Repo layout:

```
/app
├── frontend/   # React app (port 3000)
├── backend/    # FastAPI app (port 8001) — optional for this static portfolio
└── README.md
```

---

## 3. Path A — Frontend only (recommended for local viewing)

This is all you need to render the portfolio on `http://localhost:3000`.

```bash
cd frontend
```

### 3.1 Point the frontend at localhost

Open `frontend/.env` and **temporarily** change the backend URL for local dev:

```env
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=3000
ENABLE_HEALTH_CHECK=false
```

> The portfolio does not call any APIs, so the value doesn’t matter for what you see on screen, but `REACT_APP_BACKEND_URL` must be set or the build will fail at runtime.

### 3.2 Install dependencies (yarn only — never npm)

```bash
yarn install
```

### 3.3 Start the dev server

```bash
yarn start
```

Open **http://localhost:3000** in your browser. Hot reload is enabled — edit any file under `frontend/src` and the page refreshes automatically.

### 3.4 Production build (optional)

```bash
yarn build
npx serve -s build -l 3000
```

---

## 4. Path B — Full stack (frontend + backend + MongoDB)

Only needed if you want to extend this portfolio with a backend (contact form, AI chatbot, analytics, etc.).

### 4.1 Start MongoDB locally

macOS (Homebrew):

```bash
brew services start mongodb-community
```

Linux:

```bash
sudo systemctl start mongod
```

Confirm it’s alive: `mongosh` should connect on `mongodb://localhost:27017`.

### 4.2 Backend — set up Python venv and install

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate         # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

`backend/.env` should already contain:

```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
```

If your local Mongo runs elsewhere, change `MONGO_URL` accordingly.

### 4.3 Run the FastAPI server

From inside `backend/` with the venv active:

```bash
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Sanity check: `curl http://localhost:8001/api/` should return a JSON response.

### 4.4 Frontend (with the backend running)

In a **second terminal**:

```bash
cd frontend
yarn install
yarn start
```

Ensure `frontend/.env` has `REACT_APP_BACKEND_URL=http://localhost:8001` so the React app talks to your local backend.

---

## 5. Common commands

| Action                     | Command                                                 |
| -------------------------- | ------------------------------------------------------- |
| Start frontend dev         | `cd frontend && yarn start`                             |
| Build frontend for prod    | `cd frontend && yarn build`                             |
| Start backend dev          | `cd backend && uvicorn server:app --reload --port 8001` |
| Lint frontend              | `cd frontend && yarn lint`                              |
| Test PDF is served         | `curl -I http://localhost:3000/Neeraj-Kiran-Janakula-Resume.pdf` |

---

## 6. Editing content

All portfolio data lives in **one file**:

```
frontend/src/lib/portfolioData.js
```

- `PROFILE` — name, roles, bio, email, phone, GitHub, LinkedIn, resume path
- `SKILLS_BAND_1` / `SKILLS_BAND_2` — marquee items
- `SKILL_PILLARS` — the 4 capability cards
- `PROJECTS` — array of 6 project cards (title, image, stack, GitHub link)
- `EXPERIENCE` — timeline roles
- `EDUCATION` — degree list
- `ACHIEVEMENTS` — recognition list
- `CERTIFICATIONS` — extras

To swap the resume PDF, replace `frontend/public/Neeraj-Kiran-Janakula-Resume.pdf` with your new file (keep the same filename) — or change `PROFILE.resume` to point at a new filename you’ve added under `frontend/public/`.

To tweak the look, edit:

- `frontend/src/index.css` — CSS variables (`--bg`, `--ink`, `--accent`), grain overlay, cursor, marquee keyframes
- `frontend/tailwind.config.js` — Tailwind theme
- Components in `frontend/src/components/portfolio/`

---

## 7. Troubleshooting

| Symptom                                     | Fix                                                                  |
| ------------------------------------------- | -------------------------------------------------------------------- |
| `yarn: command not found`                   | `corepack enable && corepack prepare yarn@1.22.22 --activate`        |
| Blank page, “process is not defined”        | Confirm `frontend/.env` exists and has `REACT_APP_BACKEND_URL=…`     |
| Custom cursor invisible                     | Expected on touch devices; CSS hides it. On desktop, ensure hover is supported. |
| Fonts look like Times New Roman             | Google Fonts blocked by network/firewall — connect to the internet or self-host the fonts in `frontend/public/`. |
| Backend fails: `ServerSelectionTimeoutError` | MongoDB isn’t running — start it (see §4.1).                         |
| Port 3000 or 8001 already in use            | `yarn start --port 3001` or `uvicorn server:app --port 8002`         |
| “npm warning” / lockfile churn              | **Use yarn, never npm.** Delete `package-lock.json` if it appears.   |

---

## 8. Deploying

The portfolio is a static React SPA. After `yarn build` you can drop the `frontend/build/` folder on:

- **Vercel** (drag-and-drop the build, or connect the repo and set the build command `yarn build` and output dir `build/`)
- **Netlify** (same idea — publish directory `frontend/build`)
- **Cloudflare Pages** (build command `yarn build`, output `frontend/build`)
- **GitHub Pages** (push `frontend/build/` to a `gh-pages` branch)

If you ever wire the backend, deploy FastAPI to Render / Fly.io / Railway with a managed MongoDB (Atlas) and set `MONGO_URL` + `CORS_ORIGINS` accordingly.

---

## 9. Contact

- **Email** — neerajkiran26@gmail.com
- **GitHub** — https://github.com/Jack26-bit
- **LinkedIn** — https://www.linkedin.com/in/neeraj-kiran-janakula-904643384/

Made in Bangalore. _Tune the string, then strike._
