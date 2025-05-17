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
                        destination: 'https://solana-attestation-site-staging-docs.vercel.app/docs',
                    },
                ]
            case 'production':
                return [
                    {
                        source: '/docs',
                        destination: 'https://solana-attestation-site-docs.vercel.app/docs',
                    },
                ]
            default:
                return [
                    {
                        source: '/docs',
                        destination: 'http://localhost:5173/docs',
                    },
                ]
        }
    },
}

export default nextConfig
