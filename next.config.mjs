/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add transpilePackages for packages that need to be transpiled
  transpilePackages: ['three', 'three-globe'],
  // Improve server-side rendering compatibility
  reactStrictMode: true,
  // Disable server-side rendering for components that use browser APIs
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;