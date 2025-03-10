/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Needed for Docker deployment
  swcMinify: true,
  images: {
    domains: [
      // Add domains for remote images if needed
    ],
  },
  // Optionally enable experimental features
  // experimental: {
  //   appDir: true,
  // },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL + '/:path*' // Proxy to Backend
      }
    ];
  }
};

module.exports = nextConfig; 