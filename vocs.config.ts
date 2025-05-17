import { defineConfig } from 'vocs'

export default defineConfig({
    title: 'SAS',
    description: 'Documentation for Solana Attestation Servie',
    basePath: '/docs',
    font: {
        default: {
            google: 'Geist Mono',
        },
    },
    theme: {
        colorScheme: 'dark'
    },
    sidebar: [
        {
            text: 'Getting Started',
            link: '/getting-started',
        },
    ],
    iconUrl: '/logo.svg',
})