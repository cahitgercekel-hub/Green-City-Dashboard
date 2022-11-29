/** @type {import('next').NextConfig***REMOVED*** */
const nextConfig = {
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
