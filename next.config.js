/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/jwt-forge' : '',

  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
}

module.exports = nextConfig
