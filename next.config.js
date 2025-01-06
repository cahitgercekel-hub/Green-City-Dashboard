/** @type {import('next').NextConfig***REMOVED*** */
const nextConfig = {
  webpack: (config, _options) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'csv-loader',
      options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
    ***REMOVED***,
  ***REMOVED***)
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
  ***REMOVED***)
    return config
***REMOVED***,
  output: 'standalone',
  images: {
    remotePatterns: [
***REMOVED***
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_DIRECTUS_URL,
    ***REMOVED***,
***REMOVED***
        protocol: 'http',
        hostname: 'localhost',
    ***REMOVED***,
    ],
***REMOVED***,
***REMOVED***

module.exports = nextConfig
