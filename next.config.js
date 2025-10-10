/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Hupscale' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Hupscale' : ''
}

module.exports = nextConfig
