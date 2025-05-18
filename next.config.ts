import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    experimental: {
        mdxRs: true,
    },

    async rewrites() {
        const docsBaseUrl = process.env.ENVIRONMENT === 'production'
            ? 'https://solana-attestation-site-docs.vercel.app'
            : process.env.ENVIRONMENT === 'development'
                ? 'https://solana-attestation-site-docs-dev.vercel.app'
                : 'http://localhost:5173'

        return {
            beforeFiles: [
                {
                    source: '/docs',
                    destination: `${docsBaseUrl}/`,
                },
                {
                    source: '/docs/',
                    destination: `${docsBaseUrl}/`,
                },
                {
                    source: '/docs/:path*',
                    destination: `${docsBaseUrl}/:path*`,
                }
            ]
        }
    },
}

export default nextConfig
