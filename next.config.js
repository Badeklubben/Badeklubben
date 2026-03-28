/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        },
      ],
    },
    typescript: {
      // Type checking is handled by CI (tsc --noEmit).
      ignoreBuildErrors: true,
    },
    eslint: {
      // Linting is handled by CI (npm run lint).
      ignoreDuringBuilds: true,
    },
  }

module.exports = nextConfig;
