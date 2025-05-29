/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "image.tmdb.org",
        pathname: "/**", // ensure all images from this host are allowed
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**", // ensure all images from this host are allowed
      },
    ],
  },
  eslint: {
    // Ignore ESLint build errors during production deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Set to false if you want the build to fail on TS errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
