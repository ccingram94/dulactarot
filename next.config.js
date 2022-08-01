/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["d2lc40okpdverw.cloudfront.net"],
  },
}

module.exports = nextConfig
