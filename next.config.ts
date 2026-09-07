import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "kingpinengineering.com.au" }],
        destination: "https://www.kingpinengineering.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
