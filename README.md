# Solvia — Landing page

The public marketing site of **Solvia**, a multi-tenant SaaS for credit management and collections for small and medium businesses. It explains the product, shows the plans and lets visitors **request access**. Solvia uses managed onboarding: the Solvia team reviews each request and creates the business account.

It is a one-page site built with React 19, TypeScript, Vite 7 and TailwindCSS 4 (plus `libphonenumber-js` and `country-flag-icons` for the phone field). It has no user session and no service worker, and it makes one API call: it posts the access request form.

---

## Features

- **Sections:** `Navbar`, `Hero`, `ProblemSolution`, `Features`, `HowItWorks`, `MeetSoli` (the owl mascot), `Pricing`, `Faq`, `FinalCta` and `Footer`, with in-page anchors (`#features`, `#how-it-works`, `#pricing`, `#faq`).
- **Pricing:** the `free`, `starter` and `pro` plans, with their reference prices (PEN per month) and limits, from `src/sections/plans.ts`. These are display values only.
- **"Solicitar acceso" form:** a modal (`AccessRequestProvider`) that any call to action can open, with fields for business name, contact name, email, phone, industry (optional), plan of interest (optional) and message (optional).
  - It posts to `POST /api/public/access-requests`. The API has no plan field, so a chosen plan is prepended to the message as `Plan de interés: <Plan>`, which the backoffice reads back when converting the request.
  - The phone field is the kit's `PhoneInput`: a country picker with SVG flags, Peru (+51) by default and frequent countries first, formatted as you type and sent as E.164. The form checks it with `isValidPhone` before submitting.
  - It validates on the client first and shows translated server errors (for example `TOO_MANY_REQUESTS`).
  - It includes a hidden **honeypot** field, `website`. People never fill it in; when a bot does, the API answers with a fake success and stores nothing.
  - The API allows **5 requests per hour per IP**. A second request for an email that already has a pending one is accepted but not duplicated.
- **Deep links:** `#solicitar-acceso` opens the form on load or on hash change, and `#solicitar-acceso-<plan>` (`free`, `starter`, `pro`) also preselects a plan. The web app's "Solicita acceso" link uses the first one. Closing the modal removes the hash without adding a history entry.
- **"Iniciar sesión"** buttons open the web app's sign-in page (`${VITE_APP_URL}/login`).
- Spanish (default) and English, a light, dark or system theme, responsive, and smooth anchor scrolling only when motion is welcome.

## Requirements

- **Node.js 22** and npm.
- The **Solvia API** running (by default on `http://localhost:4000`) only if you want to submit the access request form. The rest of the site works without it.

## Quick start

```bash
npm install
cp .env.example .env
npm run dev          # http://localhost:5174
```

The dev server listens on port **5174** (`host: true`) and proxies `/api` to `VITE_PROXY_TARGET`.

## Environment variables

Vite inlines `VITE_*` values **at build time**.

| Variable            | Default                 | Read by                            | Description                                                                         |
| ------------------- | ----------------------- | ---------------------------------- | ----------------------------------------------------------------------------------- |
| `VITE_APP_URL`      | `http://localhost:5173` | `src/lib/config.ts`                | Base URL of the web app; the "Iniciar sesión" buttons go to `${VITE_APP_URL}/login` |
| `VITE_CURRENCY`     | `PEN`                   | `src/ui/i18n/I18nProvider.tsx`     | ISO 4217 currency used to format prices                                             |
| `VITE_API_URL`      | `/api`                  | `src/ui/lib/http.ts`               | Base URL of the API the form posts to. Keep `/api` to go through the proxy          |
| `VITE_PROXY_TARGET` | `http://localhost:4000` | `vite.config.ts` (dev server only) | Where the dev server proxies `/api`                                                 |

## Scripts

| Script                                    | What it does                                                 |
| ----------------------------------------- | ------------------------------------------------------------ |
| `npm run dev`                             | Vite dev server with HMR on port 5174                        |
| `npm run build`                           | Type-check (`tsc -b`) and build to `dist/`                   |
| `npm run preview`                         | Serve the production build locally                           |
| `npm run typecheck`                       | `tsc -b --noEmit` (also checks that `en.ts` matches `es.ts`) |
| `npm run lint` / `npm run lint:fix`       | ESLint (`eslint.config.js`)                                  |
| `npm run format` / `npm run format:check` | Prettier (`.prettierrc`)                                     |

## Project structure

```
.
├── index.html               Theme pre-paint script, meta description
├── vite.config.ts           React, Tailwind, @ alias, dev proxy (/api), vendor chunk
├── Dockerfile               Multi-stage build: Node 22 → nginx 1.27
├── nginx.conf.template      Static files + SPA fallback + proxy of /api (and /files) to ${API_UPSTREAM}
├── public/favicon.svg
└── src/
    ├── main.tsx             ThemeProvider → I18nProvider → AccessRequestProvider → BrowserRouter → App
    ├── App.tsx              The one-page layout (sections in order)
    ├── ui/                  This project's copy of the Solvia UI kit (landing subset), imported as '@/ui'
    ├── access/              Request access: provider (modal + deep link), context (useAccessRequest,
    │                        parseAccessRequestHash), AccessRequestForm, RequestAccessButton, IndustrySelect
    ├── sections/            Hero, ProblemSolution, Features, HowItWorks, MeetSoli, Pricing, plans.ts, Faq, FinalCta
    ├── components/          Navbar, Footer, Section, SectionHeading, GlassCard, DashboardMock, CashFlowChart,
    │                        Accordion, LinkButton, ctaStyles, AuroraBackground, Drift, …
    ├── lib/                 api.ts (public API client, no tokens), config.ts (URLs, section ids), useNavLinks.ts
    └── i18n/                I18nProvider, useI18n, messages/es.ts (source of truth) and en.ts
```

