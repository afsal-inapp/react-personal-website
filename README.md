# Mohammed Afsal — Personal Site

Personal brand, engineering portfolio, and product ecosystem for Mohammed Afsal, AI Forward-Deployed Engineer.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui (Radix), Lucide, Framer Motion, and React Router.

## Development

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # TypeScript
npm run lint       # ESLint
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build
```

## Editing content

All copy lives in `src/data/` — no component changes needed for routine edits.

| File | What it controls |
| --- | --- |
| `profile.ts` | Name, hero, about, contact, social links, photo, availability pill, footer, default SEO |
| `projects.ts` | Selected projects. Add `links` only when a real public URL exists |
| `experience.ts` | Experience timeline |
| `skills.ts` | "What I do" capability cards and the technical stack |
| `products.ts` | Products, their pages, colours, statuses, and the enquiry form |
| `navigation.ts` | Home-page navigation sections |

**Availability pill** — set `profile.availability.enabled` to `false` to hide it, or change `status` (`available` / `limited` / `unavailable`) and `label`.

**Product status** — each product has a `status` of `building`, `live`, or `experimental`. Each feature has its own `status` of `available`, `in-development`, or `planned`; the feature grid groups and labels them so planned work is never presented as shipped. Only mark something `live` / `available` when it is.

**Adding a product** — append an entry to `products` in `products.ts`. Its page is generated at `/products/<slug>` automatically. `visual` selects the card art and mockups (`voice`, `reel`, `finance`). Add a `form` block to show the integration enquiry form instead of plain CTA buttons.

**Photo** — replace `public/images/afsal.png` (and the optimised `afsal.webp` / `afsal-640.webp`, which are served to modern browsers first). A 4:5 portrait crop works best.

## Enquiry form

By default the integration form opens the visitor's email app with the enquiry pre-filled. To receive submissions directly, set `VITE_FORM_ENDPOINT` to any endpoint that accepts a JSON `POST` (Formspree, Basin, a serverless function, etc.). See `.env.example`.

## Deploying to Vercel

Import the repository in Vercel — the Vite preset is detected automatically and `vercel.json` handles SPA routing and caching. Open Graph URLs use the Vercel production URL by default; set `VITE_SITE_URL` to use a custom domain.
# react-personal-website
