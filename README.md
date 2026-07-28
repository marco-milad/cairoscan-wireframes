# Cairo Scan — Wireframe System

Mid-fidelity, Arabic-first (RTL) wireframe prototypes for the Cairo Scan digital
platform, built as a self-contained static site and a **review environment** for
stakeholders.

- **RFP:** RLCAIRO-WEB-2026-01
- **Fidelity:** Mid-fidelity · neutral **grayscale** (official brand red `#BA262E`
  is intentionally postponed to the Hi-Fi phase, per Proposal §5.3).
- **Design system source:** Proposal §5.3 — *Design System — Cairo Scan Official Brand*
  (layout, spacing, typography hierarchy, components, grid, principles).

## Structure

```
.
├── index.html              # Review Dashboard (entry point, auto-generated from manifest)
├── feedback.html           # "Give Feedback" page (links to a Google Form)
├── README.md
├── styles/
│   ├── ds.css              # THE design system — single source of truth for every screen
│   └── review.css          # Review Mode annotation layer
├── js/
│   ├── manifest.js         # List of all screens + status → drives the dashboard
│   ├── dashboard.js        # Renders the dashboard from the manifest
│   └── review.js           # Review Mode toolbar + annotations (shared by every page)
├── assets/                 # Images / logos (added later)
├── pages/
│   ├── public/             # Public website screens (home.html is ready)
│   ├── booking/            # 7-step booking flow
│   ├── patient-portal/
│   ├── physician-portal/
│   ├── corporate-portal/
│   └── admin/
└── legacy/                 # Old low-fidelity kit (kept for reference until approved for removal)
```

## Run locally

Open `index.html` in a browser (no build step). For clean relative paths you can
also serve it: `npx serve .` or `python -m http.server`.

## Add a new screen

1. Create the file under `pages/<area>/<name>.html`.
2. In `<head>`, link the shared system:
   ```html
   <link rel="stylesheet" href="../../styles/ds.css">
   <link rel="stylesheet" href="../../styles/review.css">
   ```
3. Add Review-Mode annotations on each `<section>`:
   `data-rev="N · Section name" data-rfp="§4.x" data-comp="Component"`.
4. Before `</body>`: `<script src="../../js/review.js"></script>`.
5. Flip the screen's `status` to `"ready"` in `js/manifest.js` → it appears on the
   dashboard automatically.

Every screen inherits the same grid, typography hierarchy, components, forms,
navigation, spacing, cards, and buttons from `styles/ds.css`.

## Review Mode

Each wireframe has a floating toolbar (bottom-start):
- **وضع المراجعة (Review Mode):** shows section numbers, related RFP section, and
  component names. Off = the page looks like a clean website.
- **أدلة التخطيط (Layout Guides):** 12-column overlay (only inside Review Mode).
- Quick links back to the **Dashboard** and to **Feedback**.

State persists across pages via `localStorage`.

## Deployment (Vercel)

Static site — no build. On Vercel: Framework Preset = **Other**, Build Command = *(none)*,
Output Directory = `.`. Auto-deploys on every push to `main`.
