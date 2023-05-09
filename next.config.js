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
  output: 'standalone',
  images: {
    remotePatterns: [
***REMOVED***
        protocol: 'https',
        hostname: 'cms.klimadashboard-ms.reedu.de',
    ***REMOVED***,
    ],
***REMOVED***,
***REMOVED***

module.exports = nextConfig
