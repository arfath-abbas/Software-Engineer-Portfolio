/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add transpilePackages for packages that need to be transpiled
  transpilePackages: ['three', 'three-globe'],
  // Improve server-side rendering compatibility
  reactStrictMode: true,
  // Disable image optimization since we're using regular img tags
  images: {
    unoptimized: true,
  },
  // Skip type checking during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Completely disable static generation
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;