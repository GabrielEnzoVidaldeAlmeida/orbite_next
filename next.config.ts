import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  devIndicators: {
    buildActivity: false,
    // autoPrerender: false,
    buildActivityPosition: "top-right", // ou 'top-right', etc.
  },
};

export default nextConfig;
