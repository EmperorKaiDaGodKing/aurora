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
  // future / experimental tweaks can go here
};

module.exports = nextConfig;
