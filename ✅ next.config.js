/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  devIndicators: {
    buildActivity: false,
  },

  images: {
    domains: ["fakestoreapi.com"],
  },
};

module.exports = nextConfig;
