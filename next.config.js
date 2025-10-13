/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Hupscale' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Hupscale' : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './loader.js'
  }
}

module.exports = nextConfig
