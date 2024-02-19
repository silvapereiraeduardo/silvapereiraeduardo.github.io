/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {};

if (process.env.NODE_ENV !== "development") {
  nextConfig.output = "export";
}

module.exports = nextConfig;
