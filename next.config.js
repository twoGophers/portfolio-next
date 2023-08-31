const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_HOST: process.env.API_HOST,
    API_VERCEL: process.env.API_VERCEL,
  }
}

module.exports = nextConfig

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}