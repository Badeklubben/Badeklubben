/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/member/:slug',
          destination: '/member/:slug/meg',
          permanent: true,
        },
        {
          source: '/projects/:slug',
          destination: '/member/:slug/meg',
          permanent: true,
        },
        {
          source: '/projects',
          destination: '/',
          permanent: true,
        },
      ];
    },
  }

module.exports = nextConfig;
