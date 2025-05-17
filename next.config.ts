import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    experimental: {
        mdxRs: true,
    },

    async rewrites() {
        switch (process.env.ENVIRONMENT) {
            case 'development':
                return [
                    {
                        source: '/docs',
                        destination: 'https://solana-attestation-site-docs-dev.vercel.app/docs',
                    },
                    {
                        source: '/docs/:path*',
                        destination: 'https://solana-attestation-site-docs-dev.vercel.app/docs/:path*',
                    },
                ]
            case 'production':
                return [
                    {
                        source: '/docs',
                        destination: 'https://solana-attestation-site-docs.vercel.app',
                    },
                    {
                        source: '/docs/:path*',
                        destination: 'https://solana-attestation-site-docs.vercel.app/docs/:path*',
                    },
                ]
            default:
                return [
                    {
                        source: '/docs',
                        destination: 'http://localhost:5173',
                    },
                    {
                        source: '/docs/:path*',
                        destination: 'http://localhost:5173/docs/:path*',
                    },
                ]
        }
    },
}

export default nextConfig
