import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    experimental: {
        mdxRs: true,
    },
    basePath: '/docs',

    async rewrites() {
        return [
            {
                source: '/docs/:path*',
                destination: '/docs/:path*',
            },
        ]
    },
}

export default nextConfig
