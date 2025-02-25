// import type { NextConfig } from 'next'

const nextConfig = {
  webpack: (config) => {
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".tsx"];
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.NEXT_PUBLIC_AWS_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com`,
        port: "",
        pathname: `/**`,
        search: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/uploads/**",
      },
      {
        // Add Strapi URL pattern
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_STRAPI_URL?.replace(
          /^https?:\/\//,
          ""
        ), // Remove protocol from URL if present
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
