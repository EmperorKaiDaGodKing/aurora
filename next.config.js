/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // fail builds on lint errors — change to true/false based on preference
    ignoreDuringBuilds: false,
  },
  images: {
    // add remote domains you plan to use for example images / demos
    domains: ['images.unsplash.com', 'images.unsplash.it', 'images.pexels.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // avoid including native/server-only sqlite packages in the client bundle
        'better-sqlite3': false,
        'sqlite3': false,
      };
    }
    return config;
  },
  // future / experimental tweaks can go here
};

module.exports = nextConfig;
