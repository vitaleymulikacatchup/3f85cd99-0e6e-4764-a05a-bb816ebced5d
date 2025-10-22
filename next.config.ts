import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif']
  }
}

export default nextConfig