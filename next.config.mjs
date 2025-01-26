// import type { NextConfig } from 'next'
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: false,
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
    ],
  },
};

export default withPayload(nextConfig);
