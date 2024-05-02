/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://archer-web-blog.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://archer-web-blog.vercel.app/blog/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
