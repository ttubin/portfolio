import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  /* 이미지 최적화 */
  images: {
    unoptimized: true,
  },

  /* 정적 페이지 */
  output: "export",
};

export default nextConfig;
