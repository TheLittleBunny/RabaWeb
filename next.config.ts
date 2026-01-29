import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure we can use CSS modules cleanly if needed, but defaults are usually fine.
};

export default nextConfig;
