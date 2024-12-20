import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
devIndicators: {
    appIsrStatus: false,
  },};

export default nextConfig;
