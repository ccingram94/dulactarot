/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        destination: "/:path*",
      }
    ]
},
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["d2lc40okpdverw.cloudfront.net", "images.ctfassets.net"],
  },
}

module.exports = nextConfig
