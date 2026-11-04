# Alan's Website

[alantao.com](https://alantao.com)

My personal website, built with [Astro](https://astro.build).

## Running Locally

Requires [Node.js](https://nodejs.org) 24.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:4321.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — build the production site into `dist/`
- `npm run preview` — preview the production build locally

## Project Structure

```
├── public/              # Static assets (images, favicon, CNAME)
├── src/
│   ├── components/      # Navbar, Footer
│   ├── layouts/         # Layout.astro (shared page layout)
│   └── pages/           # index.astro, 404.astro
└── .github/workflows/
    └── deploy.yml       # Deployment workflow
```

## Deployment

Every push to `main` triggers a GitHub Actions workflow that builds the site and copies the `dist/` output to the server via SCP.
