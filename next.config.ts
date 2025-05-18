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

        return [
            // Main docs route
            {
                source: '/docs',
                destination: docsBaseUrl,
            },
            // All docs paths including nested routes
            {
                source: '/docs/:path*',
                destination: `${docsBaseUrl}/:path*`,
            },
            // Assets and static files
            {
                source: '/docs/_assets/:path*',
                destination: `${docsBaseUrl}/_assets/:path*`,
            },
            {
                source: '/docs/_next/:path*',
                destination: `${docsBaseUrl}/_next/:path*`,
            },
            {
                source: '/docs/static/:path*',
                destination: `${docsBaseUrl}/static/:path*`,
            }
        ]
    },
}

export default nextConfig
