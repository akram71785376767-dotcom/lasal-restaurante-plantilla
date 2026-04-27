# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # TypeScript compile + Vite build
npm run lint       # ESLint
npm run typecheck  # Type-check without emitting
npm run preview    # Preview production build
```

## Architecture

Minimal Vite + React + TypeScript starter. Entry point is `src/main.tsx` → `src/App.tsx`. Styling via Tailwind CSS (configured in `tailwind.config.js`, imported in `src/index.css`).

**Key dependencies:**
- `@supabase/supabase-js` — database/auth client (env vars in `.env`)
- `lucide-react` — icon library (excluded from Vite's `optimizeDeps`)
- Tailwind CSS with PostCSS/Autoprefixer

**TypeScript config** splits into `tsconfig.app.json` (src files, strict mode) and `tsconfig.node.json` (vite config).
