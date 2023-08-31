const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
      API_URL: process.env.API_URL
  }
}

module.exports = nextConfig

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}