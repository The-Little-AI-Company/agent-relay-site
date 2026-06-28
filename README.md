# Agent Relay — website

Marketing and docs site for [Agent Relay](https://github.com/The-Little-AI-Company/open-work-relay):
the handoff layer that moves work between people and AI agents without losing
the source, limits, status, or receipt.

Built with [Astro](https://astro.build). Static output — deploys anywhere that
serves HTML (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build      # outputs static site to ./dist
pnpm check      # builds, then verifies sitemap.xml, robots.txt, and llms.txt
pnpm preview    # preview the production build locally
```

## Notes

- `astro.config.mjs` — set `site` to the production URL before launch.
- `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`, and
  `scripts/check-seo.mjs` use the GitHub Pages project URL. Update them
  together if `site` or `base` changes.
- Native build scripts (`esbuild`, `sharp`) are explicitly approved in
  `pnpm-workspace.yaml`. Hosted CI runners build without extra flags; if a local
  reinstall asks to purge `node_modules`, run with `CI=true`.
- This repo is public-safe: no secrets, no env files, nothing private. The site
  content is its own copy and does not depend on any private repo.

## License

MIT. See [LICENSE](LICENSE).
