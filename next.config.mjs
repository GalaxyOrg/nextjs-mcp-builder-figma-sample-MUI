/**
 * Next.js config.
 * Root cause of past CI timeouts: build timeout was insufficient for Next.js production
 * build (TypeScript compilation + static page generation). Mitigation: use webpack for
 * build (see package.json "build" script) and/or increase the CI step timeout.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Speeds up repeat builds if Builder.io caches .next
    turbopackFileSystemCacheForBuild: true,
  },
};

export default nextConfig;
