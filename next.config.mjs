/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactCompiler: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
