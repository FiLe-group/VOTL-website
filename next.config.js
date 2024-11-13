/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    domains: [ "cdn.discordapp.com" ]
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};
