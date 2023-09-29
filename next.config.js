/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
  transpilePackages: ['@acme/ui', 'lodash-es'],
}
