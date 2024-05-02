/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://archer-web.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://archer-web.vercel.app/blog/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
