# BoilerPlateApp

## Overview

Angular starter application with:

1. Authentication pages for login, signup, and password recovery
2. A home shell with dashboard and reports
3. Responsive Angular Material UI
4. Standalone components and lazy-loaded standalone routes
5. Zoneless change detection with signals for local component state
6. Centralized route paths in `src/app/route-paths.ts`

## Prerequisites

- Node.js `22.22.3` or newer within Node 22
- npm 10 or newer
- Chrome or Chromium for Karma unit tests
- Playwright Chromium for end-to-end tests

The required Node version is pinned in `.nvmrc` and enforced by the `engines` field in
`package.json`. With nvm installed, run:

```bash
nvm install
nvm use
```

## Install

```bash
npm install
```

Install the Playwright browser once before running end-to-end tests:

```bash
npm run e2e:install
```

## Development server

```bash
npm start
```

Open `http://localhost:4200/`. The development server reloads automatically when source files
change.

## Production build

```bash
npm run build -- --configuration production
```

Build artifacts are written to `dist/boilerplate/`.

## Validation

Run the ESLint checks:

```bash
npm run lint
```

Run the unit tests through Karma and Jasmine:

```bash
npm test
```

Run the Playwright end-to-end tests:

```bash
npm run e2e
```

## Code scaffolding

Use the Angular CLI to generate standalone application code:

```bash
npx ng generate component component-name --standalone
npx ng generate directive directive-name --standalone
```

Other supported generators include `pipe`, `service`, `class`, `guard`, `interface`, and
`enum`.
