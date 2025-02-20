/** @type {import('next').NextConfig} */

const nextConfig = {
  target: 'server',
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  sassOptions: {
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: 'https',
        hostname: 'cdn.newsgen.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
