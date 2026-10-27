# Jack — 3D Creator

Portfolio landing page built with React 18, TypeScript, Tailwind CSS, Framer Motion and Vite.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview
```

## Structure

```
index.html                  Kanit font link, page title
src/index.css               global reset, #0C0C0C base, .hero-heading gradient
src/App.tsx                 section order
src/components/
  FadeIn.tsx                whileInView fade/slide wrapper (motion.create)
  Magnet.tsx                mouse-following magnetic transform
  AnimatedText.tsx          per-character scroll-driven opacity reveal
  ContactButton.tsx         gradient pill CTA
  LiveProjectButton.tsx     ghost outline pill
src/sections/
  HeroSection.tsx           navbar, gradient headline, magnetic portrait
  MarqueeSection.tsx        two scroll-driven image rows
  AboutSection.tsx          corner 3D decorations + animated paragraph
  ServicesSection.tsx       white panel, 5 numbered services
  ProjectsSection.tsx       sticky stacking cards with scale-down
src/data/
  marquee.ts                21 GIF URLs, split into rows of 11 / 10
  content.ts                services + project data
```

## Notes

- All images are hot-linked from the original external hosts (motionsites.ai,
  figma.site, images.higgs.ai). Download them into `public/` before going live so
  the page does not depend on third-party hosts.
- Nav links, the contact CTA and the "Live Project" buttons point at placeholder
  anchors — wire up `href` values in `HeroSection.tsx` and `src/data/content.ts`.
- `lucide-react` is installed per the spec but no icon is currently used.
