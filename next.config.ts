import type { NextConfig } from "next";

// Base path for GitHub Pages project site (https://<user>.github.io/recro/).
// Sourced from NEXT_PUBLIC_BASE_PATH (.env) so the same value is available to
// the client for inline-style asset URLs.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // GitHub Pages can't run Next's image optimizer.
    unoptimized: true,
  },
  allowedDevOrigins: ["*.vusercontent.net"],
};

export default nextConfig;