### The UI kit (`src/ui`)

`src/ui` is a **subset** of the Solvia UI kit used by the web app and the backoffice. It includes the basic components (`Button`, `IconButton`, `Card`, `Badge`, `Alert`, `Field`, `Modal`, `Popover`, `MenuItems`, `FeedbackProvider`, `PreferencesControls`, `Reveal`, `cx`), the brand (logo and Soli), the theme, the i18n core, the API client and `styles.css`.

It also has the phone field, the same files as the web app:

- `components/PhoneInput.tsx` and `components/phoneCountries.ts`. They use `libphonenumber-js/min` and `country-flag-icons`, with flags loaded per country through `import.meta.glob(..., { query: '?no-inline' })`, and country names from `Intl.DisplayNames`.
- The landing exports `PhoneInput` and `isValidPhone` only.

`Popover` renders inside the nearest open `<dialog>`, so the country picker works inside the request modal. The modal entrance animation uses `backwards` fill.

It leaves out `DataTable`, `KpiCard`, `Page`, the charts, `useUrlState`, the password components, the team-user components and the PWA helpers. Its `index.ts` and `i18n/messages.ts` are trimmed to match. The landing keeps its own `IndustrySelect` in `src/access/`, which reads the landing's dictionaries.

- Import it only as `'@/ui'`. The `@` alias maps to `src/` in `vite.config.ts` and `tsconfig.app.json`.
- It is a copy, not a shared package. Design-token, brand or component changes made in the other frontends must be copied here by hand when the landing should follow them.

## Talking to the Solvia API

The only call is `POST /api/public/access-requests` (public, no token). The client in `src/lib/api.ts` has an empty token store.

- **Development:** the Vite dev server proxies `/api` to `VITE_PROXY_TARGET`.
- **Docker / production:** nginx proxies `/api/` (and `/files/`) to `API_UPSTREAM` (default `http://backend:4000`). Use the API's origin without a path.
- The API's rate limit is per client IP. Behind nginx, the API reads it from `X-Forwarded-For` (it trusts one proxy hop), so keep the proxy headers in `nginx.conf.template`.

## Docker

| Build arg          | Default                 | Used by this site                                 |
| ------------------ | ----------------------- | ------------------------------------------------- |
| `VITE_APP_URL`     | `http://localhost:8080` | yes ("Iniciar sesión" buttons)                    |
| `VITE_API_URL`     | `/api`                  | yes (access request form)                         |
| `VITE_CURRENCY`    | `PEN`                   | yes                                               |
| `VITE_LANDING_URL` | `http://localhost:8081` | no (declared for parity with the other frontends) |

| Runtime env    | Default               | Description                 |
| -------------- | --------------------- | --------------------------- |
| `API_UPSTREAM` | `http://backend:4000` | Where nginx proxies `/api/` |

```bash
docker build -t solvia-landing --build-arg VITE_APP_URL=https://app.solvia.example.com .
docker run --rm -p 8081:80 -e API_UPSTREAM=http://host.docker.internal:4000 solvia-landing
# → http://localhost:8081
```

If `API_UPSTREAM` can't be reached, the page still loads and only the form's submission fails.

## i18n and theming

- Spanish (default) and English, in `src/i18n/messages/es.ts` (source of truth) and `en.ts`. `src/ui/i18n/messages.ts` holds the kit strings and the API error codes. The language and theme selectors are in the navbar and the footer (`PreferencesControls`).
- Light, dark or system theme (`solvia.theme`, applied as `data-theme` by the pre-paint script in `index.html`). Design tokens are in `src/ui/styles.css`.
- The deep-link hash (`solicitar-acceso`) is in Spanish on purpose and is the same in both languages.

## CI

`.github/workflows/ci.yml` runs on pushes to `main` and on pull requests: Node 22, `npm ci`, `npm run lint`, `npm run format:check` and `npm run build`, which also type-checks with `tsc -b`. Run the same commands locally before pushing.

## Running it with the whole platform

The `solvia-backend` repository has the Docker Compose files for the full system. Clone the four repositories (`solvia-backend`, `solvia-app`, `solvia-admin`, `solvia-landing`) side by side, then run this from `solvia-backend`:

```bash
docker compose -f docker-compose.yml -f docker-compose.full.yml up -d --build
```

That builds this repository's image from `${SOLVIA_REPOS_DIR:-..}/<repo>`, with the same build args and `API_UPSTREAM=http://backend:4000`. To run only the API and database for local development, use `docker compose up -d --build` in `solvia-backend` and `npm run dev` here.

## Related projects

- **`solvia-backend`** (Solvia API): stores the access requests (`POST /api/public/access-requests`, rate-limited, honeypot-protected).
- **`solvia-admin`** (backoffice): where the Solvia team reviews the requests ("Solicitudes") and converts them into businesses with a first admin and a temporary password.
- **`solvia-app`** (web app): where those businesses sign in. Its sign-in page links back here to request access.
