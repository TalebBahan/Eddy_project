const allowedOrigins = [
    process.env.SITE_URI,
    process.env.FRONTEND_URI,
    'http://localhost:3500',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
];

module.exports = allowedOrigins;