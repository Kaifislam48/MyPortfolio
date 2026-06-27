import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  turbopack: {
    root: __dirname
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
