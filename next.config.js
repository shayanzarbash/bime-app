const path = require('path');
const ms = require('ms');
const withNextIntl = require('next-intl/plugin')();

const moduleExports = withNextIntl({
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  env: {
    SITE_URL: 'http://localhost:3000',
  },
  sassOptions: { includePaths: [path.join(__dirname, 'styles'),], },
  poweredByHeader: false,
  images: {
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    domains: ['http://localhost:3000'],
    minimumCacheTTL: 604800,
  },
  // sentry: { hideSourceMaps: true, },
  headers() {
    return [
      {
        // Cache all content pages
        source: '/((?!_next|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: [
              `s-maxage=` + ms('1d') / 1000,
              `stale-while-revalidate=` + ms('1y') / 1000
            ].join(', ')
          },
        ],

        // If you're deploying on a host that doesn't support the `vary` header (e.g. Vercel),
        // make sure to disable caching for prefetch requests of Server Components.
        // https://github.com/vercel/vercel/discussions/7612#discussioncomment-2434736
        missing: [
          {
            type: 'header',
            key: 'Next-Router-Prefetch'
          }
        ]
      },
    ];
  }
});

// module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
module.exports = moduleExports;