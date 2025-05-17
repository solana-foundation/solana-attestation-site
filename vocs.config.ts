import { defineConfig } from 'vocs'

export default defineConfig({
    title: 'SAS',
    description: 'Documentation for Solana Attestation Servie',
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
    sidebar: [
        {
            text: 'Getting Started',
            link: '/docs/getting-started',
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