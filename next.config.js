/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    images: {
        allowFutureImage: true
    }
  },
};

module.exports = nextConfig;
