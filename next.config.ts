import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { withSentryConfig } from '@sentry/nextjs';

// i18n
const withNextIntl = createNextIntlPlugin('./src/pkg/libraries/locale/request.ts');

// next config
const nextConfig: NextConfig = {
  output: 'standalone',
  instrumentationHook: './src/pkg/integrations/sentry/instrumentation.ts',

  poweredByHeader: false,
  cacheMaxMemorySize: 100 * 1024 * 1024,

  logging: {},

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        port: '',
        pathname: '/b/id/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    reactCompiler: true,
    optimizeServerReact: true,
    optimizePackageImports: [
      '@heroui/react',
      '@heroui/system',
      '@heroui/button',
      '@heroui/card',
      '@heroui/input',
      '@heroui/toast',
      '@tanstack/react-query',
      '@tanstack/react-query-devtools',
      'next-intl',
      'zustand',
      'react-hook-form',
      '@growthbook/growthbook',
    ],
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 2,
    staticGenerationMinPagesPerWorker: 25,
  },
}

// Sentry configuration
const sentryWebpackPluginOptions = {
  org: process.env.SENTRY_ORG || "your-org",
  project: process.env.SENTRY_PROJECT || "your-project",
  silent: !process.env.CI,
};

export default withSentryConfig(withNextIntl(nextConfig), sentryWebpackPluginOptions);