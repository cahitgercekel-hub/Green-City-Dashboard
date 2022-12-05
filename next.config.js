/** @type {import('next').NextConfig***REMOVED*** */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'csv-loader',
      options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
    ***REMOVED***,
  ***REMOVED***)

    return config
***REMOVED***,
  experimental: {
    appDir: true,
***REMOVED***,
  images: {
    remotePatterns: [
***REMOVED***
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_DIRECTUS_URL.split('https://')[1],
    ***REMOVED***,
    ],
***REMOVED***,
***REMOVED***

module.exports = nextConfig
