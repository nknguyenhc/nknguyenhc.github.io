# nknguyenhc.github.io

React + TypeScript website built with Vite. Use Node.js 22.22.2+ or 24.15+ (Node 24 recommended).

## Development

```sh
npm ci
npm start
```

Vite serves the site at `http://localhost:5173`. `npm run dev` is an alias for `npm start`.

- `npm run build` type-checks the app and creates the production site in `dist/`.
- `npm run preview` serves the production build locally.
- `npm test` runs the Vitest tests once; `npm run test:watch` watches for changes.
- `npm run typecheck` checks TypeScript without building.
- `npm run deploy` builds, creates a `404.html` fallback for client-side routes, and publishes `dist/` to GitHub Pages with the `nknguyenhc.net` custom domain.

Public files live in `public/` and are referenced using `import.meta.env.BASE_URL` in app code. The HTML entry point is the root `index.html`.

## Tic-tac-toe engine

The generated engine is ignored by Git and must be present before building:

Additional setup steps:

1. Download `bytecoderclasses.js` file from the latest release from [nknguyenhc/ultimate-tictactoe/releases](https://github.com/nknguyenhc/ultimate-tictactoe/releases).
2. Copy the file to the folder `src/external` (create it if necessary).
3. In the file, mark `bytecoder` as an export variable.
4. At the top of the file, add the following line:

```js
/* eslint-disable */
```
