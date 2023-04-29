const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== 'development',
    },
    images: {
        domains: [ "cdn.discordapp.com" ]
    }
};

const withPWA = require("next-pwa")({
    dest: 'public',
    disable: process.env.NODE_ENV == "development",
    register: true,
    skipWaiting: true
});

module.exports = withPWA(nextConfig);