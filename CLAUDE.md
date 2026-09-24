# solvia-landing

Public marketing page of Solvia: hero with product mock, features, how it works, Bowl, pricing,
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

- `src/sections/` — page sections in order (Hero, TrustStrip, ProblemSolution, `product/Product`
  (one row per area: Ventas, Inventario, Compras, Cobranza, Dashboard, Reportes, each with an
  illustrative screen from `product/mocks.tsx` and whether it is included or an add-on),
  HowItWorks, Pricing + `plans.ts`, Faq, FinalCta). The header links follow this order.
- Pricing is modular and the plan builder is the only place with prices: `plans.ts`
  (`PRICED_MODULES` with what each one includes, `ALLOWANCES` by number of modules — discount,
  automatic WhatsApp messages, users, customers —, message packs, `quote()`, free plan,
  yearly billing). Generous in what costs little (customers, users, manual WhatsApp reminders from
  the owner phone, unlimited) and measured in what costs money (automatic messages via Meta). The backoffice and
  the app show the same module prices (solvia-admin `MODULE_PRICES`, solvia-app `ModulesOffer`).
- `src/access/` — request access modal: context/provider (open with an optional plan and/or modules,
  hash deep link `#solicitar-acceso-starter` / `#solicitar-acceso-sales`; checked modules are
  sent as `modules`), form with client validation mirroring the backend, industry select.
- `src/components/` — Navbar, Footer, layout helpers (Container, Section, SectionHeading),
  visual pieces (DashboardMock, CashFlowChart, AuroraBackground, Drift, GlassCard).
- `src/ui/` — a **subset** of the Solvia UI kit imported as `@/ui` (Button, Modal, Form, Popover,
  PhoneInput, Reveal, brand, theme, i18n, API client). Keep it in sync with solvia-app when you
  fix a shared file.

## Rules

- Positioning: Solvia puts the whole small business in order (sell, collect, track stock) from
  the phone. Collections is the core, included in every plan; Ventas and Inventario are paid
  add-on modules. Keep hero, sections and FAQ consistent with that.

- All text through i18n (`src/i18n/messages/es.ts` source of truth, `en.ts` mirrors it). Only
  claim features the product really has; prices in `sections/plans.ts` are reference prices.
- One separator per descriptive line (no chains of "·"/"—").
- Semantic color tokens, `<Reveal>` for scroll animations (respects reduced motion).
- Before committing: `npm run lint && npm run build`, check desktop + phone width, light/dark.

## Feedback

`FeedbackProvider` wraps the app (see `main.tsx`). Request errors are shown as toasts via
`useErrorToast(error, title)` (the access-request form does this), never as inline alert boxes.
