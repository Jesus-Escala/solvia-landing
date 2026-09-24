# solvia-landing

Public marketing page of Solvia: hero with product mock, features, how it works, Soli, pricing,
FAQ and the **"Solicitar acceso"** (request access) form. React 19 + TypeScript + Vite 7 +
Tailwind v4. Spanish by default, English available, light/dark themes, scroll animations.

Communication with the other repositories:

- **solvia-backend**: only `POST /api/public/access-requests` (the form; honeypot field `website`,
  max 5 per hour per IP, answers `201 { ok: true }`). Dev proxy `/api` → `VITE_PROXY_TARGET`.
- **solvia-app**: plain links to its sign-in page (`VITE_APP_URL`). The app links back here with
  `#solicitar-acceso` (opens the form; `#solicitar-acceso-starter` etc. preselects a plan).
- **solvia-admin**: shows the requests sent from here. See `../CLAUDE.md` if present.

## Commands

```bash
npm run dev          # http://localhost:5174
npm run lint         # ESLint              npm run format  # Prettier
npm run typecheck    # tsc -b --noEmit     npm run build   # tsc + vite build
npm run preview
```

CI runs `npm ci`, lint, format:check, build.

## Structure

- `src/sections/` — page sections in order (Hero, ProblemSolution, Features, HowItWorks,
  MeetSoli, Pricing + `plans.ts`, Faq, FinalCta).
- `src/access/` — request access modal: context/provider (open with an optional plan, hash deep
  link), form with client validation mirroring the backend, industry select.
- `src/components/` — Navbar, Footer, layout helpers (Container, Section, SectionHeading),
  visual pieces (DashboardMock, CashFlowChart, AuroraBackground, Drift, GlassCard).
- `src/ui/` — a **subset** of the Solvia UI kit imported as `@/ui` (Button, Modal, Form, Popover,
  PhoneInput, Reveal, brand, theme, i18n, API client). Keep it in sync with solvia-app when you
  fix a shared file.

## Rules

- All text through i18n (`src/i18n/messages/es.ts` source of truth, `en.ts` mirrors it). Only
  claim features the product really has; prices in `sections/plans.ts` are reference prices.
- One separator per descriptive line (no chains of "·"/"—").
- Semantic color tokens, `<Reveal>` for scroll animations (respects reduced motion).
- Before committing: `npm run lint && npm run build`, check desktop + phone width, light/dark.

## Feedback

`FeedbackProvider` wraps the app (see `main.tsx`). Request errors are shown as toasts via
`useErrorToast(error, title)` (the access-request form does this), never as inline alert boxes.
