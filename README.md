# Madone SLR 7 Gen 7 - Nuxt 3 Project

A Nuxt 3 project showcasing the Madone SLR 7 Gen 7 bicycle.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Prerequisites

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Ensure proper permissions**:
   - The workflow automatically sets the required permissions

### How it works

- **Automatic deployment**: Every push to the `main` branch triggers a deployment
- **Static generation**: Uses `npm run generate` to create static files
- **Base URL**: Automatically configured for your repository name

### Troubleshooting

If GitHub Pages is not working:

1. **Check Actions tab**: Look for failed workflow runs
2. **Verify repository name**: Ensure the base URL matches your repository name exactly
3. **Check branch name**: Make sure you're pushing to `main` (or update the workflow if using a different branch)
4. **Clear cache**: The workflow includes caching - if issues persist, manually clear the cache

### Manual deployment

If you need to deploy manually:

```bash
npm run generate
# The dist folder will contain your static site
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
