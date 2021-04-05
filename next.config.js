const withPWA = require('next-pwa')

module.exports = withPWA({
    env: {
        appName: "Learn Next JS",
    },
    async rewrites() {
        return [
            {
                source: '/login',
                destination : '/auth/login'
            },
            {
                source: '/register',
                destination : '/auth/register'
            }
        ]
    },
    pwa: {
        disable: process.env.NODE_ENV === 'production',
        register: true,
        // scope: '/',
        sw: 'service-worker.js',
    }
})