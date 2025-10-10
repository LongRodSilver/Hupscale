/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: '/Hupscale',
  basePath: '/Hupscale',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './loader.js'
  }
}

module.exports = nextConfig
