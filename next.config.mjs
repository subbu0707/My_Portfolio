/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.slidesharecdn.com",
      },
      {
        protocol: "https",
        hostname: "social-img.staticblitz.com",
      },
      {
        protocol: "https",
        hostname: "blog.dookinternational.com",
      },
    ],
  },
};

export default nextConfig;
