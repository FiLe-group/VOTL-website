# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Website and dashboard (WIP) for the **VOTL** Discord bot, built with [Vike](https://vike.dev/) (SSR/prerender framework for React) and Chakra UI v3. Deployed to Cloudflare via Wrangler.

## Commands

Package manager is **pnpm** (enforced via `preinstall: npx only-allow pnpm`).

- `pnpm dev` — start the Vike dev server (default port 3000, override with `PORT` env var)
- `pnpm build` — production build (`vike build`)
- `pnpm preview` — build then preview the production build
- `pnpm deploy` — build then deploy `dist/client` to Cloudflare Pages via `wrangler pages deploy`
- `pnpm typegen` — regenerate Chakra UI theme types from `theme/index.ts` (runs automatically on `pnpm install` via the `prepare` script)
- `pnpm generate-types` — regenerate `worker-configuration.d.ts` from `wrangler types` (Cloudflare bindings)

There is no configured lint or test script — verify changes with `tsc` (via your editor/IDE diagnostics) and manual testing (`pnpm dev`).

## Architecture

### Routing (Vike, file-based)

Pages live under `pages/`, using Vike's `+`-prefixed file convention. Each route directory has a `+Page.tsx` (the page component); shared behavior is layered via sibling `+`-files:

- `pages/+config.ts` — root Vike config. Sets `Layout: LayoutBase`, enables `prerender: true` and `ssr: false` (this is a client-rendered/prerendered SPA, not server-rendered per request), and wires up the `vike-react`, `vike-react-query`, and `vike-react-zustand` extensions. React Query defaults (2 min stale time, no refetch-on-focus, no retries) are set here.
- `pages/+Wrapper.tsx` — wraps every page in `ChakraProvider` using the theme system built in `theme/index.ts`.
- `pages/+Head.tsx`, `+onPageTransitionStart.ts`, `+onPageTransitionEnd.ts` — global `<head>` content and page-transition hooks.
- `pages/(main)/` — a Vike route group (parens = not part of the URL path). Its `+Layout.tsx` renders the shared `Header`/`Footer` chrome (from `layouts/main/`) around all pages in this group: `index`, `commands`, `partners`, `policies`, `privacy`, `tos`.
- `pages/_error/+Page.tsx` — custom error page.
- `layouts/LayoutBase.tsx` — outermost layout (applies to all routes regardless of group), just a max-width centering `Box`.

When adding a new route, create a new directory under `pages/(main)/<route>/+Page.tsx` to inherit the header/footer chrome, or a top-level `pages/<route>/+Page.tsx` to opt out of it.

### Commands page (`pages/(main)/commands/`)

The most complex page: fetches the bot's command list from a remote API and renders it as a searchable/filterable, localized command reference (`MainBox.tsx` orchestrates `CategoryBox`, `CommandBox`, `HelpBox`, `LanguageBox`, `LoadingBox`). Command data shape is defined in `types.ts` (`Command`, `Category`, `LanguageData`); static category/icon metadata lives in `cmd-data.tsx`.

### Server / API layer (`server/`)

Thin fetch wrapper used for calling the external bot API from the client:

- `server/core.ts` — generic `callReturn<T>()` fetch helper with typed error handling (`Options`/`ReturnOptions`, `handleError`).
- `server/routes.ts` — API route path constants (e.g. `Routes.commands`).
- `server/client-api.ts` — typed API calls built on `core.ts` (e.g. `apiCommands()`), pointed at the external origin `https://cdn.fileeditor.ovh`.

`+server.ts` at the repo root is a separate concern: it's the Hono server entry (`@vikejs/hono`) used to serve the built Vike app in non-Cloudflare Node hosting.

### State (`pages/store.ts`)

Global client state uses Zustand (`vike-react-zustand` integration) with `localStorage` persistence. Currently holds the user's selected UI `locale` (`en-GB` | `ru`, see `locales/localeType.ts`).

### Theme (`theme/`)

A full Chakra UI v3 custom theme built with `defineConfig`/`createSystem`. `theme/index.ts` is the composition root, pulling together design tokens (`theme/tokens/*`), semantic tokens (`theme/semantic-tokens/*`), component recipes (`theme/recipes/*`, aggregated in `theme/recipes.ts` and `theme/slot-recipes.ts`), text styles, motion styles, and global CSS. After editing tokens/recipes, run `pnpm typegen` so Chakra's generated types (used for prop autocomplete/validation like `variant='blueGradient'`) stay in sync.

### Environment variables

Client-exposed env vars are prefixed `PUBLIC_ENV__` (Vike convention, read via `import.meta.env.PUBLIC_ENV__*`), e.g. `PUBLIC_ENV__BOT_INVITE`, `PUBLIC_ENV__DISCORD_INVITE`. `API_ENDPOINT` is server-only. See `.env` for the full list (not committed).

### Deployment

Cloudflare Pages via Wrangler (`wrangler.jsonc`): serves the static `dist/client` output as an SPA (`not_found_handling: single-page-application`). `worker-configuration.d.ts` is generated (`pnpm generate-types`) and provides types for Cloudflare bindings — don't hand-edit it.
