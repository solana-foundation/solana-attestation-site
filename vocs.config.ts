import { defineConfig } from 'vocs'

export default defineConfig({
    title: 'SAS',
    description: 'Documentation for the Solana Attestation Servie',
    basePath:  "/docs",
    font: {
        default: {
            google: 'Geist Mono',
        },
    },
    theme: {
        colorScheme: 'light'
    },
    iconUrl: {
        light: '/logo.svg',
        dark: '/logo.svg',
      },
      logoUrl: {
        light: '/logo.svg',
        dark: '/logo.svg',
      },
      socials: [
        {
            icon: 'github',
            link: 'https://github.com/solana-foundation/solana-attestation-service',
        },
      ],
    sidebar: [
        {
            text: 'Getting Started',
            link: '/docs',
        },
        {
            text: "Guides",
            collapsed: false,
            items: [
                {
                    text: "Creating a Credential",
                    link: "/docs/guides/creating-a-credential",
                },
                {
                    text: "Creating a Schema",
                    link: "/docs/guides/creating-a-schema",
                },
                {
                    text: "Creating an Attestation",
                    link: "/docs/guides/creating-an-attestation",
                },
                {
                    text: "Parsing an Attestation",
                    link: "/docs/guides/parsing-an-attestation",
                },
            ],
        }
    ],
})