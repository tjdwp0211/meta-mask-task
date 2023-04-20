/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: { emotion: true },
  images: {
    domains: ["via.placeholder.com"],
  },
};

module.exports = nextConfig;
