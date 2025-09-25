import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

// i18n
const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/pkg/libraries/locale/request.ts',
})

// next config
const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,

  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },

  experimental: {
    reactCompiler: true,
  },
}

export default withNextIntl(nextConfig)