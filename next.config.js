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
        destination: "https://archer-web.vercel.app/",
      },
      {
        source: "/blog/:path*",
        destination: "https://archer-web.vercel.app//:path*",
      },
    ];
  },
};

module.exports = nextConfig;
