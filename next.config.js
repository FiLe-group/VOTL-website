const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    domains: [ "cdn.discordapp.com" ]
  },
};

module.exports = nextConfig;
