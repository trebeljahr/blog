import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_STATIC_FILE_URL],
  },
  webpack(config) {
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
};

const config = withContentlayer(nextConfig);

export default config;
