import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/pkg/libraries/locale/request.ts');

// next config
const nextConfig: NextConfig = {
  output: 'standalone',

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
    ],
  },

  experimental: {
    reactCompiler: true,
    optimizeServerReact: true,
    optimizePackageImports: [
      'zod',
      'react-hook-form',
      '@heroui/react',
      '@heroui/system',
      'zustand',
      'framer-motion',
      'next-intl',
    ],
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 2,
    staticGenerationMinPagesPerWorker: 25,
  },
}

export default withNextIntl(nextConfig);