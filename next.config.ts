import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zdyjuemvyygyislqwynu.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "www.eskimoz.fr",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
