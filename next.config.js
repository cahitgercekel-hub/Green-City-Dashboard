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
        hostname: 'cms.klimadashboard-ms.reedu.de',
    ***REMOVED***,
***REMOVED***
        protocol: 'http',
        hostname: 'localhost',
    ***REMOVED***,
    ],
***REMOVED***,
***REMOVED***

module.exports = nextConfig
