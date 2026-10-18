# G3 — Supervision interface

Operator interface of the radar, built with Svelte 5, TypeScript and Vite. It talks to the [backend](../backend/) through `/api` routes. See the [G3 README](../README.md) for the full setup.

## Commands

From this folder (requires Node.js 20.19+ or 22.12+):

```bash
npm install        # install dependencies
npm run dev        # dev server on http://localhost:5173 (start the backend too)
npm run build      # production build in dist/, served by the backend
npm run check      # type checking (svelte-check + tsc)
npm run lint       # formatting (Prettier) + code quality (ESLint)
npm run lint:fix   # fix what can be fixed automatically
```

In dev mode, Vite forwards every `/api` request (WebSockets included) to the backend on port 8000 — see `vite.config.ts`.

## Layout

```
src/
  main.ts       entry point, mounts App into index.html
  App.svelte    root component
  app.css       global styles
public/         static files copied as-is (favicon…)
```
