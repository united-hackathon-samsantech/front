/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `http://43.201.20.119:8080/:path*`,
    },
  ],
};

module.exports = nextConfig;
