/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: '/Hupscale',
  basePath: '/Hupscale',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
